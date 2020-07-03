import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductsListingItem from "./ProductsListingItem"
import "./ProductListing.scss"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    products: allShopifyProduct(sort: { fields: publishedAt, order: ASC }) {
      edges {
        node {
          title
          id
          handle
          description
          productType
          variants {
            shopifyId
            title
            price
            availableForSale
          }
          images {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

const ProductsListing = () => {
  return (
    <div>
      <StaticQuery
        query={PRODUCTS_LISTING_QUERY}
        render={({ products }) => {
          return (
            <div className="all-products-container">
              <h2 className="title">All Products</h2>
              <div className="all-products">
                {products.edges.map(({ node: product }) => (
                  <ProductsListingItem key={product.id} product={product} />
                ))}
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}

export default ProductsListing
