import React from "react"
import { GrShop } from "react-icons/gr"

const CartIcon = ({ quantity, toggleCartOpen, shoppingCartTotal }) => {
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <div className="cart-icon">
        <GrShop />
        <div>{quantity > 0 && <div className="cart-notification"></div>}</div>
      </div>
    </div>
  )
}

export default CartIcon
