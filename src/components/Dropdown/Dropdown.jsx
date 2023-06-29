import React, { useState } from 'react'
import "./Dropdown.css"
import ArrowDown from '../../assets/arrowDown.png';
import ArrowUp from '../../assets/arrowUp.png';


function Dropdown({ title, content }) {
  const [textVisible, texteNonVisible] = useState(false)


  const toggleView = () => {
    texteNonVisible(!textVisible)
  }
  // 
  return (
    <div className="drop">

      <div className="textVisible" onClick={toggleView}>
        <div className="titre">{title}</div>
        <img className="btnDropdown" src={textVisible ? ArrowUp : ArrowDown} alt="" /></div>
      <div className="text">
        {textVisible && <p>{content}</p>}
      </div>
    </div>
  )
}

export default Dropdown