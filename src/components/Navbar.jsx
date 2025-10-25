import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import '../styles/navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <nav>
        <div className="container nav-container">
          <Link to="/" className="logo-link">
            <h1 className="logo">KRISHNA.</h1>
          </Link>
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>INTRO</Link></li>
            <li><Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>ABOUT</Link></li>
            <li><Link to="/works" className={location.pathname === '/works' ? 'active' : ''}>WORKS</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>SAY HELLO</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
