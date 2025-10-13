'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseFollowLight() {
  const [isVisible, setIsVisible] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* メインの光 */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden md:block"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            opacity: isVisible ? 0.15 : 0,
            scale: [1, 1.2, 1],
          }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="w-96 h-96 bg-tomoshibi-gold rounded-full blur-3xl"
        />
      </motion.div>

      {/* 小さな光の粒子 */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden md:block"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            opacity: isVisible ? 0.3 : 0,
            scale: [1, 1.5, 1],
          }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
          }}
          className="w-32 h-32 bg-white rounded-full blur-2xl"
        />
      </motion.div>
    </>
  )
}

