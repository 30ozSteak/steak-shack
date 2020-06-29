import React, { useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StoreContext } from "../context/StoreContext"

import CartIcon from "../components/Cart/CartIcon"
import "../Nav/Nav.scss"

const Nav = ({ siteTitle }) => {
  const { toggleCartOpen, checkout } = useContext(StoreContext)

  const shoppingCartTotal = checkout.totalPrice

  const quantity = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query MyQuery {
        allShopifyCollection {
          edges {
            node {
              id
              handle
              title
            }
          }
        }
      }
    `
  )

  return (
    <nav className="nav">
      <Link to="/">
        <h1>{siteTitle}</h1>
      </Link>
      {allShopifyCollection.edges.map(edge => {
        return (
          <li>
            <Link key={id} to={`/${edge.node.handle}`}>
              {edge.node.title}
            </Link>
          </li>
        )
      })}
      <div>
        <CartIcon
          shoppingCartTotal={shoppingCartTotal}
          quantity={quantity}
          toggleCartOpen={toggleCartOpen}
        />
      </div>
    </nav>
  )
}

export default Nav
