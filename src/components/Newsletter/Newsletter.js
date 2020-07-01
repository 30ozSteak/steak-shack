import React from "react"

import "./Newsletter.scss"

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="form-intro">
        <h2> Newsletter </h2>
        <p> Be the first to know when we have new gear!</p>
      </div>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <p class="hidden">
          <input type="hidden" name="bot-field" value="contact" />
        </p>
        <p>
          <label>
            <input
              type="email"
              name="email"
              required="true"
              placeholder="Email"
            />
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
