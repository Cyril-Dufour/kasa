import React from 'react'
import "./Rating.css"

function Rating(props) {
  return (
    <div className='proprietaire-appart'>
    <div className='nom-proprietaire'>
      <h3>{props.host.name}</h3>
      <div className='badge-proprietaire-appart'>
        <img src={props.host.picture} alt="" />
      </div>
    </div>
    <div className='star-proprietaire-appart'>
      {[1, 2, 3, 4, 5].map(num => (
        <span className={props.rating >= num ? "on" : ""}><i class="fa-solid fa-star"></i></span>
      ))}
    </div>
  </div>
  )
}

export default Rating