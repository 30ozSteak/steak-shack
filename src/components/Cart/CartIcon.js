import React from "react"
import { GrShop } from "react-icons/gr"

const CartIcon = ({ quantity, toggleCartOpen, shoppingCartTotal }) => {
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      {/* <div className="cart-preview">
        {quantity > 0 && (
          <div>
            {quantity}/ $ {shoppingCartTotal}
            <span>Cart</span>
          </div>
        )}
      </div> */}
      <div className="cart-icon">
        <GrShop />
      </div>
    </div>
  )
}

export default CartIcon
