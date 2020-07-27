import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./Navbar.scss"

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
      <Link key="talks" to="/talks">
        {" "}
        Talks{" "}
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
