import React from "react"
import { GrShop } from "react-icons/gr"

const CartIcon = ({ quantity, toggleCartOpen }) => {
  return (
    <button onClick={toggleCartOpen}>
      <div className="cart-icon-container">
        <div className="cart-icon">
          <GrShop />
          <div>{quantity > 0 && <div className="cart-notification"></div>}</div>
        </div>
      </div>
    </button>
  )
}

export default CartIcon
