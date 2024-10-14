import './Hero.css'
import darkArrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container">
        <div className='hero-text'>
            <h1>
                We Ensure education for a better world
            </h1>
            <p>
                Our mission is to provide quality education to all, regardless of their background, skill level, or location.
            </p>
            <button className='btn'>
                Explore more
                <img src={darkArrow} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Hero