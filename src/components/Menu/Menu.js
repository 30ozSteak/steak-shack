import React from "react"
import { Link } from "gatsby"
// import Socials from "./socials"

import { useSpring, animated, config } from "react-spring"
import "./menu.css"

const Menu = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    config: config.stiff,
  })
  return (
    <div className="menu" style={{ pointerEvents: isOpen ? "all" : "none" }}>
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(0, ${x * -1}%, 0)`),
        }}
        className="menu-card"
      >
        <p>
          Hi, 👋 <br /> I'm Nick, a Software Developer from Denver, Colorado.{" "}
          <br />
        </p>
        {/* <Socials /> */}
      </animated.div>
    </div>
  )
}

export default Menu
