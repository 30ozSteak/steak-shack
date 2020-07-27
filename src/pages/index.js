import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Footer/Footer.scss"
import Greeting from "../components/Greeting/Greeting"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Talks from "../components/Talks/Talks"
import Projects from "../components/Projects/Projects"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Greeting />
      <About />
      <Projects />
      <Talks />
      <div className="divider" />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
