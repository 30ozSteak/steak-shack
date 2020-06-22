import React from "react"

const Footer = () => (
  <footer
    className="footer"
    style={{ background: "var(--darkPurp)", color: "white" }}
  >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
