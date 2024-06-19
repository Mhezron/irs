import React from 'react'
import './ProductDisplay.css'
import bridge from '../Assets/weighbridge.jpg'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

export const ProductDisplay = () => {
  return (
    <>
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={bridge} alt="" />
                <img src={bridge} alt="" />
                <img src={bridge} alt="" />
                <img src={bridge} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={bridge} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>Modern steeldeck weighbridge scales</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
            </div>
            <div className="productdisplay-right-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        </div>
    </div>

    <div className="productDescription">
        <h2>Description</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna. Egestas diam in arcu cursus euismod quis viverra nibh. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Quam viverra orci sagittis eu.
            Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Risus feugiat in ante metus dictum at tempor commodo. Aenean et tortor at risus viverra adipiscing at in tellus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.
            </p>
        </div>
    </>

  )
}
