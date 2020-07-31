import React from "react"
import { Link } from "gatsby"

import Fade from "react-reveal/Fade"
import { FiExternalLink } from "react-icons/fi"

import "../Projects/Projects.css"
import teller from "../../images/teller-screenshot-min.png"

const Projects = () => {
  return (
    <div className="projects">
      <h2 id="work">Recent Work.</h2>
      <Fade bottom>
        <article className="project-card">
          <div className="left">
            <h3 className="project-title">
              Building a Powerful <br /> Cryptocurrency AI Analyst
            </h3>
            <p className="project-description">
              React, Redux, Python, IBM Watson, Coinbase
            </p>
            <div className="project-links">
              <Link key="Github" to="">
                Github
                <FiExternalLink />
              </Link>
              <Link key="Live" to="">
                Live
                <FiExternalLink />
              </Link>
            </div>
            <button aria-label="view-project-button" className="round-button">
              View Project
            </button>
          </div>
          <Fade bottom>
            <div className="right">
              <img alt="teller mockup" src={teller} />
            </div>
          </Fade>
        </article>
      </Fade>
      <Fade bottom>
        <article className="project-card">
          <h3 className="project-title">
            Prioritizing Mental Health <br /> During the Pandemic
          </h3>
          <p className="project-description">
            React, Firebase, D3, SCSS, Tailwind CSS,
          </p>
          <div className="project-links">
            <Link key="Github" to="">
              Github
              <FiExternalLink />
            </Link>
            <Link key="Live" to="">
              Live
              <FiExternalLink />
            </Link>
          </div>
          <button aria-label="view-project-button" className="round-button">
            View Project
          </button>
        </article>
      </Fade>
    </div>
  )
}

export default Projects
