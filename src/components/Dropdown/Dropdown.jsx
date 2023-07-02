import React, { useState } from 'react'
import "./Dropdown.css"
import ArrowDown from '../../assets/arrowDown.png';
import ArrowUp from '../../assets/arrowUp.png';


function Dropdown({ title, content }) {
  const [textVisible, setTextVisible] = useState(false)


  const toggleView = () => {
    setTextVisible(!textVisible)
  }
  return (
    <div className="drop">
      <div className="barre" onClick={toggleView}>
        <div className="titre">{title}</div>
        <img className="btnDropdown" src={textVisible ? ArrowUp : ArrowDown} alt="" />
      </div>
      <div className={`text ${textVisible ? "visible" : null }`}>
        {textVisible && <p>{content}</p>}
      </div>
    </div>
  )
}

export default Dropdown