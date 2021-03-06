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
      className="cart-open"
      style={{
        ...style,
      }}
    >
      <div className="quantity-container">
        <h5>
          You have <span>{quantity}</span> items in your cart
        </h5>
        <RiCloseLine onClick={toggleCartOpen} />
      </div>
      {checkout.lineItems.length > 0 ? (
        <>
          {checkout.lineItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="item-preview">
                <img src={item.variant.image.src} alt="" />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>${item.variant.price}</p>
                <div>
                  <p>Qty: {item.quantity} </p>
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

          <div className="coupon-cart-container">
            {checkout.discountApplications.length > 0 ? (
              <p>
                Coupon:
                <p>
                  {checkout.discountApplications[0].code} -{" "}
                  {checkout.discountApplications[0].value.percentage}% off
                </p>
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
                <button className="button is-dark is-outlined">
                  Add Coupon
                </button>
              </form>
            )}
          </div>
          <hr />
          <div>
            Total: <p className="title">${checkout.totalPrice}</p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a
              href={checkout.webUrl}
              id="checkoutButton"
              className="button is-fullwidth is-dark"
              style={{ color: "white", margin: 0 }}
            >
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
