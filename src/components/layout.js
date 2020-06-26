import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "../components/Sidebar/Sidebar"
import Newsletter from "./Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"

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
      <Sidebar siteTitle={data.site.siteMetadata.title} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <main
          className="section"
          style={{
            minHeight: "100vh",
            paddingTop: 0,
            marginLeft: "288px",
            padding: 0,
          }}
        >
          {children}
        </main>
        <Newsletter />
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
