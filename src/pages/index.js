import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Greeting from "../components/Greeting/Greeting"
import Fade from "react-reveal/Fade"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Talks from "../components/Talks/Talks"
import Contact from "../components/Contact/Contact"
import Divider from "../components/Divider/Divider"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Greeting />
      <About />
      <Projects />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
