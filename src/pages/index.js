import React, { Suspense } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Footer/Footer.scss"
import Greeting from "../components/Greeting/Greeting"
import Fade from "react-reveal/Fade"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Talks from "../components/Talks/Talks"
import Contact from "../components/Contact/Contact"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Fade bottom>
        <Greeting />
        <About />
      </Fade>
      <Projects />
      <Talks />
      <div className="divider" />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
