import React from 'react'
import "./Appartement.css"
import Dropdown from "../../components/Dropdown/Dropdown"
import { useParams, Navigate } from 'react-router-dom'
import ImageBanner from '../../components/ImageBanner/ImageBanner'
import HeaderAppart from '../../components/HeaderAppart/HeaderAppart'
import appartements from '../../data/home.json'




function Appartement() {
  console.log(appartements)
  const { id } = useParams()
  const appartSelect = appartements.find(item => item.id === id)

  if (appartSelect === undefined) {
    return <Navigate to='/error' />

  } else {

    return (
      <div className='page-appart'>
        <div className='photo-appart'>
        </div>
        <ImageBanner pictures={appartSelect.pictures} />
        <div className='info-appart'>
          <HeaderAppart title={appartSelect.title} location={appartSelect.location} tags={appartSelect.tags} host={appartSelect.host} rating={appartSelect.rating}/>
          <div className='dropdown'>
            <Dropdown title="Description" content={appartSelect.description} />
            <Dropdown title="Equipements" content={appartSelect.equipments.map((eq, i) => (
              <li key={i}>{eq}</li>
            ))} />
          </div>
        </div>
      </div>
    )
  }
}

export default Appartement