import React from "react"
import { StoreContext } from "../../context/StoreContext"
const Cart = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        background: "white",
        boxShadow: "var(--elevation-2)",
      }}
    >
      <h3>CART</h3>
    </div>
  )
}

export default Cart
