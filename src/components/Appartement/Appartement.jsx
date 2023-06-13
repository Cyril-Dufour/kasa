import React, { useEffect, useState } from 'react'
import "./Appartement.css"
import Dropdown from "../Dropdown/Dropdown"
import { useLocation } from 'react-router-dom'
import ImageBanner from '../ImageBanner/ImageBanner'
import HeaderAppart from '../HeaderAppart/HeaderAppart'




function Appartement() {
  const location = useLocation();
  const [selectedFlat, setSelectedFlat] = useState(null);
  useEffect(fetchApartData, [])

  function fetchApartData() {
    fetch("home.json")
      .then((res) => res.json()
        .then((flats) => {
          const flat = flats.find((flat) => flat.id === location.state.appartId);
          setSelectedFlat(flat)
        })
        .catch((error) => console.log(error))
      )
  }
  if (selectedFlat == null) return <div></div>
  console.log(selectedFlat);
  return (

    <div className='page-appart'> 
      <div className='photo-appart'>
      </div>
      <ImageBanner imageUrl={selectedFlat.cover} />
      <div className='info-appart'>
        <div className='header-appart'>
          <HeaderAppart title={selectedFlat.title} location={selectedFlat.location}  />
        </div>
        <div className='dropdown'>
          <Dropdown description={selectedFlat.description} />
          <Dropdown equipments={selectedFlat.equipments} />
        </div>
      </div>


    </div>
  ) 
}

export default Appartement