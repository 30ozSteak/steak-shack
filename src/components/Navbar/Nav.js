import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
    <nav className="nav">
      <li>
        <Link to={"/"}> Home </Link>
      </li>
      {allShopifyCollection.edges.map(edge => {
        return (
          <li key={edge.node.id}>
            <Link to={`/${edge.node.handle}`}>{edge.node.title}</Link>
          </li>
        )
      })}
    </nav>
  )
}

export default Nav
