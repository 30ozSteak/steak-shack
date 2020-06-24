import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Billboard from "../components/Billboard"
import VideoBlock from "../components/VideoBlock"
import ProductsListing from "../components/ProductsListing/ProductsListing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoBlock />
    <Billboard />
    <ProductsListing />
  </Layout>
)

export default IndexPage
