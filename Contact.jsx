import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d0b78b9d-09da-42e6-9010-11c6277ce169");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };







  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
        At Eduverse, we value your feedback and inquiries. Whether you have questions about our programs, campus facilities, or student life, we’re happy to assist you. 
        Feel free to reach out, and one of our team members will get back to you as soon as possible. 
        Your input helps us improve and ensure the best experience for all students.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />educity@gmail.com</li>
            <li><img src={phone_icon} alt="" />+74-5113459</li>
            <li><img src={location_icon} alt="" />123 Maple Avenue, London, UK</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label> 
          <input type="text" name=''placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone'placeholder='Enter your mobile number'required/>
          <label>Write your messages here</label> 
          <textarea name="message" rows="6" placeholder='Enter your message'required></textarea> 
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
