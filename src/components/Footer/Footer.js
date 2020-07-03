import React from "react"
import { Link } from "gatsby"
import Newsletter from "../../components/Newsletter/Newsletter"

import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai"

// I should do a static query to my own gatsby config and pull most of this out

import "./Footer.scss"

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div className="left-columns">
      <ul>
        <li>
          <Link to="../pages/faq.js">FAQ</Link>
        </li>
        <li>
          <Link to="../pages/faq.js">Returns and Exchanges</Link>
        </li>
        <li>
          <Link to="../pages/faq.js">Contact</Link>
        </li>
      </ul>
      <div className="author-block">
        © {new Date().getFullYear()}{" "}
        <a href="https://www.twitter.com/iaaafm">{siteTitle} </a>
        <br />
        Built with
        <a href="https://www.gatsbyjs.org"> Gatsby</a>, Powered by{" "}
        <a href="https://www.shopify.com">Shopify</a>
      </div>
    </div>
    <Newsletter />
  </div>
)

export default Footer
