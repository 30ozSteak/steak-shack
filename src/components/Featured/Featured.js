import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Featured = () => {
  const { shopifyProduct: product } = useStaticQuery(
    graphql`
      query featured {
        shopifyProduct(vendor: { eq: "featured" }) {
          id
          handle
          title
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
                fluid(maxWidth: 1920, maxHeight: 1080) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    `
  )

  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product

  return (
    <div className="featured-container">
      <div className="first-featured">
        <Image fluid={firstImage.localFile.childImageSharp.fluid} />
        <button className="button is-dark">
          <Link
            style={{ color: "white", padding: "2rem" }}
            to={`/product/${product.handle}`}
          >
            Shop Stickers
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Featured
