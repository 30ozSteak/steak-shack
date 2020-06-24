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
                fluid(maxWidth: 1080, maxHeight: 400) {
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
      <div className="columns">
        <div className="column">
          <Image
            overlayColor="#04040454"
            fluid={firstImage.localFile.childImageSharp.fluid}
          />
        </div>
        <div className="column">
          <h2 className="title">Just Released:</h2>
          <h3 className="title">{product.title}</h3>
          <p className="subtitle is-4">${firstVariant.price}</p>
          <Link className="button" to={`/product/${product.handle}`}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Billboard
