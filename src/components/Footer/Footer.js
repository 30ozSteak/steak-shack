import React from "react"

import "./Footer.scss"

const Footer = ({ siteTitle }) => (
  <div className="foot">
    <div className="author-block">
      © {new Date().getFullYear()}{" "}
      <a href="https://www.twitter.com/iaaafm">iaaafm</a> Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>, Powered by{" "}
      <a href="https://www.shopify.com">Shopify</a>
    </div>
  </div>
)

export default Footer
