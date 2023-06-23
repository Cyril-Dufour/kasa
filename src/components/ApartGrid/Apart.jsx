import React from 'react'
import './Apart.css'
import { Link } from 'react-router-dom'

function Apart(props) {
  return (
    <div className='apart'>
      <Link to= {`/appartement/${props.id}`} state={{appartId: props.id}}>
        <img src={props.imageUrl} alt='' />
        <div className='titre-location'>{props.title}</div>
      </Link>
    </div>

  )
}
export default Apart