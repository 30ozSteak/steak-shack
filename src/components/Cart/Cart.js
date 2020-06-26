import React, { useContext, useState } from "react"
import { animated } from "react-spring"
import { StoreContext } from "../../context/StoreContext"
import { RiCloseLine } from "react-icons/ri"

const Cart = ({ style, quantity }) => {
  const {
    checkout,
    toggleCartOpen,
    removeProductFromCart,
    checkCoupon,
    removeCoupon,
  } = useContext(StoreContext)

  const [coupon, setCoupon] = useState("")

  return (
    <animated.div
      className="sidebar"
      style={{
        background: "#fafafa",
        boxShadow: "2px 0 2px -1px #888",
        overflow: "scroll",
        height: "100%",
        left: 0,
        padding: "40px 2%",
        position: "fixed",
        top: 0,
        width: "360px",
        zIndex: "95",
        ...style,
      }}
    >
      {/* <RiCloseLine onClick={toggleCartOpen} /> */}
      <h5
        style={{
          margin: "2rem 0",
          textTransform: "uppercase",
          letterSpacing: "-.5px",
        }}
      >
        You have <span style={{ fontWeight: 900 }}>{quantity}</span> items in
        your cart
      </h5>
      {checkout.lineItems.length > 0 ? (
        <>
          {checkout.lineItems.map(item => (
            <div
              key={item.id}
              style={{ display: "flex", marginBottom: "2rem" }}
            >
              <div
                style={{
                  width: 60,
                  height: 90,
                  overflow: "hidden",
                  marginRight: 10,
                  maxHeight: "50vh",
                  overflow: "scroll",
                }}
              >
                <img src={item.variant.image.src} alt="" />
              </div>
              <div>
                <h4 className="title is-6">{item.title}</h4>
                <p className="subtitle is-6">${item.variant.price}</p>

                <div style={{ display: "flex" }}>
                  <p className="subtitle is-6" style={{ marginRight: "4rem" }}>
                    Qty: {item.quantity}{" "}
                  </p>
                  <button
                    onClick={() => removeProductFromCart(item.id)}
                    className="is-small button is-dark is-outlined"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div>
            {checkout.discountApplications.length > 0 ? (
              <p>
                Coupon:
                <h5 className="title">
                  {checkout.discountApplications[0].code} -{" "}
                  {checkout.discountApplications[0].value.percentage}% off
                </h5>
                <button
                  onClick={() =>
                    removeCoupon(checkout.discountApplications[0].code)
                  }
                  className="is-small button is-dark is-outlined"
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
                    className="input"
                    id="coupon"
                    value={coupon}
                    onChange={e => setCoupon(e.target.value)}
                    type="text"
                  />
                </div>
                <button className="button">Add Coupon</button>
              </form>
            )}
          </div>
          <hr />
          <div>
            Total: <h5 className="title">${checkout.totalPrice}</h5>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a href={checkout.webUrl} className="button is-fullwidth is-dark">
              Checkout Now
            </a>
          </div>
        </>
      ) : (
        <p>No items in cart</p>
      )}
    </animated.div>
  )
}

export default Cart
