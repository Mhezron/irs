import React, {useContext} from 'react'
import './About.css'
import { ShopContext } from '../../Context/ShopContext'

export const About = () => {
    const collection = useContext(ShopContext)
  return (
    <div className='about'>
        {collection.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>Category: {item.category}</p>
          <p>New Price: ${item.new_price}</p>
          <p>Old Price: ${item.old_price}</p>
        </div>
      ))}
    </div>
  )
}
