'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-10 py-4 rounded-softer font-medium transition-all duration-500 tracking-wide backdrop-blur-sm'
  
  const variants = {
    primary: 'bg-tomoshibi-gold text-tomoshibi-brown hover:shadow-glow hover:scale-105 relative overflow-hidden group',
    secondary: 'bg-tomoshibi-brown text-tomoshibi-beige hover:shadow-glow-lg hover:scale-105',
    outline: 'border border-tomoshibi-gold text-tomoshibi-brown hover:bg-tomoshibi-gold/10 hover:shadow-glow backdrop-blur-sm'
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={classes}
        >
          {variant === 'primary' && (
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          <span className="relative z-10">{children}</span>
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={classes}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

