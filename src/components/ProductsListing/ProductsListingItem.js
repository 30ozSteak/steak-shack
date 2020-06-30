import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import "./ProductListing.scss"

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <div className="all-products-product">
      <Link to={`/product/${product.handle}`}>
        <Image fluid={firstImage.localFile.childImageSharp.fluid} />
        <p>{product.title}</p>
        <p>${firstVariant.price}</p>
      </Link>
    </div>
  )
}

export default ProductsListingItem
