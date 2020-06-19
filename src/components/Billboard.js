import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Nav = () => {
  const { shopifyProduct } = useStaticQuery(
    graphql`
      query {
        shopifyProduct(vendor: { eq: "featured" }) {
          title
          handle
        }
      }
    `
  )

  return (
    <nav>
      {allShopifyCollection.edges.map(edge => {
        return (
          <Link
            style={{ color: "#FFF", marginLeft: 15 }}
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
