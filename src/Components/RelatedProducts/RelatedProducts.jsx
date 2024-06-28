import React from 'react'
import './RelatedProducts.css'
import { useNavigate } from 'react-router-dom'

export const RelatedProducts = ({relatedProducts}) => {

    const navigate = useNavigate()
    const handleClick =(id)=> {
        navigate(`/product/${id}`)
        window.scrollTo(0,0)
    }
  return (
    <div className="relatedproducts">
            <h2>Related Products</h2>
            <div className="related-items">
                    {relatedProducts.map(product => (
                        <div className="related-card" key={product.id} onClick={() => handleClick(product.id)}>
                            <img src={product.image} alt="" />
                            <h4>{product.name}</h4>
                        </div>
                    ))}
                </div>
        </div>
  )
}
