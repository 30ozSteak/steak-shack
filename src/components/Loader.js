import React, { useContext } from "react"
import { animated, useTransition } from "react-spring"
import { StoreContext } from "../context/StoreContext"

const Loader = () => {
  const { isLoading } = useContext(StoreContext)

  const transitions = useTransition(isLoading, null, {
    from: { transform: "translate3d(100%, 0, 0)", opacity: 1 },
    enter: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    leave: { transform: "translate3d(0, 0, -50%)", opacity: 0 },
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={{
            position: "fixed",
            top: "4rem",
            right: 0,
            width: "3rem",
            height: "3rem",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            border: "none",
            backgroundColor: "lightgray",
            ...props,
          }}
        ></animated.div>
      )
  )
}

export default Loader
