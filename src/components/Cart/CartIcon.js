import React from "react"
import { AiOutlineShopping } from "react-icons/ai"
import { GrShop } from "react-icons/gr"
import "./Cart.css"

const CartIcon = ({ quantity, toggleCartOpen, shoppingCartTotal }) => {
  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={toggleCartOpen}>
        {quantity > 0 && <div>{quantity}</div>}
        <GrShop />
      </button>
    </div>
  )
}

export default CartIcon
