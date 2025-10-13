import { ReactNode } from 'react'
import Link from 'next/link'
import MotionWrapper from './MotionWrapper'
import InteractiveCard from './InteractiveCard'

interface CardProps {
  title: string
  description: string
  date?: string
  href?: string
  image?: string
  delay?: number
}

export default function Card({ title, description, date, href, image, delay = 0 }: CardProps) {
  const content = (
    <InteractiveCard className="h-full group">
      <div className="bg-white/80 backdrop-blur-sm rounded-softer overflow-hidden keyhole-border hover:shadow-glow-lg transition-all duration-500 h-full transform-gpu">
        {image && (
          <div className="h-48 bg-gradient-to-br from-tomoshibi-gold/10 to-tomoshibi-beige flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-tomoshibi-gold/5 group-hover:bg-tomoshibi-gold/15 transition-colors duration-500" />
            <span className="text-tomoshibi-gold text-4xl relative z-10 animate-flame">🔥</span>
          </div>
        )}
        <div className="p-8">
          {date && (
            <p className="text-xs text-tomoshibi-gold mb-3 tracking-wide uppercase">{date}</p>
          )}
          <h3 className="text-xl font-serif font-semibold mb-4 tracking-wide group-hover:text-tomoshibi-gold transition-colors duration-300">{title}</h3>
          <p className="text-tomoshibi-brown text-opacity-70 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </InteractiveCard>
  )

  return (
    <MotionWrapper delay={delay}>
      {href ? (
        <Link href={href} className="block h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </MotionWrapper>
  )
}

