import React from 'react'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'

export const Product = () => {
  return (
    <div className='product'>
        <ProductDisplay/>
        <RelatedProducts />
    </div>
  )
}
