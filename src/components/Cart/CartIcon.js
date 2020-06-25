import React from "react"
import { AiOutlineShopping } from "react-icons/ai"
import { GrShop } from "react-icons/gr"

const CartIcon = ({ quantity, toggleCartOpen }) => {
  return (
    <div style={{ textAlign: "right" }}>
      <button
        style={{
          position: "relative",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={toggleCartOpen}
      >
        {quantity > 0 && (
          <div
            style={{
              color: "black",
              textAlign: "center",
              left: "1.36rem",
              lineHeight: "50px",
              position: "absolute",
            }}
          >
            {quantity}
            {/* / $ {shoppingCartTotal} */}
          </div>
        )}
        <GrShop
          style={{
            color: "black",
            height: 40,
            width: 40,
          }}
        />
      </button>
    </div>
  )
}

export default CartIcon
