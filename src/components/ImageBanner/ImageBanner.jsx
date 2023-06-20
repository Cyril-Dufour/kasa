import React, { useState } from 'react'
import './ImageBanner.css'

function ImageBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  }

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return;
    }
    setCurrentPicture(currentPicture - 1);
  }

  return (
    <div className='image__banner'>
      {pictures.map((pic, i) => <img key={pic} src={pic} alt="" className={getClassName(i)}></img>)}
      <div className='btn'>
      <button className='btn-next' onClick={moveToNext}><i class="fa-sharp fa-solid fa-chevron-left"></i></button>
      <button className='btn-previous' onClick={moveToPrevious}><i class="fa-sharp fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default ImageBanner