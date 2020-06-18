import React, { useContext, useState } from "react"
import { StoreContext } from "../../context/StoreContext"
import { animated } from "react-spring"

const Cart = ({ style }) => {
  const {
    isCartOpen,
    toggleCartOpen,
    checkout,
    removeProductFromCart,
    checkCoupon,
    removeCoupon,
  } = useContext(StoreContext)

  const [coupon, setCoupon] = useState("")

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
      <div>
        {checkout.discountApplications.length > 0 ? (
          <p>
            <h5 className="title">
              {checkout.discountApplications[0].code} - %
              {checkout.discountApplications[0].value.percentage}{" "}
            </h5>
            <button
              className="is-small button is-danger is-outlined"
              onClick={() =>
                removeCoupon(checkout.discountApplications[0].code)
              }
            >
              Remove
            </button>
          </p>
        ) : (
          <form
            onSubmit={e => {
              e.preventDefault()
              checkCoupon(coupon)
            }}
          >
            <div className="field">
              <label htmlFor="coupon" className="label">
                Coupon
              </label>
              <input
                type="text"
                className="input"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
              />
            </div>
            <button className="button">Add Coupon</button>
          </form>
        )}
      </div>
      <hr />
      <div>
        Total: <h5 className="title">$ {checkout.totalPrice}</h5>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <a href={checkout.webUrl} className="button is-fullwidth is-primary">
          Checkout Now
        </a>
      </div>
    </animated.div>
  )
}

export default Cart
