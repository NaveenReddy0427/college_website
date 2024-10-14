import './About.css'
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrows Leader Today</h2>
            <p>
            A university is a hub for higher education, offering advanced learning opportunities across various fields of study. It serves as a place where students not only gain specialized knowledge but also develop critical thinking, research, and analytical skills essential for their future careers.
            </p>
            <p>
            Faculty members at universities are experts in their fields, guiding students through complex subjects and fostering innovation through research. Universities provide access to state-of-the-art facilities, including libraries, laboratories, and digital tools, creating an enriching academic experience.
            </p>
            <p>
            In addition to academics, universities play a significant role in social and personal development. They offer a vibrant campus life, encouraging students to engage in extracurricular activities, cultural events, and leadership opportunities, helping them grow into well-rounded, responsible individuals.
            </p>

        </div>
    </div>
  )
}

export default About