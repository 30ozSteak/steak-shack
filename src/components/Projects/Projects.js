import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import "../Projects/Projects.css"
import teller from "../../images/teller-screenshot-min.png"

const data = [
  {
    name: "Teller",
    id: 1,
    description: "#a8edea → #fed6e3",
    css: "#a8edea",
    height: 100,
  },
  {
    name: "Covid Quick Assist",
    id: 2,
    description: "#f5f7fa → #c3cfe2",
    css: "#f5f7fa",
    height: 200,
  },
  {
    name: "Stomp",
    id: 3,
    description: "#e0c3fc → #8ec5fc",
    css: "#e0c3fc",
    height: 300,
  },
  {
    name: "Nookbot",
    id: 4,
    description: "#f093fb → #f5576c",
    css: "#f093fb",
    height: 200,
  },
  {
    name: "ITADW?",
    id: 5,
    description: "#fdfbfb → #ebedee",
    css: "#E3FDF5",
    height: 200,
  },
]

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-grid">
        <div>
          <h2>Explore Recent Works</h2>
          <p>I'm constantly refining my product and skillset.</p>
        </div>
        {data.map(item => (
          <div
            className="project-card"
            style={{ background: item.css }}
            key={item.id}
          >
            {/* <h1>{item.name}</h1> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
