import React from 'react'
import './HeaderAppart.css'
// import Rating from '../Rating/Rating'


function HeaderAppart(props) {
  
  console.log("props appart:", props)

  return (
    <div className='header-appart'>
      <div className='titre-appart'>
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
        <div className='tags-appart'>
          {props.tags.map(tag => (
            <span>{tag}</span>
          ))}
        </div>
      </div>

      <div className='proprietaire-appart'>
        <div className='nom-proprietaire'>
          <h3>{props.host.name}</h3>
          <div className='badge-proprietaire-appart'>
            <img src={props.host.picture} alt="" />
          </div>
        </div>
        <div className='star-proprietaire-appart'>
          {[1, 2, 3, 4, 5].map(num => (
            <span className= {props.rating >= num ? "red-star" : "grey-star"}><i class="fa-solid fa-star"></i></span>
          ))}
        </div>
      </div>
      {/* <Rating /> */}
    </div>
  )
}

export default HeaderAppart