import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className='navbar_logo'>
        <a href='/home'>
          <img src="logo.png" alt="logo"/></a>
      </div>
      <div className='nav-1'>
        <a href='/home'> ACCEUIL </a></div>
      <div className='nav-2'>
        <a href='/about'> A PROPOS </a></div>
    </nav>
  )
}

export default Navbar