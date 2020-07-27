import React from "react"
import "./About.scss"

const About = () => {
  return (
    <section className="about">
      <div className="hero-image"></div>
      <p>
        Hi, I'm Nick. A creator focused on the pursuit of ideas that put people
        first. I believe that in order to create and sustain an inclusive
        workspace we need to ensure that there exists an atmosphere of
        accomodating diversity of thought, expressions, and views.
      </p>
      <p>You can find me all over the internet.</p>
      <ul>
        <li>
          <a href="https://www.twitter.com/iaaafm">Github</a>
        </li>{" "}
        <li>
          <a href="https://www.twitter.com/iaaafm">Twitter</a>
        </li>{" "}
        <li>
          <a href="https://www.twitter.com/iaaafm">Glitch</a>
        </li>{" "}
        <li>
          <a href="https://www.twitter.com/iaaafm">LinkedIn</a>
        </li>{" "}
        <li>
          <a href="https://www.twitter.com/iaaafm">Twitch</a>
        </li>{" "}
      </ul>
    </section>
  )
}

export default About
