import React from 'react'
import "./ApartGrid.css"
import Apart from './Apart.jsx'
import appartements from '../../data/home.json'

function ApartGrid() {
  

  return (
    <div className='grid'>
      {appartements.map((appartement) => (
        <Apart title={appartement.title} imageUrl={appartement.cover} id={appartement.id}/>
      ))}
    </div>
  )
}

export default ApartGrid
