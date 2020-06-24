import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StoreContext } from "../context/StoreContext"
import { useTransition } from "react-spring"

import Banner from "./Banner"
import Cart from "./Cart/Cart"
import CartIcon from "./Cart/CartIcon"
import Loader from "./Loader"
import Nav from "./Nav"

import "../style.scss"

const Sidebar = ({ siteTitle }) => {
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
          backgroundColor: "#fafafa",
          borderRight: "1px solid #f2f2f2",
          display: "flex",
          height: "100vh",
          margin: 0,
          minHeight: "5rem",
          padding: "20px 5%",
          paddingTop: "150px",
          position: "fixed",
          paddingLeft: "1.5%",
          width: "20%",
          maxWidth: "360px",
          minWidth: "240px",
          zIndex: 4,
        }}
      >
        <div>
          <CartIcon quantity={quantity} toggleCartOpen={toggleCartOpen} />
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

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
