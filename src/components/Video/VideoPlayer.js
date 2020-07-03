import React from "react"
import steakVideo from "../../images/compressedsteakHANDBRAKE.mp4"

import "./VideoPlayer.scss"

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video className="video-tag" autoPlay loop muted preload>
        <source src={steakVideo} type="video/mp4" autoPlay loop muted preload />
      </video>
    </div>
  )
}

export default VideoPlayer
