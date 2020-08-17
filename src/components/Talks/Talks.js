import React from "react"
import Fade from "react-reveal/Fade"

import "./Talks.css"

const Talks = () => {
  return (
    <div className="talks">
      <h2>Recent Talks.</h2>
      <article className="talk-card">
        <h3 className="talk-title">
          <a href="/">
            Improving Discrete Latent Representations With Differentiable
            Approximation Bridges
          </a>
        </h3>
        <p className="talk-topic">Methods and Algorithms</p>
      </article>
      <article className="talk-card">
        <h3 className="talk-title">
          <a href="/">
            Improving Discrete Latent Representations With Differentiable
            Approximation Bridges
          </a>
        </h3>
        <p className="talk-topic">Methods and Algorithms</p>
      </article>
      <article className="talk-card">
        <h3 className="talk-title">
          <a href="/">
            Improving Discrete Latent Representations With Differentiable
            Approximation Bridges
          </a>
        </h3>
        <p className="talk-topic">Methods and Algorithms</p>
      </article>
    </div>
  )
}

export default Talks
