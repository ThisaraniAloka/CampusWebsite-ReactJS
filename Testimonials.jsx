import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user_1.webp'
import user_2 from '../../assets/user_3.webp'
import user_3 from '../../assets/user_2.webp'
import user_4 from '../../assets/user_4.jpg'


const Testimonials = () => {

    const slider=useRef();
    let tx=0;

const slideForward=()=>{
    if(tx>-50){
        tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}
const slideBackward=()=>{
    if(tx<0){
        tx +=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`; 
}
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className='next-btn'onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="uesr-info">
                        <img src={user_1} alt=""/>
                        <div>
                            <h3>Emily Harper</h3>
                            <span>67 Willow Lane, Birmingham, UK</span>
                        </div>
                    </div>
                    <p>
                    Eduverse has an incredible campus with modern facilities that make learning engaging and enjoyable.
                     The peaceful surroundings and well-equipped classrooms provide an ideal environment for study.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="uesr-info">
                        <img src={user_2} alt=""/>
                        <div>
                            <h3>James Carter</h3>
                            <span>123 Maple Avenue, London, UK</span>
                        </div>
                    </div>
                    <p>
                    The campus at Eduverse is simply beautiful. I love the open spaces and green areas, perfect for both relaxation and collaboration with fellow students.
                     It's a great place to learn and grow.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="uesr-info">
                        <img src={user_3} alt=""/>
                        <div>
                            <h3>Sophia Brooks</h3>
                            <span>89 Oak Drive, Bristol, UK</span>
                        </div>
                    </div>
                    <p>
                    What sets Eduverse apart is its vibrant campus life. There are always events, workshops, and student activities happening, 
                    making it not just an academic experience but a community to be a part of.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="uesr-info">
                        <img src={user_4} alt=""/>
                        <div>
                            <h3>Oliver Bennett</h3>
                            <span>45 Elm Street, Manchester, UK</span>
                        </div>
                    </div>
                    <p>
                    Eduverse has an incredible campus with modern facilities that make learning engaging and enjoyable.
                     The peaceful surroundings and well-equipped classrooms provide an ideal environment for study.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
