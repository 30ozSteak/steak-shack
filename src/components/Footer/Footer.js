import React from "react"
import { Link } from "gatsby"

import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai"

import "./Footer.scss"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="left-columns">
      <ul className="footer-links">
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
      <ul className="footer-links">
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
    <div>
      <p>{siteTitle}</p>
      <p>
        Nick Dambrosio, {new Date().getFullYear()} <br />
        Built with
        <a href="https://www.gatsbyjs.org"> Gatsby</a>, Powered by{" "}
        <a href="https://www.shopify.com">Shopify</a>
        <br />
        <div className="social-block" style={{ marginTop: "1rem" }}>
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
        </div>
      </p>
    </div>
  </footer>
)

export default Footer
