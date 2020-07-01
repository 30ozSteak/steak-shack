import React from "react"
import steakVideo from "../../images/compressedsteak.mp4"

import "./VideoPlayer.scss"

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <div className="collection-container">
        <h1>New at iaaafm.dev</h1>
        <p>Shop the Premium Cut Collection</p>
      </div>
      <video className="video-tag" autoPlay loop muted>
        <source src={steakVideo} type="video/mp4" autoPlay />
      </video>
    </div>
  )
}

export default VideoPlayer
