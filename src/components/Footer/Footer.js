import React from "react"

import "./Footer.css"

const Footer = ({ siteTitle }) => (
  <div className="foot">
    © {new Date().getFullYear()}{" "}
    <a href="https://www.twitter.com/iaaafm">iaaafm, </a>
    <span> powered by </span>
    <a href="https://www.shopify.com">Shopify</a>
  </div>
)

export default Footer
