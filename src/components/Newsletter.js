import React from "react"

const Newsletter = () => {
  return (
    <div
      style={{
        color: "black",
        paddingTop: "10vw",
        paddingBottom: "10vw",
        paddingLeft: "10%",
        paddingRight: "10%",
        width: "80%",
        marginLeft: "20%",
        textAlign: "left",
        backgroundColor: "#ebebeb",
      }}
    >
      <h2
        style={{
          fontSize: "1.2rem",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        {" "}
        Newsletter{" "}
      </h2>
      <p>Be the first to know when we drop new gear</p>
      <input
        type="email"
        class="newsletter__input"
        placeholder="Enter your email"
        name="contact[email]"
        id="Email"
        aria-label="Enter your email"
        autocorrect="off"
        autocapitalize="off"
        style={{
          marginBottom: "10px",
          color: "black",
          width: "100%",
          height: "55px",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid black",
          outline: "none",
        }}
      />
    </div>
  )
}

export default Newsletter
