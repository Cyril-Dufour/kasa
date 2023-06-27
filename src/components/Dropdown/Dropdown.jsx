import React, { useState } from 'react'
import "./Dropdown.css"


function Dropdown({title, content}) {
  const [textVisible, texteNonVisible] = useState(false)
  

  const toggleView = () => {
    texteNonVisible(!textVisible)
  }
console.log(toggleView, "toto");
  return (
    <div className="drop">

      <div className="textVisible" onClick={toggleView}>

        <div className="titre">{title}</div>
        <i class="fa-sharp fa-solid fa-chevron-up"  ></i>
      </div>

      <div className="text">
       {textVisible && <p>{content}</p>}
      </div>
    </div>
  )
}

export default Dropdown