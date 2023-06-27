import React from 'react'
import "./Appartement.css"
import Dropdown from "../../components/Dropdown/Dropdown"
import { useParams } from 'react-router-dom'
import ImageBanner from '../../components/ImageBanner/ImageBanner'
import HeaderAppart from '../../components/HeaderAppart/HeaderAppart'
import appartements from '../../data/home.json'



function Appartement() {
  console.log(appartements)
  const { id } = useParams()
  const selectedFlat = appartements.find(item => item.id === id)

  return (
    <div className='page-appart'>
      <div className='photo-appart'>
      </div>
      <ImageBanner pictures={selectedFlat.pictures} />
      <div className='info-appart'>
        <HeaderAppart title={selectedFlat.title} location={selectedFlat.location} tags={selectedFlat.tags} host={selectedFlat.host} />
        <div className='dropdown'>
          <Dropdown title="Description" content={selectedFlat.description} />
          <Dropdown title="Equipements" content={selectedFlat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))} />
        </div>
      </div>
    </div>
  )
}

export default Appartement