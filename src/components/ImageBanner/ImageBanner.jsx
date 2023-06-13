import React from 'react'
import './ImageBanner.css'

function ImageBanner(props) {
  return (
    <div className='image__banner'>
        <img src={props.imageUrl} alt="photo appartement" />
    </div>
  )
}

export default ImageBanner