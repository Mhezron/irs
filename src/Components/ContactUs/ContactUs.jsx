import React from 'react'
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneVolume,faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const ContactUs = () => {
  return (
    <div className='contactUs'>
        <div className="title">
            <p className='header'>Contact Us</p>
            <p>Curious about something ... ?</p>
        </div>
        <div className="cards">
            <div className="card-item">
                <h4><FontAwesomeIcon icon={faPhoneVolume} />Call</h4>
                <p>+254 703 4454 56</p>
                <p>+254 784 5738 67</p>
            </div>
            <div className="card-item">
                <h4><FontAwesomeIcon icon={faEnvelope} />Email</h4>
                <p>irscales@gmail.com</p>
                <p>info.irscales@gmail.com</p>
            </div>
            <div className="card-item">
                <h4><FontAwesomeIcon icon={faLocationDot} />Address</h4>
                <p>Nairobi, South B</p>
                <p>South gate Center</p>
            </div>
        </div>
        <div className="getInTouch">
            <div className="getInTouch-left">
                <h3>Get in Touch</h3>
                <p>
                Have a question or want to learn more about our services? 
                Get in touch with our friendly team using the contact form, email, 
                or phone number provided and we will get back to you promptly. 
                We value your interest and look forward to assisting you!
                </p>
            </div>
            <div className="getInToch-right">
                <div className="input-field">
                    <input className= 'input'type="text" placeholder='Your name'/>
                    <input className='input' type="email" placeholder='Enter email'/>
                </div>
                <textarea className='message-field' name="" id="" placeholder='A message for us...'></textarea>
            </div>
        </div>
        <div className="submit-button">
            <button>Submit</button>
        </div>
    </div>
  )
}
