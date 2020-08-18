import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./Navbar.css"

const Nav = () => {
  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query allShopifyCollections {
        allShopifyCollection {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    `
  )

  return (
    <div className="nav-items">
      <Link key="About" to="/about">
        {" "}
        About{" "}
      </Link>
      <Link key="projects" to="#work">
        {" "}
        Work{" "}
      </Link>

      {allShopifyCollection.edges.map(edge => {
        return (
          <Link key="Stickers" to="/shop">
            Shop
          </Link>
        )
      })}
    </div>
  )
}

export default Nav
