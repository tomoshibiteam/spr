'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/mission', label: 'Mission' },
    { href: '/projects', label: 'Projects' },
    { href: '/vision', label: 'Vision' },
    { href: '/about', label: 'About' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-tomoshibi-beige/95 backdrop-blur-md shadow-glow border-b border-tomoshibi-gold/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group"
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.1, 1],
                  filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-2xl"
              >
                🔥
              </motion.span>
              <span className="font-serif text-2xl font-bold text-tomoshibi-brown tracking-wide group-hover:text-tomoshibi-gold transition-colors">
                TOMOSHIBI
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="relative text-tomoshibi-brown hover:text-tomoshibi-gold transition-all duration-300 font-medium tracking-wide text-sm group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-tomoshibi-gold group-hover:w-full transition-all duration-500" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-tomoshibi-brown"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 pt-2 bg-tomoshibi-beige/95 backdrop-blur-md rounded-b-softer border-b border-tomoshibi-gold/10"
          >
            <ul className="space-y-4 px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="block text-tomoshibi-brown hover:text-tomoshibi-gold transition-colors duration-300 tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

