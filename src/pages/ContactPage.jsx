import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default ContactPage
