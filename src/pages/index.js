import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Banner from "../components/Banner/Banner"
import Featured from "../components/Featured/Featured"
import VideoPlayer from "../components/Video/VideoPlayer"
import "../Fonts/TTCommons-Medium.woff"
import ProductsListing from "../components/ProductsListing/ProductsListing"

const IndexPage = () => (
  <div>
    {/* <Banner /> */}
    <Layout>
      <SEO title="Home" />
      <VideoPlayer />
      {/* <Featured /> */}
      <ProductsListing />
    </Layout>
  </div>
)

export default IndexPage
