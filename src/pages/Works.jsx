import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function Works() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Projects />
      <Footer />
    </motion.div>
  )
}

export default Works
