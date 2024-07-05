import React from 'react'
import './Hero.css'
import hero from '../Assets/hero.png'
import { Link } from 'react-scroll'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h1>Industrial & Retail Scales Ltd</h1>
        <p>We are synonymous with precision.
           From heavy-duty industrial scales to retail measurement tools</p>
          <Link to='contactUs' smooth={true} duration={500} ><button>Talk to us</button></Link> 
        </div>
        <div className="hero-right">
            <img src={hero} alt="" />
        </div>
    </div>
  )
}
