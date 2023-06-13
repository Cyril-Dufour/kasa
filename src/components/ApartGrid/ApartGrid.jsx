import React, { useEffect, useState } from 'react'
import "./ApartGrid.css"
import Apart from './Apart.jsx'

function ApartGrid() {
  const [apartments, setApartments] = useState([])

  useEffect(fetchApartments, [])

  function fetchApartments() {
    fetch("home.json")
      .then((res) => res.json()
        .then((data) => setApartments(data))
        .catch((error) => console.log(error))
      )
  }

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
        <Apart title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
      ))}
    </div>
  )
}

export default ApartGrid