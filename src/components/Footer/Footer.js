import React from "react"
import { Link } from "gatsby"

import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineCopyright,
} from "react-icons/ai"

// I should do a static query to my own gatsby config and pull most of this out

import "./Footer.scss"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="left-columns">
      <ul className="footer-links">
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
    </div>
    <div>
      © {new Date().getFullYear()}{" "}
      <a href="https://www.twitter.com/iaaafm">{siteTitle} </a>
      <br />
      Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>, Powered by{" "}
      <a href="https://www.shopify.com">Shopify</a>
      <br />
      <div className="social-block">
        <a href="www.twitter.com/iaaafm">
          <AiOutlineTwitter />
        </a>
        <a href="www.github.com/30ozsteak">
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
