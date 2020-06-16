import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa"
import "../style.scss"
import Cart from "./Cart/Cart"
import { useTransition, animated } from "react-spring"

import { StoreContext } from "../context/StoreContext"

const Header = ({ siteTitle }) => {
  const { isCartOpen, toggleCartOpen } = useContext(StoreContext)
  const transitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%, 0, 0)" },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: "translate3d(100%, 0, 0)" },
  })

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item"></Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <button onClick={toggleCartOpen}>
            <FaShoppingCart
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                color: "white",
                height: 90,
                width: 30,
                border: "1px solid black",
                zIndex: 20,
              }}
            />
          </button>
        </div>
      </div>
      {transitions.map(
        ({ item, key, props }) => item && <Cart key={key} style={props} />
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
