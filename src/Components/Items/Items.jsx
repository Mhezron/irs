import React from 'react'
import './Items.css'
import { useNavigate } from 'react-router-dom'
import weighbridge from '../Assets/weighbridge.jpg'
import floorscale from '../Assets/floorscale.jpg'
import indicator from '../Assets/weight_indicator.jpg'
import medical from '../Assets/babyweighing.webp'
import analytical from '../Assets/analytical.jpg'
import counter from '../Assets/tabletopscales.webp'
import software from '../Assets/software.png'
import spares from '../Assets/portableaxle.webp'


export const Items = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Weighbridges', image: weighbridge, description: 'Durable weighbridges for precise and reliable weighing solutions in industrial applications.' },
    { id: 2, name: 'Industrial Scales', image: floorscale, description: 'Durable weighbridges for precise and reliable weighing solutions in industrial applications.' },
    { id: 3, name: 'Weight Indicators', image: indicator, description: 'Durable weighbridges for precise and reliable weighing solutions in industrial applications.' },
    { id: 4, name: 'Medical Scales', image: medical, description: 'Durable weighbridges for precise and reliable weighing solutions in industrial applications.' },
    { id: 5, name: 'Analytical Scales', image: analytical, description: 'Durable weighbridges for precise and reliable weighing solutions in industrial applications.' },
    { id: 6, name: 'Counter Scales', image: counter, description: 'Durable weighbridges for precise and reliable weighing solutions in industrial applications.' },
    { id: 7, name: 'Softwares', image: software, description: 'Durable weighbridges for precise and reliable weighing solutions in industrial applications.' },
    { id: 8, name: 'Spares and Accessories', image: spares, description: 'Durable weighbridges for precise and reliable weighing solutions in industrial applications.' }
  ]

  const handleClick = (id)=> {
    navigate(`/product/${id}`)
    window.scrollTo(0,0)
  }

  return (
    <div className='items'>
      <h2>Products</h2>
      <div className="card-items">
        {products.map(product => (
          <div className="card" key={product.id} onClick={() => handleClick(product.id)} >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
