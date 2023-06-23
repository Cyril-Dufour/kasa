import React, { useState } from 'react'
import style from "./Dropdown.module.css"


function Dropdown({title, content}) {
  const [textVisible, texteNonVisible] = useState(false)
  

  const toggleView = () => {
    texteNonVisible(!textVisible)
  }
console.log(toggleView, "toto");
  return (
    <div className={style.container}>

      <div className={style.textVisible} onClick={toggleView}>

        <div className={style.titre}>{title}</div>
        <i class="fa-sharp fa-solid fa-chevron-up"  ></i>
      </div>

      <div className={style.text}>
       {textVisible && <p>{content}</p>}
      </div>
    </div>
  )
}

export default Dropdown