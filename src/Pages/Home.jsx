import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Portfolio } from '../Components/Portfolio/Portfolio'
import { ContactUs } from '../Components/ContactUs/ContactUs'
import {Items} from '../Components/Items/Items'
import { About } from '../Components/About/About'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'
import collections from '../Components/Assets/collections'

export const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <Portfolio/>
        <Items/>
        <ContactUs/>
        {/* <About/> */}
        {/* <ProductDisplay/> */}
        {/* <RelatedProducts items={collections}/> */}
    </div>
  )
}
