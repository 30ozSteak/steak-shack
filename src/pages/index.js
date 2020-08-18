import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Greeting from "../components/Greeting/Greeting"
import Fade from "react-reveal/Fade"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Greeting />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
