import React from 'react'
import style from "./Dropdown.module.css"


function Dropdown(props) {
  const toggleView = () => {
    console.log("toto");
  }
  
  return (
    <div className={style.container}>

      <div className={style.textVisible} onClick={toggleView}>

        <div className={style.titre}>Description</div>
        <i class="fa-sharp fa-solid fa-chevron-up"></i>
      </div>

      <div className={style.text}>
        <p>{props.description}</p>
        <p>{props.equipments}</p>
      </div>
    </div>
  )
}

export default Dropdown