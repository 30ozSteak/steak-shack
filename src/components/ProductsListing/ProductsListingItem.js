import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import AddToCart from "../Cart/AddToCart"

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <article className="column is-one-quarter content">
      <Link to={`/product/${product.handle}`} style={{ display: "block" }}>
        <Image fluid={firstImage.localFile.childImageSharp.fluid} />
        <h3
          style={{
            textTransform: "uppercase",
            fontSize: ".9rem",
            marginBottom: 0,
          }}
        >
          {product.title}
        </h3>
        <p style={{ fontSize: ".9rem", color: "black" }}>
          ${firstVariant.price}
        </p>
      </Link>
      {/* <AddToCart variantId={firstVariant.shopifyId} /> */}
    </article>
  )
}

export default ProductsListingItem
