import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className='navbar_logo'>
        <a href='/'>
          <img src="logo.png" alt="logo" /></a>
      </div>



      <NavLink
        to='/'
        className={({ isActive}) =>
          isActive ? "active nav-1" : "nav-1"
        }
      >
       Acceuil
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive}) =>
          isActive ? "active nav-1" : "nav-1"
        }
      >
        A Propos
      </NavLink>
      {/* <div className='nav-1'>
        <a href='/'> Acceuil </a></div>
      <div className='nav-2'>
        <a href='/about'> A Propos </a></div> */}
    </nav>
  )
}

export default Navbar