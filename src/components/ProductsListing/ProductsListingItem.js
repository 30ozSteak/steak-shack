import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <article className="column is-one-quarter content">
      <Link to={`/product/${product.handle}`} style={{ display: "block" }}>
        <Image fluid={firstImage.localFile.childImageSharp.fluid} />
        <h3>{product.title}</h3>
        <p>${firstVariant.price}</p>
      </Link>
    </article>
  )
}

export default ProductsListingItem
