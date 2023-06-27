
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from "./pages/about/About"
import Footer from './components/Footer/Footer'
import Appartement from './pages/Appartement/Appartement'
import PageErreur from './pages/PageErreur/PageErreur'

function App() {
  return (
    <div className='appContainer'>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/appartement/:id' element={<Appartement />} />
          <Route path='/pageErreur' element={<PageErreur />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}


export default App