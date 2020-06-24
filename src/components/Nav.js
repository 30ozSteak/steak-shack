import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
    <nav>
      <Link to={"/"}> Home </Link>
      {allShopifyCollection.edges.map(edge => {
        return (
          <Link
            style={{
              color: "black",
              display: "block",
              margin: "1rem 0",
              textTransform: "uppercase",
              fontSize: ".9rem",
            }}
            to={`/${edge.node.handle}`}
          >
            {edge.node.title}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
