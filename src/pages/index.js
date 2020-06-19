import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Billboard from "../components/Billboard"
import ProductsListing from "../components/ProductsListing/ProductsListing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Billboard />
    <ProductsListing />
  </Layout>
)

export default IndexPage
