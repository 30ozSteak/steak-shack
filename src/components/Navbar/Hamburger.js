import React from "react"

import { animated, useSpring, config } from "react-spring"
// import { StoreContext } from "../../context/StoreContext"

import "./Navbar.css"

let openedHamburger = {
  top: "translate(2, 7) rotate(0)",
  center: "translate(2, 19) rotate(0)",
  bottom: "translate(2, 31) rotate(0)",
  color: "#000",
  zIndex: 9000,
}

let closedHamburger = {
  top: "translate(7, 32) rotate(-45)",
  center: "translate(10, 4) rotate(45)",
  bottom: "translate(7, 32) rotate(-45)",
  color: "#fff",
  zIndex: 9000,
}

const Hamburger = ({ isNavOpen, toggleNavOpen }) => {
  let { top, center, bottom, color, zIndex } = useSpring({
    to: isNavOpen ? closedHamburger : openedHamburger,
    config: config.stiff,
  })

  return (
    <button onClick={toggleNavOpen}>
      <animated.svg
        width="25"
        height="58"
        viewBox="0 0 44 41"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="hamburger-menu"
        zIndex={zIndex}
      >
        <animated.rect width="40" height="3.5" rx="0" transform={top} />
        <animated.rect width="40" height="3.5" rx="0" transform={center} />
        <animated.rect width="40" height="3.5" rx="0" transform={bottom} />
      </animated.svg>
    </button>
  )
}

export default Hamburger
