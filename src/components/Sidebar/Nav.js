import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./Sidebar.scss"

const Nav = () => {
  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query allShopifyCollections {
        allShopifyCollection {
          edges {
            node {
              title
              handle
            }
          }
        }
      }
    `
  )

  return (
    <nav className="nav">
      <li>
        <Link to={"/"}> Home </Link>
      </li>
      {allShopifyCollection.edges.map(edge => {
        return (
          <li>
            <Link to={`/${edge.node.handle}`}>{edge.node.title}</Link>
          </li>
        )
      })}
    </nav>
  )
}

export default Nav
