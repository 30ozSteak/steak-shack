import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { animated } from "react-spring"

const Cart = ({ style }) => {
  const { isCartOpen, checkout } = useContext(StoreContext)

  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        background: "white",
        padding: 60,
        boxShadow: "var(--elevation-2)",
        ...style,
      }}
    >
      <h3>Cart</h3>
      {checkout.lineItems.map(item => (
        <div key={item.id}>
          <h4> {item.title}</h4>
          <p>{item.quantity}</p>
          <p>${item.variant.price}</p>
        </div>
      ))}
    </animated.div>
  )
}

export default Cart
