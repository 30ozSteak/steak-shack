import React from "react"
import { GrShop } from "react-icons/gr"

const CartIcon = ({ quantity, toggleCartOpen, shoppingCartTotal }) => {
  return (
    <div className="cart-icon-container">
      <div className="cart-preview">
        {quantity > 0 && (
          <div>
            {quantity}/ $ {shoppingCartTotal}
          </div>
        )}
      </div>
      <div className="cart-icon" onClick={toggleCartOpen}>
        <GrShop />
      </div>
    </div>
  )
}

export default CartIcon
