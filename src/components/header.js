import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { useTransition } from "react-spring"
import { FaShoppingCart } from "react-icons/fa"
import "../style.scss"
import { StoreContext } from "../context/StoreContext"
import logo from "../images/logo.svg"
import Cart from "./Cart/Cart"
import Loader from "./Loader"
import Nav from "./Nav"

const Header = ({ siteTitle }) => {
  const { isCartOpen, toggleCartOpen, checkout, isLoading } = useContext(
    StoreContext
  )
  const transitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%, 0, 0)" },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: "translate3d(100%, 0, 0)" },
  })
  const quantity = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  return (
    <>
      <div
        className="banner"
        style={{ height: "3rem", backgroundColor: "#ced3ca" }}
      ></div>
      <header
        className="level is-mobile"
        style={{
          padding: "20px 5%",
          minHeight: "5rem",
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
                  {quantity} /
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
