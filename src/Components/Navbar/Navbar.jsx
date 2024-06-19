import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.svg'
import { Link } from 'react-scroll'

export const Navbar = () => {
  
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
       <ul>
        <li>
          <Link to='hero' smooth={true} duration={500}>
          Home 
          </Link>
          </li>
        <li >
          <Link to='items' smooth={true} duration={500} >
          Products 
          </Link>
        </li>
        <li >
          <Link to='footer' smooth={true} duration={500}>
          About Us 
          </Link>
        </li>
        {/* <li>Our clients</li> */}
        <li>
          <Link to='contactUs' smooth={true} duration={500}>
          Contact Us 
          </Link>
        </li>
       </ul>
    </div>
  )
}
