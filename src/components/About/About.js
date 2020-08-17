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
      </Fade>

      <p>
        I believe great teams and products are only made in environments that
        embrace inclusivity and promote an accomodating diversity of thought,
        expressions, and views. <br /> <br />
        <br />
        <Link key="About" to="/about">
          More about me
          <GrFormNextLink />
        </Link>
      </p>
    </section>
  )
}

export default About
