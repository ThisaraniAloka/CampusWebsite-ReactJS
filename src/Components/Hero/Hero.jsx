import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/right arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empowering Education for a Brighter Tomorrow</h1>
        <p>At Eduverse, we are committed to shaping the future through quality education. Our innovative curriculum equips students with the knowledge, skills, 
          and hands-on experience necessary to thrive in an ever-evolving world. We strive to provide the tools for success, fostering a generation of leaders, 
          thinkers, and change-makers.
        </p>
        <button className='btn'>Explore more<img src={dark_arrow} alt=""></img></button>
      </div>
    </div>
  )
}

export default Hero
