import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Resume from '../components/Resume'
import Footer from '../components/Footer'

function ResumePage() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Resume />
      <Footer />
    </motion.div>
  )
}

export default ResumePage
