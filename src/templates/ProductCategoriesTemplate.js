import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductsListingItem from "../components/ProductsListing/ProductsListingItem"

const ProductCategoriesTemplate = ({ data }) => {
  const { shopifyCollection } = data

  return (
    <Layout>
      <div className="all-products-container">
        <h2 className="title">{shopifyCollection.title}</h2>
        <div className="all-products">
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
              fluid(maxWidth: 300, maxHeight: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
