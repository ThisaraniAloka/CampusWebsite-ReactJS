import React from 'react'
import './About.css' 
import about_img from '../../assets/About.jpg'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>  
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>  
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Innovative Education for a Better World</h2>
        <p>Eduverse is a forward-thinking educational institution dedicated to shaping the leaders of tomorrow. We pride ourselves on providing a wide range of degree programs,
             from technology and business to arts and sciences, tailored to meet the demands of the modern world.
        </p>
        <p>
        Our state-of-the-art facilities, experienced faculty, and student-focused approach ensure that every learner thrives both academically and personally. 
        At Educity, we believe in fostering innovation, critical thinking, and lifelong learning to help students achieve their dreams and make a meaningful
         impact in their communities.
        </p>
      </div>
    </div>
  )
}

export default About
