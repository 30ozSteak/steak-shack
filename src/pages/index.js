import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer"
import "../components/Footer/Footer.scss"
// import VideoPlayer from "../components/Video/VideoPlayer"
// import ProductsListing from "../components/ProductsListing/ProductsListing"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <h1>I'm steaky</h1>
      {/* one day, a great <Featured /> component could go here */}
      {/* Portoflio Landing / Greeting */}
      {/* Blogs / Talks */}
      {/* Projects */}
      {/* About me blurb */}
      {/* <ProductsListing /> */}
      {/* <VideoPlayer /> */}
    </Layout>
  </div>
)

export default IndexPage
