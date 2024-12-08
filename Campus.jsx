import React from 'react'
import './Campus.css'
import gallery_01 from '../../assets/gallery1.jpg'
import gallery_02 from '../../assets/gallery2.jpg'
import gallery_03 from '../../assets/gallery3.jpg'
import gallery_04 from '../../assets/gallery4.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_01} alt=""/>
        <img src={gallery_02} alt=""/>
        <img src={gallery_03} alt=""/>
        <img src={gallery_04} alt=""/>
      </div>
      <button className='btn dark-btn'>see more here <img src={white_arrow} alt=""/></button>
    </div>
  )
}

export default Campus
