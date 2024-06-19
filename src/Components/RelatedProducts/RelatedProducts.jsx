import React from 'react'
import './RelatedProducts.css'

export const RelatedProducts = ({items}) => {
  return (
    <div className="relatedproducts">
            <h2>Related Products</h2>
            <div className="items-card">
                {items.map(item => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.name} />
                        <h4>{item.name}</h4>
                        <div className="item-prices">
                            <div className="new-prices">
                                <p>New Price: ${item.new_price}</p>
                            </div>
                            <div className="old-prices">
                                <p>Old Price: ${item.old_price}</p>
                            </div>
                        </div>
                        <p>Category: {item.category}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}
