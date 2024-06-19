import React from 'react'
import './Portfolio.css'
import bajaber from '../Assets/clients/bajaber.png'
import bamburi from '../Assets/clients/bamburi cement.jpg'
import cdorman from '../Assets/clients/c dorman.png'
import gilanis from '../Assets/clients/c dorman.png'
import nairobi from '../Assets/clients/Nairobi-City-County.png'
import oillibya from '../Assets/clients/oil libya.jpeg'
import pembe from '../Assets/clients/pembe.jpeg'
import tononoka from '../Assets/clients/tononoka.jpg'
import total from '../Assets/clients/total.jpeg'
import tropikal from '../Assets/clients/tropikal.jpeg'

export const Portfolio = () => {
  return (
    <div className='portfolio'>
    {/* <h3>Portfolio</h3> */}
    <div className="logos-slide">
        <img src={bajaber} alt="" />
        <img src={bamburi} alt="" />
        <img src={cdorman} alt="" />
        <img src={gilanis} alt="" />
        <img src={nairobi} alt="" />
        <img src={oillibya} alt="" />
        <img src={pembe} alt="" />
        <img src={tononoka} alt="" />
        <img src={total} alt="" />
        <img src={tropikal} alt="" />
    </div>
    <div className="logos-slide">
        <img src={bajaber} alt="" />
        <img src={bamburi} alt="" />
        <img src={gilanis} alt="" />
        <img src={nairobi} alt="" />
        <img src={oillibya} alt="" />
        <img src={cdorman} alt="" />
        <img src={pembe} alt="" />
        <img src={tononoka} alt="" />
        <img src={total} alt="" />
        <img src={tropikal} alt="" />
    </div>
    
</div>
  )
}
