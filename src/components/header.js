import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StoreContext } from "../context/StoreContext"
import { useTransition } from "react-spring"

import { FaShoppingCart } from "react-icons/fa"

import Cart from "./Cart/Cart"
import Loader from "./Loader"
import Nav from "./Nav"

import "../style.scss"

const Header = ({ siteTitle }) => {
  const { isCartOpen, toggleCartOpen, checkout } = useContext(StoreContext)
  debugger

  const transitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%, 0, 0)" },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: "translate3d(100%, 0, 0)" },
  })
  const quantity = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  const shoppingCartTotal = checkout.totalPrice

  return (
    <>
      <div
        className="banner"
        style={{
          height: "3rem",
          backgroundColor: "#ced3ca",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Follow{" "}
        <a style={{ padding: "0 5px" }} href="https://www.twitter.com/iaaafm">
          {" "}
          @iaaafm{" "}
        </a>{" "}
        on Twitter for 10% off!
      </div>
      <header
        className="level is-mobile"
        style={{
          padding: "20px 5%",
          minHeight: "5rem",
          margin: 0,
        }}
      >
        <div className="level-left">
          <Link to="/">
            <h1
              style={{
                color: "black",
                fontSize: "2rem",
                marginRight: "5rem",
                fontWeight: 300,
              }}
            >
              Steak Shack
            </h1>
          </Link>
          <Nav />
        </div>
        <div className="level-right">
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
              <FaShoppingCart
                style={{ color: "black", height: 30, width: 30 }}
              />
              {quantity > 0 && (
                <div
                  style={{
                    color: "black",
                    textAlign: "center",
                    height: 30,
                    width: 30,
                    lineHeight: "30px",
                  }}
                >
                  {quantity} / $ {shoppingCartTotal}
                </div>
              )}
            </button>
          </div>
        </div>
        {transitions.map(
          ({ item, key, props }) => item && <Cart key={key} style={props} />
        )}
      </header>
      <Loader />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
