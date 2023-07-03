import React, { useState } from 'react'
import './ImageBanner.css'

function ImageBanner(props) {
  const pictures = props.pictures;
  const [photoActuel, photoActuelFixe] = useState(0);
  const getClassName = (i) => {
    if (i === photoActuel) return "show";
    return "";
  };

  const photoSuivante = () => {
    photoActuelFixe((photoActuel + 1) % pictures.length);
  }

  const photoPrecedente = () => {
    const newphotoActuel = photoActuel - 1;
    if (newphotoActuel < 0) {
      photoActuelFixe(pictures.length - 1)
      return;
    }
    photoActuelFixe(photoActuel - 1);
  }

  return (
    <div className='image__banner'>
     
      {pictures.map((pic, i) => <img key={pic} src={pic} alt="" className={getClassName(i)}></img>)}
      <div className='btn'>
      <button className='btn-suivant' onClick={photoSuivante}><i class="fa-sharp fa-solid fa-chevron-left"></i></button>
      <button className='btn-precedent' onClick={photoPrecedente}><i class="fa-sharp fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default ImageBanner