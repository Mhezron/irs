import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Portfolio } from '../Components/Portfolio/Portfolio'
import { ContactUs } from '../Components/ContactUs/ContactUs'
import {Items} from '../Components/Items/Items'


export const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <Portfolio/>
        <Items/>
        <ContactUs/>
    </div>
  )
}
