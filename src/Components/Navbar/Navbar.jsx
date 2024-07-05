import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.svg';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`menu-icon ${isMobile ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`nav-links ${isMobile ? 'nav-links-mobile' : ''}`}>
        <li>
          <Link to='hero' smooth={true} duration={500} onClick={() => setIsMobile(false)}>
            Home 
          </Link>
        </li>
        <li>
          <Link to='items' smooth={true} duration={500} onClick={() => setIsMobile(false)}>
            Products 
          </Link>
        </li>
        <li>
          <Link to='contactUs' smooth={true} duration={500} onClick={() => setIsMobile(false)}>
            Contact Us 
          </Link>
        </li>
        <li>
          <Link to='footer' smooth={true} duration={500} onClick={() => setIsMobile(false)}>
            About Us 
          </Link>
        </li>
      </ul>
    </div>
  );
};