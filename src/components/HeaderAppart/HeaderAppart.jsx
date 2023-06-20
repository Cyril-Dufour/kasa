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
        {/* {props.tags.map((tag) => (<span>{tag}</span>))} */}
        </div>
      </div>

      <div className='proprietaire-appart'>
        <div className='nom-proprietaire'>
          <h3>
            <span>Alexandre</span>
            <span>Dumas</span>
          </h3>
          <div className='badge-proprietaire-appart'>
            {/* <img src={props.host.picture} alt="" /> */}
          </div>
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