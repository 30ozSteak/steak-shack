import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Newsletter from "./Newsletter"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <main
          className="section"
          style={{
            minHeight: "100vh",
            paddingTop: 0,
            width: "80%",
            marginLeft: "20%",
            padding: 0,
          }}
        >
          {children}
        </main>
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
