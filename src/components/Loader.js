import React, { useContext } from "react"
import { animated, useTransition } from "react-spring"
import { StoreContext } from "../context/StoreContext"

const Loader = () => {
  const { isLoading } = useContext(StoreContext)

  const transitions = useTransition(isLoading, null, {
    from: { transform: "translate3d(100%, 0, 0)", opacity: 0 },
    enter: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    leave: { transform: "translate3d(100%, 0, 0)", opacity: 0 },
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            background: "var(--xtraPurp)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...props,
          }}
        ></animated.div>
      )
  )
}

export default Loader
