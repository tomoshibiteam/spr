import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  background?: 'beige' | 'white' | 'dark' | 'gradient'
}

export default function Section({ 
  children, 
  id, 
  className = '',
  background = 'beige'
}: SectionProps) {
  const backgrounds = {
    beige: 'bg-tomoshibi-beige',
    white: 'bg-white',
    dark: 'bg-tomoshibi-brown text-tomoshibi-beige',
    gradient: 'gradient-light'
  }

  return (
    <section 
      id={id} 
      className={`py-24 md:py-40 ${backgrounds[background]} ${className} relative overflow-hidden`}
    >
      {/* 静かな光の演出 */}
      {background === 'beige' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-tomoshibi-gold opacity-5 blur-3xl rounded-full animate-breathe" />
        </div>
      )}
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative">
        {children}
      </div>
      
      {/* セクション区切りの光の帯 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tomoshibi-gold/20 to-transparent" />
    </section>
  )
}

