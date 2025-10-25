import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../styles/resume.css'

function Resume() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
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

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="resume" className="section resume" ref={ref}>
      <motion.div
        className="container resume-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="resume-image"
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
          className="resume-content"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            KRISHNA SINGH
          </motion.h2>
          <motion.hr
            variants={itemVariants}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.section variants={sectionVariants}>
            <motion.h3
              variants={itemVariants}
              whileHover={{ color: "#ff6b6b" }}
              transition={{ duration: 0.3 }}
            >
              SUMMARY
            </motion.h3>
            <motion.p variants={itemVariants}>
              Motivated and enthusiastic B.Tech Computer Science student with a strong foundation in C++, Data Structures & Algorithms, Web Development, and Machine Learning.
            </motion.p>
            <motion.p variants={itemVariants}>
              A dedicated and quick learner with a smart-working mindset, driven by curiosity and a passion for solving real-world problems through technology.
            </motion.p>
          </motion.section>

          <motion.hr
            variants={itemVariants}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />

          <motion.section variants={sectionVariants}>
            <motion.h3
              variants={itemVariants}
              whileHover={{ color: "#ff6b6b" }}
              transition={{ duration: 0.3 }}
            >
              EDUCATION
            </motion.h3>
            <motion.ul variants={containerVariants}>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                BTech in CS with AI (2024–28) – Netaji Subash University of Technology
              </motion.li>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                High school (92.8%) – Kendriya Vidyalaya (2011–2023)
              </motion.li>
            </motion.ul>
          </motion.section>

          <motion.hr
            variants={itemVariants}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />

          <motion.section variants={sectionVariants}>
            <motion.h3
              variants={itemVariants}
              whileHover={{ color: "#ff6b6b" }}
              transition={{ duration: 0.3 }}
            >
              SKILLS
            </motion.h3>
            <motion.ul variants={containerVariants}>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Languages: C++, Python, C, HTML, CSS, JavaScript
              </motion.li>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                DSA (Intermediate)
              </motion.li>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Web Development (Beginner)
              </motion.li>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Machine Learning (Beginner)
              </motion.li>
            </motion.ul>
          </motion.section>

          <motion.hr
            variants={itemVariants}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          />

          <motion.section variants={sectionVariants}>
            <motion.h3
              variants={itemVariants}
              whileHover={{ color: "#ff6b6b" }}
              transition={{ duration: 0.3 }}
            >
              AWARDS & ACHIEVEMENTS
            </motion.h3>
            <motion.ol variants={containerVariants}>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                JEE Advanced – 142 Marks, Rank 10492
              </motion.li>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                JEE Mains – 98.6%ile (Top 1.4%)
              </motion.li>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Football – Played Nationals for KV Delhi team
              </motion.li>
            </motion.ol>
          </motion.section>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Resume
