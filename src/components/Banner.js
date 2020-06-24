import React from "react"

const Banner = () => (
  <div
    className="banner"
    style={{
      height: "40px",
      backgroundColor: "black",
      textAlign: "center",
      color: "white",
      fontSize: 13,
      display: "flex",
      textTransform: "uppercase",
      letterSpacing: ".5px",
      position: "fixed",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 5,
    }}
  >
    Follow{" "}
    <a
      style={{ color: "white", fontWeight: 600, padding: "0 5px" }}
      href="https://www.twitter.com/iaaafm"
    >
      {" "}
      @iaaafm{" "}
    </a>{" "}
    on Twitter for 10% off!
  </div>
)

export default Banner
