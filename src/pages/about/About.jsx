import React from 'react'
import "./About.css"
import Dropdown from "../../components/Dropdown/Dropdown"

function About() {
  return (<>
    <div className='modifBanner'>
    <div className='banner'> </div></div>
    <div className="style">
    <Dropdown title= "Fiabilité"  />
    <Dropdown title= "Respect"/>
    <Dropdown title= "Service"/>
    <Dropdown title= "Sécurité"/>
</div>
  </>
    


  )

}

export default About