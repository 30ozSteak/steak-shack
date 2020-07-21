import React from "react"

import "./Newsletter.scss"

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="form-intro">
        <h2>Newsletter</h2>
        <p> Be the first to know when we drop new gear, courses, and more! </p>
      </div>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <p className="hidden">
          <input type="hidden" name="bot-field" value="contact" />
        </p>
        <div className="button-box">
          <label>
            <input
              type="email"
              name="email"
              required={true}
              placeholder="Email"
            />
          </label>
          <button className="is-dark button" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Newsletter
