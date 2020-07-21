import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./Navbar.scss"

const Nav = () => {
  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query allShopifyCollections {
        allShopifyCollection {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    `
  )

  return (
    <div className="nav-items">
      <Link to="/projects"> Talks </Link>
      <Link to="/projects"> Projects </Link>

      {allShopifyCollection.edges.map(edge => {
        return <Link to={`/${edge.node.handle}`}>{edge.node.title}</Link>
      })}
    </div>
  )
}

export default Nav
