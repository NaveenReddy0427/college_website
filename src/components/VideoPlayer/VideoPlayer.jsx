import './VideoPlayer.css'
import video from "../../assets/college-video.mp4"
import { useRef } from 'react'

const VideoPlayer = ({playState, setPlayState}) => {

  const play = useRef(null)

  const closePlay = (e) => {
    if(e.target === play.current){
      setPlayState(false)
    }
  }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={play} onClick={closePlay}>
        <video src={video} autoPlay muted controls>
        </video>
    </div>
  )
}

export default VideoPlayer