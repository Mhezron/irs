import React from 'react'
import './CSS/Product.css'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../Components/Assets/products'
import star_icon from '../Components/Assets/star_icon.png'
import star_icon_dull from '../Components/Assets/star_dull_icon.png'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Product = () => {
  const {id} = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id)
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate(-1)
    window.scrollTo(0, 0)
  }

  if(!product) return <div>Product not found</div>

  return (
    <>
    <button onClick={handleClick}>
    <FontAwesomeIcon icon={faArrowLeft} />
    Back</button>
      <div className='product'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
        <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
      <h1>{product.name}</h1>
      <div className="productdisplay-right-rating">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon_dull} alt="" />
      </div>
      <div className="productdisplay-right-description">
        <p>{product.description}</p>
      </div>
      </div>
    </div>
    <div className="productDescription">
        <h2>Description</h2>
        <p>{product.info}</p>
      </div>

      <RelatedProducts relatedProducts={relatedProducts} />
    </>
    )
  } 