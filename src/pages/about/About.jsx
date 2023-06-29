import React from 'react'
import "./About.css"
import Dropdown from "../../components/Dropdown/Dropdown"
import abouts from "../../data/about.json"
import Banner from "../../components/Banner/Banner"

function About() {
  return (<>
    <div className='modifBanner'>
      <div className='banner'></div>
    </div>
    <div className="style">
      {abouts.map(about =>
        <Dropdown title={about.title} content={about.text} key={about.id} />
      )}
    </div>
  </>
  )

}

export default About