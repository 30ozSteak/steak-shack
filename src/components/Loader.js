import React, { useContext } from "react"
import { animated, useTransition } from "react-spring"
import { StoreContext } from "../context/StoreContext"

const Loader = () => {
  const { isLoading } = useContext(StoreContext)

  const transitions = useTransition(isLoading, null, {
    from: { transform: "translate3d(-100%, 0, 0)", opacity: 1 },
    enter: { transform: "translate3d(0%, 0, 0)", opacity: 1 },
    leave: { transform: "translate3d(100%, 0, 0)", opacity: 0 },
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={{
            position: "fixed",
            top: "0rem",
            left: 0,
            width: "100%",
            height: ".2rem",
            zIndex: 1000,
            backgroundColor: "var(--black)",
            ...props,
          }}
        ></animated.div>
      )
  )
}

export default Loader
