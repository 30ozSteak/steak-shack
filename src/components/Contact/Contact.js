import React from "react"

import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-intro">
        <h2>See what happens when great ideas meet great design.</h2>
      </div>
      <h2>I'm always looking for new and exciting challenges.</h2>

      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <p className="hidden">
          <input type="hidden" name="bot-field" value="contact" />
        </p>
        <label>
          <input type="name" name="name" required={true} placeholder="Name" />
        </label>
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
      </form>
    </div>
  )
}

export default Contact
