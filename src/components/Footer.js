import React from "react"
import { AiOutlineTwitter } from "react-icons/ai"

const Footer = () => (
  <footer className="footer" style={{ background: "#F7F7F7", color: "black" }}>
    <p>Customer Service</p>{" "}
    <ul>
      <li>Help / FAQ</li>
      <li>Returns and Exchanges</li>
      <li>Contact Us</li>
    </ul>
    <ul>
      <li>Shop</li>
      <li>Blog</li>
      <li>About our stickers</li>
    </ul>
    <div>
      <AiOutlineTwitter />
      <p>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  </footer>
)

export default Footer
