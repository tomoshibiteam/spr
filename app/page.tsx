'use client'

import Section from '@/components/Section'
import Button from '@/components/Button'
import MotionWrapper from '@/components/MotionWrapper'
import ParallaxSection from '@/components/ParallaxSection'
import InteractiveCard from '@/components/InteractiveCard'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-tomoshibi-brown via-tomoshibi-brown/95 to-tomoshibi-beige-dark">
        {/* 鍵穴のシルエット効果（背景） */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="400" height="400" viewBox="0 0 400 400" className="animate-breathe">
            <path d="M200 100 L200 200 L180 220 L180 300 L220 300 L220 220 Z M200 50 A 50 50 0 1 1 200 150 A 50 50 0 1 1 200 50" fill="currentColor" className="text-tomoshibi-gold" />
          </svg>
        </div>
        
        {/* 光の演出：中央から広がる */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(214, 184, 122, 0.4) 0%, transparent 60%)'
          }}
        />
        
        {/* 灯火アイコン：点灯アニメーション */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-20 md:top-32"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl md:text-8xl"
          >
            🔥
          </motion.div>
          <motion.div
            className="absolute inset-0 blur-2xl bg-tomoshibi-gold opacity-40"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-32 md:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-bold text-tomoshibi-beige mb-8 text-glow tracking-wide">
              社会の闇に、灯火をともす。
            </h1>
            <motion.p 
              className="text-lg md:text-2xl text-tomoshibi-gold text-opacity-90 mb-6 tracking-widest font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Light in the Darkness
            </motion.p>
            <motion.p 
              className="text-base md:text-xl text-tomoshibi-beige text-opacity-80 mb-16 max-w-4xl mx-auto leading-loose tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              私たちTOMOSHIBIは、社会課題を「体験」として再発見し、
              <br />
              楽しみながら行動を起こせる新しいエンターテインメントを創造します。
              <br className="hidden md:block" />
              人が社会を照らす、その小さな光の連鎖を生み出す企業です。
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <Button href="/mission" variant="primary">
                私たちの想いへ
              </Button>
              <Button href="/projects/spr" variant="outline" className="border-tomoshibi-beige text-tomoshibi-beige hover:bg-tomoshibi-beige hover:text-tomoshibi-brown">
                SPR探偵事務所とは
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-12 border border-tomoshibi-gold/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
            <motion.div 
              className="w-1.5 h-4 bg-tomoshibi-gold rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
        
        {/* 下部のグラデーション遷移 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-tomoshibi-beige" />
      </section>

      {/* Mission Section */}
      <Section id="mission">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-tomoshibi-brown">
              Mission
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
            <p className="text-xl text-tomoshibi-brown text-opacity-80 max-w-3xl mx-auto leading-relaxed">
              楽しみながら社会を変える。
              <br />
              私たちは、社会課題を「自分ごと化」するきっかけを
              <br />
              エンターテインメントでつくります。
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <MotionWrapper delay={0.1}>
            <InteractiveCard className="group">
              <div className="bg-white p-8 rounded-softer box-shadow-soft text-center transform-gpu hover:shadow-glow-lg transition-all duration-500">
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  🔍
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-tomoshibi-gold transition-colors">探究の体験</h3>
                <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                  社会課題を「事件」として体験できる仕組みを通じて、人々の探究心に火をつけます。
                </p>
              </div>
            </InteractiveCard>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <InteractiveCard className="group">
              <div className="bg-white p-8 rounded-softer box-shadow-soft text-center transform-gpu hover:shadow-glow-lg transition-all duration-500">
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  🤝
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-tomoshibi-gold transition-colors">共創の場づくり</h3>
                <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                  地域・企業・個人をつなぐ参加型プラットフォームで、新しい連帯を生み出します。
                </p>
              </div>
            </InteractiveCard>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <InteractiveCard className="group">
              <div className="bg-white p-8 rounded-softer box-shadow-soft text-center transform-gpu hover:shadow-glow-lg transition-all duration-500">
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  💡
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-tomoshibi-gold transition-colors">行動の循環</h3>
                <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                  日常と非日常を行き来する継続的アクションモデルで、社会貢献を日常化します。
                </p>
              </div>
            </InteractiveCard>
          </MotionWrapper>
        </div>

        <MotionWrapper>
          <div className="text-center">
            <Button href="/mission" variant="outline">
              View More
            </Button>
          </div>
        </MotionWrapper>
      </Section>

      {/* Project Section */}
      <Section id="projects" background="white">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-tomoshibi-brown">
              Projects
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionWrapper delay={0.2}>
            <ParallaxSection speed={-0.3}>
              <InteractiveCard className="group">
                <div className="aspect-square bg-gradient-to-br from-tomoshibi-gold to-tomoshibi-brown rounded-softer flex items-center justify-center box-shadow-glow transform-gpu">
                  <div className="text-center text-tomoshibi-beige p-8">
                    <motion.div 
                      className="text-7xl mb-4"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      🕵️
                    </motion.div>
                    <h3 className="font-serif text-3xl font-bold tracking-wide">SPR</h3>
                    <p className="text-xl mt-2">探偵事務所</p>
                  </div>
                </div>
              </InteractiveCard>
            </ParallaxSection>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div>
              <h3 className="font-serif text-3xl font-bold mb-6 text-tomoshibi-brown">
                SPR探偵事務所
              </h3>
              <p className="text-lg text-tomoshibi-brown text-opacity-80 mb-6 leading-relaxed">
                SPR（Social Problem Research）探偵事務所は、TOMOSHIBIが運営するソーシャル・インパクト・エンターテインメント事業です。
                参加者は"探偵"として社会の課題に挑み、謎解きを通じてその本質を探ります。
                イベントとアプリを連携させ、行動データが「光の記録」として蓄積されます。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-tomoshibi-gold mr-2">▸</span>
                  <span>地域を舞台にした謎解き×社会課題イベント</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tomoshibi-gold mr-2">▸</span>
                  <span>行動を記録し、社会貢献を可視化するWebアプリ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tomoshibi-gold mr-2">▸</span>
                  <span>参加者・行政・企業が連携する新しい共創モデル</span>
                </li>
              </ul>
              <Button href="/projects/spr" variant="primary">
                SPRの世界を探る
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Vision Section */}
      <Section id="vision">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-tomoshibi-brown">
              Vision
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
            <p className="text-xl text-tomoshibi-brown text-opacity-80 max-w-3xl mx-auto leading-relaxed">
              灯火がつながる未来へ。
              <br />
              TOMOSHIBIは、エンターテインメントを起点に人と社会をつなぐプラットフォームを目指します。
              <br />
              一つひとつの"支部"が地域の光となり、全国に広がる灯火のネットワークを築きます。
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <MotionWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="font-serif text-2xl font-semibold">現在：基盤構築</h3>
              </div>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                SPR探偵事務所の確立。イベントとアプリの融合による新しい体験価値の創造。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="font-serif text-2xl font-semibold">近未来：連携拡大</h3>
              </div>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                教育機関・行政・企業CSRとの連携を深め、社会課題解決のエコシステムを構築。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="font-serif text-2xl font-semibold">中期：支部ネットワーク化</h3>
              </div>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                フランチャイズによる全国支部展開。地域ごとに灯火が灯り、つながるネットワークを実現。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold text-xl mr-4">
                  4
                </div>
                <h3 className="font-serif text-2xl font-semibold">長期：世界へ</h3>
              </div>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                日本発のSocial Impact Entertainmentを世界へ。楽しむことが社会を良くする文化を創造。
              </p>
            </div>
          </MotionWrapper>
        </div>

        <MotionWrapper>
          <div className="text-center">
            <Button href="/vision" variant="outline">
              View More
            </Button>
          </div>
        </MotionWrapper>
      </Section>

      {/* Story Section */}
      <Section id="story" background="dark">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="max-w-4xl mx-auto">
          <MotionWrapper delay={0.2}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 md:p-12 rounded-lg mb-8">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                「社会を良くしたい」と思う気持ちは誰の中にもある。
              </p>
              <p className="text-lg leading-relaxed mb-6">
                でも、それを行動に移すきっかけが足りない。
                私たちTOMOSHIBIは、その"きっかけ"をエンターテインメントとしてデザインします。
              </p>
              <p className="text-lg leading-relaxed mb-6">
                社会課題を事件として解き明かし、人が楽しみながら未来を照らす。
                その第一歩が、SPR探偵事務所です。
              </p>
              <p className="text-lg leading-relaxed">
                社会の"闇"とは、無関心・断絶・疲弊。
                その闇を照らすのは、一人ひとりの小さな灯火です。
                私たちは、人々の行動を物語とつなぎ、継続可能な社会貢献をデザインします。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="text-center">
              <Button href="/about" variant="primary">
                チームについて
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="white">
        <MotionWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-tomoshibi-brown">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
            <p className="text-xl text-tomoshibi-brown text-opacity-80 mb-12 leading-relaxed">
              私たちと一緒に、社会に小さな光を増やしていきませんか？
              <br />
              企業協賛・行政連携・取材依頼・イベント参加など、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                ともに、灯火をともそう
              </Button>
              <Button href="https://spr-tomoshibi.vercel.app/" variant="outline">
                SPR探偵事務所サイトへ
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </Section>
    </>
  )
}

