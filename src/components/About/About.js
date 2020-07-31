import React from "react"
import "./About.css"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import { GrFormNextLink } from "react-icons/gr"

const About = () => {
  return (
    <section className="about">
      <Fade bottom>
        <div className="hero-image"></div>
        <p>
          Hi, I'm Nick. A software developer focused on the pursuit of ideas
          that put people first. I believe that in order to create and sustain
          an inclusive workspace we need to ensure that there exists an
          atmosphere of accomodating diversity of thought, expressions, and
          views. <br /> <br />
          <br />
          <Link key="About" to="/about">
            More about me
            <GrFormNextLink />
          </Link>
        </p>
      </Fade>
    </section>
  )
}

export default About
