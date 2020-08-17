import React, { useState } from "react"
import Fade from "react-reveal/Fade"

import "./Contact.css"

export default function Contact() {
  const [submittedForm, setHasSubmittedForm] = useState(false)

  const handleSubmit = () => {
    setHasSubmittedForm(true)
  }

  return (
    <div className="contact-section">
      <div className="contact-greeting">
        <h1>Let's discuss your dream project.</h1>
      </div>

      <div className="contact-form">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          action="/success"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required={true} />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required={true} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" required={true} />
          </div>
          <button
            type="submit"
            value="Send Message"
            className="button is-dark"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
