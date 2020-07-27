import React from "react"
import { Link } from "gatsby"
import "../Projects/Projects.scss"
import { FiExternalLink } from "react-icons/fi"

const Projects = () => {
  return (
    <div className="projects">
      <h2 id="work">Recent Work.</h2>
      <article className="project-card">
        <h3 className="project-title">
          Building a Sophisticated <br /> Cryptocurrency Analyst
        </h3>
        <p className="project-description">
          React, Python, IBM Watson, Coinbase
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
        <button className="round-button">View Project</button>
      </article>
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
        <button className="round-button">View Project</button>
      </article>
    </div>
  )
}

export default Projects
