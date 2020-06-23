import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./Sidebar"
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
      <Sidebar siteTitle={data.site.siteMetadata.title} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <main className="section" style={{ minHeight: "90vh", paddingTop: 0 }}>
          {children}
        </main>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "15rem",
            textAlign: "center",
            backgroundColor: "#ced3ca",
          }}
        >
          <h2 style={{ fontSize: "3rem" }}> Follow us on Twitter </h2>
          <p>
            Be the first to know when new products drop and get
            behind-the-scenes content straight from Steak n Shake's founder.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
