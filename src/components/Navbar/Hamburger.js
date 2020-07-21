import React, { useContext, useState } from "react"

import { animated, useSpring, config } from "react-spring"
import { StoreContext } from "../../context/StoreContext"

import "./Navbar.scss"

let openedHamburger = {
  top: "translate(2, 7) rotate(0)",
  center: "translate(2, 19) rotate(0)",
  bottom: "translate(2, 31) rotate(0)",
  color: "#000",
}

let closedHamburger = {
  top: "translate(7, 32) rotate(-45)",
  center: "translate(10, 4) rotate(45)",
  bottom: "translate(7, 32) rotate(-45)",
  color: "#000",
}

const Hamburger = () => {
  const [toggleNavOpen, isNavOpen, toggleCartOpen] = useContext(StoreContext)

  let { top, center, bottom, color } = useSpring({
    to: isNavOpen ? closedHamburger : openedHamburger,
    config: config.stiff,
  })

  return (
    <div onClick={toggleCartOpen}>
      <animated.svg
        width="30"
        height="60"
        viewBox="0 0 44 40"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="hamburger-menu"
      >
        <animated.rect width="35" height="3" rx="0" transform={top} />
        <animated.rect width="35" height="3" rx="0" transform={center} />
        <animated.rect width="35" height="3" rx="0" transform={bottom} />
      </animated.svg>
    </div>
  )
}

export default Hamburger
