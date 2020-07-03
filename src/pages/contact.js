import React from "react"

import "../components/Contact/contact.scss"

const Contact = () => {
  return (
    <div>
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
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="text" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Contact
