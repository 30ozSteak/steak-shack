import React from "react"

import "./Newsletter.scss"

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2> Newsletter </h2>
      <p> Be the first to know when we have new gear!</p>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <p class="hidden">
          <input name="bot-field" />
        </p>
        <p>
          <label>
            <input type="text" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Newsletter
