import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner/Banner"
import Billboard from "../components/Billboard"
import VideoBlock from "../components/VideoBlock"
import ProductsListing from "../components/ProductsListing/ProductsListing"

const IndexPage = () => (
  <div>
    <Banner />
    <Layout>
      <SEO title="Home" />
      <VideoBlock />
      <Billboard />
      <ProductsListing />
    </Layout>
  </div>
)

export default IndexPage
