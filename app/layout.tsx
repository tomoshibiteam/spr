import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MouseFollowLight from '@/components/MouseFollowLight'
import FlameParticles from '@/components/FlameParticles'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'TOMOSHIBI Inc. | 社会の闇に、灯火をともす',
  description: 'TOMOSHIBI Inc.は、社会課題解決型エンターテインメントを通じて、楽しみながら社会を変える新しい文化を創造する企業です。',
  keywords: ['TOMOSHIBI', 'SPR探偵事務所', '社会課題', 'エンターテインメント', 'SIE', '社会貢献', '謎解き'],
  openGraph: {
    title: 'TOMOSHIBI Inc. | 社会の闇に、灯火をともす',
    description: 'TOMOSHIBI Inc.は、社会課題解決型エンターテインメントを通じて、楽しみながら社会を変える新しい文化を創造する企業です。',
    url: 'https://tomoshibi-official.vercel.app',
    siteName: 'TOMOSHIBI Inc.',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOMOSHIBI Inc. | 社会の闇に、灯火をともす',
    description: 'TOMOSHIBI Inc.は、社会課題解決型エンターテインメントを通じて、楽しみながら社会を変える新しい文化を創造する企業です。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <MouseFollowLight />
        <FlameParticles count={15} />
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

