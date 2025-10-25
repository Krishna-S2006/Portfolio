import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="hero" className="section hero" ref={ref}>
      <motion.div
        className="container hero-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="hero-image"
          variants={imageVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src="/src/assets/profile.webp"
            alt="Photo of Krishna Singh"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </motion.div>
        <motion.div
          className="hero-content"
          variants={containerVariants}
        >
          <motion.p
            className="intro-text"
            variants={itemVariants}
          >
            HELLO WORLD
          </motion.p>
          <motion.h2
            className="hero-title"
            variants={itemVariants}
          >
            I am Krishna Singh,<br />
            a digital designer &<br />
            frontend developer based in India.
          </motion.h2>
          <motion.p
            className="hero-subtitle"
            variants={itemVariants}
          >
            Aspiring Web Developer | Designer | Creator
          </motion.p>
          <motion.div
            className="typing-gif-container"
            variants={itemVariants}
          >
            <img
              src="/src/assets/typing.gif"
              alt="Typing animation"
              className="typing-gif"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
