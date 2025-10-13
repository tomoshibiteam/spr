'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function MotionWrapper({ children, delay = 0, className = '' }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

