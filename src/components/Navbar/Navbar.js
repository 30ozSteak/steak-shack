import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StoreContext } from "../../context/StoreContext"
import { useTransition } from "react-spring"
import Hamburger from "./Hamburger"

import Cart from "../Cart/Cart"
import CartIcon from "../Cart/CartIcon"
import Loader from "../Loader"
import Nav from "./Nav"

import "./Navbar.scss"
import "../../style.scss"

const Navbar = ({ siteTitle }) => {
  const {
    isCartOpen,
    isNavOpen,
    toggleCartOpen,
    toggleNavOpen,
    checkout,
  } = useContext(StoreContext)

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
      <Loader />
      <div className="nav">
        <Link to="/"> iaaafm.dev </Link>
        <div className="nav-right">
          <Nav />
          {transitions.map(
            ({ item, key, props }) =>
              item && <Cart quantity={quantity} key={key} style={props} />
          )}
          <CartIcon
            shoppingCartTotal={shoppingCartTotal}
            quantity={quantity}
            toggleCartOpen={toggleCartOpen}
          />
          <Hamburger toggleNavOpen={toggleNavOpen} />
        </div>
      </div>
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
