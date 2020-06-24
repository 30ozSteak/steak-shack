import React from "react"
import { Link } from "gatsby"

import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai"

const Footer = () => (
  <footer
    className="footer"
    style={{
      padding: "4.5rem 5%",
      lineHeight: "2rem",
      display: "flex",
      backgroundColor: "#fafafa",
      color: "black",
      justifyContent: "space-between",
    }}
  >
    <div
      className="left-columns"
      style={{ display: "flex", margin: "auto 0", color: "black" }}
    >
      <ul>
        <li>Customer Service</li>
        <li>
          <Link to="../pages/faq.js">Help / FAQ</Link>
        </li>
        <li>
          <Link to="../pages/faq.js">Returns and Exchanges</Link>
        </li>
        <li>
          <Link to="../pages/faq.js">Contact Us</Link>
        </li>
      </ul>
      <ul style={{ marginLeft: "5rem" }}>
        <li>
          <Link to="../pages/faq.js">Shop</Link>
        </li>
        <li>
          <Link to="../pages/faq.js">Blog</Link>
        </li>
        <li>
          <Link to="../pages/faq.js">About our stickers</Link>
        </li>
      </ul>
    </div>
    <div style={{ textAlign: "right" }}>
      <p
        style={{
          fontSize: "2rem",
          fontFamily: "Pacifico",
          margin: "1rem 0",
          userSelect: "none",
        }}
      >
        iaaafm.dev
      </p>
      <p>
        Nick Dambrosio, {new Date().getFullYear()} <br />
        Built with
        <a href="https://www.gatsbyjs.org"> Gatsby</a>
        <br />
        <a href="www.twitter.com/iaaafm">
          <AiOutlineTwitter
            style={{
              color: "black",
              fontSize: 30,
              textAlign: "right",
              marginRight: 0,
            }}
          />
        </a>
        <a href="www.github.com/30ozsteaak">
          <AiOutlineGithub
            style={{
              color: "black",
              fontSize: 30,
              textAlign: "right",
              marginRight: 0,
            }}
          />
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
