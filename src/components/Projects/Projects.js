import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import "../Projects/Projects.css"
import teller from "../../images/teller-screenshot-min.png"

const data = [
  {
    name: "Teller",
    id: 1,
    description: "Your Personal Cryptocurrency Analyst",
    css: "#fc599f",
  },
  {
    name: "Covid Quick Assist",
    id: 2,
    description: "Daily Checkins during the Pandemic",
    css: "#f5f7fa",
  },
  {
    name: "Nookbot",
    id: 4,
    description: "You Owe 50,000 Bells",
    css: "#f093fb",
  },
  {
    name: "Is This a Dating Website?",
    id: 5,
    description: "The End of Unsolicited DMs",
    css: "#E3FDF5",
  },
]

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-grid">
        {data.map(item => (
          <div className="project">
            <div
              className="project-card"
              style={{ background: item.css }}
              key={item.id}
            ></div>
            <h2>{item.description}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
