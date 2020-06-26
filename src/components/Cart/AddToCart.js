import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import "./Cart.scss"

const AddToCart = ({ variantId }) => {
  const { addProductToCart } = useContext(StoreContext)
  return (
    <button
      className="button is-square is-dark"
      onClick={() => addProductToCart(variantId)}
    >
      Add To Cart
    </button>
  )
}

export default AddToCart
