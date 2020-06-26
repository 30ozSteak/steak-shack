import React, { useContext, useState } from "react"
import { animated } from "react-spring"
import { StoreContext } from "../../context/StoreContext"
import { RiCloseLine } from "react-icons/ri"

const Cart = ({ style }) => {
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "360px",
        height: "100%",
        background: "#fafafa",
        padding: "40px 2%",
        boxShadow: "2px 0 2px -1px #888",
        overflow: "scroll",
        zIndex: 65,
        ...style,
      }}
    >
      <RiCloseLine
        onClick={toggleCartOpen}
        style={{
          width: 40,
          height: 40,
          position: "absolute",
          marginTop: 25,
          right: 25,
        }}
      />
      <h5 className="title" style={{ marginTop: "4rem" }}>
        Cart
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
                }}
              >
                <img src={item.variant.image.src} alt="" />
              </div>
              <div>
                <h4 className="title is-6">{item.title}</h4>
                <p className="subtitle is-6">${item.variant.price}</p>

                <div style={{ display: "flex" }}>
                  <p className="subtitle is-6">Qty: {item.quantity}</p>
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
