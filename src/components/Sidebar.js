import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StoreContext } from "../context/StoreContext"
import { useTransition } from "react-spring"

import Cart from "./Cart/Cart"
import CartIcon from "./Cart/CartIcon"
import Loader from "./Loader"
import Nav from "./Nav"

import "../style.scss"

const Sidebar = ({ siteTitle }) => {
  const { isCartOpen, toggleCartOpen, checkout } = useContext(StoreContext)

  const transitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(0%, 0, 0)" },
    enter: { transform: "translate3d(100%, 0, 0)" },
    leave: { transform: "translate3d(0%, 0, 0)" },
  })
  const quantity = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  const shoppingCartTotal = checkout.totalPrice

  return (
    <>
      <div
        style={{
          backgroundColor: "#fafafa",
          borderRight: "1px solid #f2f2f2",
          height: "100vh",
          margin: 0,
          minHeight: "5rem",
          padding: "2%",
          paddingTop: "100px",
          position: "fixed",
          width: "360px",
          zIndex: 50,
        }}
      >
        <div>
          {/* {shoppingCartTotal} */}
          <CartIcon quantity={quantity} toggleCartOpen={toggleCartOpen} />
          <Link to="/">
            <h1
              className="site-title"
              style={{
                color: "black",
                fontSize: "2rem",
                fontWeight: 500,
                fontFamily: "Pacifico",
                marginBottom: "60px",
              }}
            >
              iaaafm.dev
            </h1>
          </Link>
          <Nav />
        </div>
        {transitions.map(
          ({ item, key, props }) =>
            item && <Cart quantity={quantity} key={key} style={props} />
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
