import React from "react"

import "./Newsletter.scss"

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2> Newsletter </h2>
      <p>Be the first to know when we drop new gear</p>
      <input
        type="email"
        className="newsletter__input"
        placeholder="Enter your email"
        name="contact[email]"
        id="Email"
        aria-label="Enter your email"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  )
}

export default Newsletter
