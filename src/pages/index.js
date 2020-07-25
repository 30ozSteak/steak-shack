import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer"
import "../components/Footer/Footer.scss"
import Greeting from "../components/Greeting/Greeting"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Greeting />
      {/* one day, a great <Featured /> component could go here */}
      Portoflio Landing / Greeting
      {/* Projects */}
      {/* <VideoPlayer /> */}
    </Layout>
  </div>
)

export default IndexPage
