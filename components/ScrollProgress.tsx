'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-tomoshibi-gold via-tomoshibi-gold to-transparent origin-left z-50"
      style={{ scaleX }}
    >
      {/* グロー効果 */}
      <motion.div
        className="absolute inset-0 bg-tomoshibi-gold blur-md opacity-50"
        style={{ scaleX }}
      />
    </motion.div>
  )
}

