import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneVolume,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="item">
          <h2>About Us</h2>
          <p>
          Established in 1989, Industrial & Retail Scales Ltd offers precision-engineered industrial and retail scales. Our OIML-approved products meet international standards, ensuring accuracy, reliability, and durability. Contact us today to enhance your business with our high-quality solutions.          </p>
        </div>
        <div className="item">
          <h2>Our Mission</h2>
          <p>
          Our mission is to lead and redefine weighing solutions. Since 1989, we've been a beacon of excellence. Envision your business soaring with our cutting-edge precision and reliability. Trust us as your partner, where innovation meets quality, ensuring your business shines in success.
          </p>
        </div>
        <div className="item">
          <h2>Contacts</h2>
            <li><FontAwesomeIcon icon={faLocationDot} />Nairobi South B, Southgate Center</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> irscales@gmail.com</li>
            <li><FontAwesomeIcon icon={faPhoneVolume} /> 0782828886, 0757383838</li>
            <li><FontAwesomeIcon icon={faInstagram} />irscales</li>
            
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>Copyright@2024</p>
      </div>
    </div>
  )
}