import React from 'react'
import './Items.css'
import weighbridge from '../Assets/weighbridge.jpg'
import floorscale from '../Assets/floorscale.jpg'
import indicator from '../Assets/weight_indicator.jpg'
import medical from '../Assets/babyweighing.webp'
import analytical from '../Assets/analytical.jpg'
import counter from '../Assets/tabletopscales.webp'
import software from '../Assets/software.png'
import spares from '../Assets/portableaxle.webp'


export const Items = () => {
  return (
    <div className='items'>
      <h2>Products</h2>
      <div className="card-items">
      <div className="card">
      <div className="img-card">
          <img src={weighbridge} alt="" />
        </div>
      <h3>Weighbridges</h3>
          <p>
          Durable weighbridges for precise and reliable weighing solutions in industrial applications.
          </p>
      </div>


      <div className="card">
      <div className="img-card">
        <img src={floorscale} alt="" />
      </div>
      <h3>Industrial Scales</h3>
        <div className="description">
        <p>
          Durable weighbridges for precise and reliable weighing solutions in industrial applications.
          </p>
        </div>
      </div>


      <div className="card">
      <div className="img-card">
        <img src={indicator} alt="" />
      </div>
      <h3>weight Indicators</h3>
        <div className="description">
        <p>
          Durable weighbridges for precise and reliable weighing solutions in industrial applications.
          </p>
        </div>
      </div>


      <div className="card">
      <div className="img-card">
        <img src={medical} alt="" />
      </div>
      <h3>Medical scales</h3>
        <div className="description">
        <p>
          Durable weighbridges for precise and reliable weighing solutions in industrial applications.
          </p>
        </div>
      </div>


      <div className="card">
      <div className="img-card">
        <img src={analytical} alt="" />
      </div>
      <h3>Analytical scales</h3>
        <div className="description">
        <p>
          Durable weighbridges for precise and reliable weighing solutions in industrial applications.
          </p>
        </div>
      </div>


      <div className="card">
      <div className="img-card">
        <img src={counter} alt="" />
      </div>
      <h3>Counter Scales</h3>
        <div className="description">
        <p>
          Durable weighbridges for precise and reliable weighing solutions in industrial applications.
          </p>
        </div>
      </div>


      <div className="card">
        <div className="img-card">
          <img src={software} alt="" />
        </div>
      <h3>Softwares</h3>
        <div className="description">
        <p>
          Durable weighbridges for precise and reliable weighing solutions in industrial applications.
          </p>
        </div>
      </div>


      <div className="card">
        <div className="img-card">
          <img src={spares} alt="" />
        </div>
        <h3>Spares and Accessories</h3>
        <div className="description">
        <p>
          Durable weighbridges for precise and reliable weighing solutions in industrial applications.
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
