import React from "react"
import { AiOutlineShopping } from "react-icons/ai"

const CartIcon = ({ quantity, toggleCartOpen }) => {
  return (
    <div>
      <button
        className="button"
        style={{
          position: "relative",
          background: "transparent",
          border: "none",
        }}
        onClick={toggleCartOpen}
      >
        {quantity > 0 && (
          <div
            style={{
              color: "black",
              textAlign: "center",
              height: 30,
              width: 30,
              lineHeight: "40px",
              position: "absolute",
            }}
          >
            {quantity}
            {/* / $ {shoppingCartTotal} */}
          </div>
        )}
        <AiOutlineShopping
          style={{
            color: "black",
            height: 50,
            width: 50,
            margin: "0 1rem",
          }}
        />
      </button>
    </div>
  )
}

export default CartIcon
