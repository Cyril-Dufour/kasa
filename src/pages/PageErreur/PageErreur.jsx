import React from 'react'
import "./PageErreur.css"


function PageErreur() {
  return (<>
  <div className='page'>
    <div className='error'>404</div>
    <div className='texte'>Oups ! La page que vous demandez n'existe pas.</div>
    </div></>
  )
}

export default PageErreur