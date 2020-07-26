import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Footer/Footer.scss"
import Greeting from "../components/Greeting/Greeting"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Greeting />
      {/* Projects */}
      {/* News */}
      {/* Contact */}
    </Layout>
  </div>
)

export default IndexPage
