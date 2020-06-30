import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductsListingItem from "../components/ProductsListing/ProductsListingItem"

const ProductCategoriesTemplate = ({ data }) => {
  const { shopifyCollection } = data

  return (
    <Layout>
      <div style={{ width: "80%", margin: "5rem auto" }}>
        <h2 className="title" style={{ fontSize: "3rem" }}>
          {shopifyCollection.title}
        </h2>
        <div className="columns is-multiline" style={{ letterSpacing: "1px" }}>
          {shopifyCollection.products.map(product => (
            <ProductsListingItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProductCategoriesTemplate

export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      title
      products {
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
              fluid(maxWidth: 400, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
