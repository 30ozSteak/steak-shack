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
      {allShopifyCollection.edges.map(edge => {
        return (
          <li key={edge.node.id}>
            <Link to={`/${edge.node.handle}`}>{edge.node.title}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Nav
