import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ArtificialGrass from './pages/ArtificialGrass'
import BirdSpikes from './pages/BirdSpikes'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/artificial-grass" element={<ArtificialGrass />} />
            <Route path="/bird-spikes" element={<BirdSpikes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App