import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <article style={{ textAlign: "center" }} className="column is-one-quarter">
      <Link
        to={`/product/${product.handle}`}
        style={{ color: "var(--black)", display: "block" }}
      >
        <Image fluid={firstImage.localFile.childImageSharp.fluid} />
        <p style={{ marginTop: "1rem", textTransform: "uppercase" }}>
          {product.title}
        </p>
        <p>${firstVariant.price}</p>
      </Link>
    </article>
  )
}

export default ProductsListingItem
