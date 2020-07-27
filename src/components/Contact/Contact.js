import React from "react"
import Fade from "react-reveal/Fade"

import "./Contact.scss"

const Contact = () => {
  return (
    <Fade bottom>
      <div className="contact-container">
        <div className="form-intro">
          <h2>See what happens when great ideas meet great design.</h2>
        </div>
        <h2>I'm always looking for new and exciting challenges.</h2>
        <Fade bottom>
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
              <input
                type="name"
                name="name"
                required={true}
                placeholder="Name"
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                required={true}
                placeholder="Email"
              />
            </label>
            <button className="round-button" type="submit">
              Send
            </button>
          </form>
        </Fade>
      </div>
    </Fade>
  )
}

export default Contact
