import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import '../styles/themeToggle.css'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="toggle-slider">
        <span className="icon">{isDarkMode ? '🌙' : '☀️'}</span>
      </div>
    </button>
  )
}

export default ThemeToggle
