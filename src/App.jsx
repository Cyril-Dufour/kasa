
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from "./pages/about/About"
import Footer from './components/Footer/Footer'
import Appartement from './components/Appartement/Appartement'
import PageErreur from './components/PageErreur/PageErreur'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path='/appartement' element={<Appartement />} />
        <Route path='/erreur' element={<PageErreur />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App