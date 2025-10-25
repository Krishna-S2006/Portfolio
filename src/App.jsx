import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ResumePage from './pages/ResumePage'
import Works from './pages/Works'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
