import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Billboard = () => {
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
    <div style={{ backgroundColor: "lightgray", margin: 0, height: "100vh" }}>
      <div>
        <div>
          <Image
            overlayColor="#04040454"
            fluid={firstImage.localFile.childImageSharp.fluid}
          ></Image>
          <Link
            className="button is-black"
            style={{ backgroundColor: "black" }}
            to={`/product/${product.handle}`}
          >
            Shop the Premium-Cut Collection
          </Link>
        </div>
        <div>
          <h2></h2>
          {/* <h3 className="title">{product.title}</h3> */}
          {/* <p className="subtitle is-4">${firstVariant.price}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Billboard
