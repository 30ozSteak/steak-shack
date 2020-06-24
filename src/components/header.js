import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StoreContext } from "../context/StoreContext"
import { useTransition } from "react-spring"

import { AiOutlineShopping } from "react-icons/ai"

import Banner from "./Banner"
import Cart from "./Cart/Cart"
import Loader from "./Loader"
import Nav from "./Nav"

import "../style.scss"

const Header = ({ siteTitle }) => {
  const { isCartOpen, toggleCartOpen, checkout } = useContext(StoreContext)

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
      <Banner />
      <div
        style={{
          padding: "20px 5%",
          paddingTop: "150px",
          minHeight: "5rem",
          backgroundColor: "white",
          width: "225px",
          height: "100vh",
          position: "fixed",
          paddingLeft: "1.5%",
          margin: 0,
          zIndex: 4,
        }}
      >
        <div>
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
              <AiOutlineShopping
                style={{
                  color: "black",
                  height: 30,
                  width: 30,
                  margin: "0 1rem",
                }}
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
          <Link to="/">
            <h1
              className="title"
              style={{
                color: "black",
                fontSize: "2rem",
                fontWeight: 500,
                fontFamily: "Pacifico",
              }}
            >
              iaaafm.dev
            </h1>
          </Link>
          <Nav />
        </div>
        {transitions.map(
          ({ item, key, props }) => item && <Cart key={key} style={props} />
        )}
      </div>
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
