import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"

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
                fluid(maxWidth: 600, maxHeight: 500) {
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
    <div>
      <div>
        <div>
          <Image
            overlayColor="#04040454"
            fluid={firstImage.localFile.childImageSharp.fluid}
          ></Image>
          <Link
            style={{
              position: "relative",
              left: "5rem",
              bottom: "5rem",
              color: "white",
              padding: "1rem",
            }}
            className="button is-dark"
            to={`/product/${product.handle}`}
          >
            Shop the Premium-Cut Collection
            <BsArrowRight style={{ marginLeft: "10px" }} />
          </Link>
        </div>
        <div>
          {/* <h3 className="title">{product.title}</h3> */}
          {/* <p className="subtitle is-4">${firstVariant.price}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Billboard
