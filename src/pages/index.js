import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoPlayer from "../components/Video/VideoPlayer"
import ProductsListing from "../components/ProductsListing/ProductsListing"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      {/* <Featured /> */}
      <ProductsListing />
      <VideoPlayer />
    </Layout>
  </div>
)

export default IndexPage
