import React from "react"
import { GrShop } from "react-icons/gr"

const CartIcon = ({ quantity, toggleCartOpen, shoppingCartTotal }) => {
  return (
    <div className="cart-icon-container">
      {quantity > 0 && (
        <div>
          {quantity}/ $ {shoppingCartTotal}
        </div>
      )}
      <button onClick={toggleCartOpen}>
        <GrShop />
      </button>
    </div>
  )
}

export default CartIcon
