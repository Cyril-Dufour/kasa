import React from 'react'
import './HeaderAppart.css'

function HeaderAppart(props) {
    console.log("props appart:", props)
    return (
        <div className='header-appart'>
          <div className='titre-appart'>
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
            <div className='tags-appart'>
              <p>Cozy</p>
              <p>Canal</p>
              <p>Paris 10</p>
            </div>
          </div>

          <div className='proprietaire-appart'>
            <div className='nom-proprietaire'>
              <h3>Alexandre Dumas</h3>
              <div className='badge-proprietaire-appart'></div>
            </div>
            <div className='star-proprietaire-appart'>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>
    )
}

export default HeaderAppart