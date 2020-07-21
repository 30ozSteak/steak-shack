import React from "react"
import { animated, useSpring, config } from "react-spring"
import "./Navbar.scss"

let openedHamburger = {
  top: "translate(2, 7) rotate(0)",
  center: "translate(2, 19) rotate(0)",
  bottom: "translate(2, 31) rotate(0)",
  color: "#ffffff",
}

let closedHamburger = {
  top: "translate(7, 32) rotate(-45)",
  center: "translate(10, 4) rotate(45)",
  bottom: "translate(7, 32) rotate(-45)",
  color: "#ffffff",
}

const Hamburger = ({ toggleNavOpen, isNavOpen }) => {
  let { top, center, bottom, color } = useSpring({
    to: isNavOpen ? closedHamburger : openedHamburger,
    config: config.stiff,
  })

  return (
    <animated.svg
      width="34"
      height="34"
      viewBox="0 0 44 44"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleNavOpen}
    >
      <animated.rect width="40" height="4" rx="0" transform={top} />
      <animated.rect width="40" height="4" rx="0" transform={center} />
      <animated.rect width="40" height="4" rx="0" transform={bottom} />
    </animated.svg>
  )
}

export default Hamburger
