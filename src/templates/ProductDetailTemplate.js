import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import AddToCart from "../components/Cart/AddToCart"

const ProductDetailTemplate = ({ data }) => {
  const { shopifyProduct: product } = data
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product

  return (
    <Layout>
      <div style={{ padding: "5rem", display: "flex" }}>
        <div className="column">
          <Image fluid={firstImage.localFile.childImageSharp.fluid} />
        </div>
        <div style={{ margin: "3rem" }}>
          <h1 className="title">{product.title}</h1>
          <p className="subtitle is-4">${firstVariant.price}</p>
          <p>{product.description}</p>
          <AddToCart variantId={firstVariant.shopifyId} />
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetailTemplate

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      handle
      title
      productType
      description
      variants {
        id
        shopifyId
        title
        price
        sku
        availableForSale
      }
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
