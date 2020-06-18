import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { animated } from "react-spring"

const Cart = ({ style }) => {
  const {
    isCartOpen,
    toggleCartOpen,
    checkout,
    removeProductFromCart,
  } = useContext(StoreContext)
  // debugger
  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "30%",
        height: "100%",
        zIndex: 50,
        background: "white",
        padding: "40px 2%",
        boxShadow: "var(--elevation-2)",
        ...style,
      }}
    >
      <button
        style={{
          background: "var(--red)",
          position: "absolute",
          top: 10,
          right: 10,
        }}
        className="delete is-large"
        onClick={toggleCartOpen}
      ></button>
      <h3 className="title">Cart</h3>
      {checkout.lineItems.map(item => (
        <div key={item.id} style={{ display: "flex", marginBottom: "2rem" }}>
          <div
            style={{
              width: 80,
              height: 80,
              overflow: "hidden",
              marginRight: 20,
            }}
          >
            <img src={item.variant.image.src} />
          </div>
          <h4 className="title is-4"> {item.title}</h4>
          <p className="subtitle is-5">${item.variant.price}</p>
          <p className="subtitle is-5">Quantity: {item.quantity}</p>
          <button
            onClick={() => removeProductFromCart(item.id)}
            className="is-small button is-danger is-outlined"
          >
            Remove
          </button>
        </div>
      ))}
      <hr />
      Total: <h5 className="title">$ {checkout.totalPrice}</h5>
    </animated.div>
  )
}

export default Cart
