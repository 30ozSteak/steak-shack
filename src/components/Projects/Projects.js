import React from "react"
import "../Projects/Projects.scss"

const Projects = () => {
  return (
    <div className="projects">
      <h2 id="work">Recent Work.</h2>
      <article className="project-card">
        <h3 className="project-title">
          Building a sophisticated <br /> cryptocurrency analyst
        </h3>
        <button class="button is-dark">View Project</button>
      </article>
      <article className="project-card">
        <h3 className="project-title">
          Maintaining mental health <br /> and navigating uncertainty during
          COVID-19
        </h3>
        <button class="button is-dark">View Project</button>
      </article>
    </div>
  )
}

export default Projects
