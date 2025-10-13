import { Metadata } from 'next'
import Section from '@/components/Section'
import MotionWrapper from '@/components/MotionWrapper'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Mission - 私たちの想い | TOMOSHIBI Inc.',
  description: '楽しみながら社会を変える。TOMOSHIBIの使命と理念についてご紹介します。',
}

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tomoshibi-brown to-tomoshibi-gold text-tomoshibi-beige">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-center">
              Mission
            </h1>
            <div className="w-24 h-1 bg-tomoshibi-beige mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
              楽しみながら社会を変える
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Core Mission */}
      <Section>
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-tomoshibi-brown">
              私たちの想い
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-tomoshibi-brown text-opacity-80 mb-6">
              私たちは、社会課題を「自分ごと化」するきっかけをエンターテインメントでつくります。
            </p>
            <p className="text-lg leading-relaxed text-tomoshibi-brown text-opacity-80 mb-6">
              社会の"闇"とは、無関心・断絶・疲弊。
              その闇を照らすのは、一人ひとりの小さな灯火です。
            </p>
            <p className="text-lg leading-relaxed text-tomoshibi-brown text-opacity-80">
              TOMOSHIBIは、人々の行動を物語とつなぎ、
              継続可能な社会貢献をデザインします。
            </p>
          </div>
        </MotionWrapper>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <MotionWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft h-full">
              <div className="text-6xl mb-6 text-center">🔍</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center text-tomoshibi-brown">
                探究の体験
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                社会課題を「事件」として体験できる仕組みを通じて、人々の探究心に火をつけます。
                謎解きやストーリーを通じて、複雑な社会課題を身近に感じ、
                自分なりの答えを探す旅に出ることができます。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft h-full">
              <div className="text-6xl mb-6 text-center">🤝</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center text-tomoshibi-brown">
                共創の場づくり
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                地域・企業・個人をつなぐ参加型プラットフォームで、新しい連帯を生み出します。
                一人では解決できない課題も、みんなで挑めば乗り越えられる。
                そんな共創の場を、エンターテインメントを通じて創造します。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft h-full">
              <div className="text-6xl mb-6 text-center">💡</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center text-tomoshibi-brown">
                行動の循環
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                日常と非日常を行き来する継続的アクションモデルで、社会貢献を日常化します。
                一度きりのイベントではなく、日々の小さな行動が社会を変える力になる。
                そんな持続可能な仕組みをデザインします。
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Social Background */}
      <Section background="white">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-tomoshibi-brown">
              なぜ今、この事業が必要なのか
            </h2>

            <div className="space-y-8">
              <div className="bg-tomoshibi-beige p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  広がる無関心と断絶
                </h3>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  現代社会では、社会課題への関心が薄れ、人々の間に断絶が広がっています。
                  環境問題、地域の衰退、文化の消失。
                  これらは「自分には関係ない」と思われがちですが、
                  実は私たち一人ひとりの生活と深く結びついています。
                </p>
              </div>

              <div className="bg-tomoshibi-beige p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  行動へのハードルの高さ
                </h3>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  「社会を良くしたい」と思う気持ちは誰の中にもあります。
                  しかし、何から始めればいいのか、どう関わればいいのか分からない。
                  そのハードルの高さが、行動を妨げています。
                </p>
              </div>

              <div className="bg-tomoshibi-beige p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  楽しさと意義の融合
                </h3>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  私たちは、エンターテインメントの力で、社会貢献のハードルを下げます。
                  楽しみながら、自然と社会課題に触れ、行動を起こせる仕組み。
                  それが、TOMOSHIBIのアプローチです。
                </p>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </Section>

      {/* Values */}
      <Section>
        <MotionWrapper>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-tomoshibi-brown">
              私たちの価値観
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-tomoshibi-brown">
                    参加者第一主義
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                    私たちは常に参加者の立場に立ち、楽しい体験を提供します。
                    一人ひとりが主役となり、自分なりの物語を紡げる場を創ります。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-tomoshibi-brown">
                    創造性とイノベーション
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                    常に新しいアイデアと手法を追求し、社会課題解決の新しい形を創造します。
                    既存の枠にとらわれず、柔軟な発想で挑戦し続けます。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-tomoshibi-brown">
                    誠実さと透明性
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                    社会課題に向き合う姿勢は、常に誠実であること。
                    活動の成果や影響を透明に共有し、信頼関係を築きます。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-tomoshibi-brown">
                    継続性と持続可能性
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                    一時的なムーブメントではなく、長く続く文化を創ります。
                    人々が無理なく、楽しく続けられる仕組みをデザインします。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold mr-4 mt-1">
                  5
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-tomoshibi-brown">
                    協働とパートナーシップ
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                    私たち単独では成し遂げられないことも、多様なパートナーとの協働で実現できます。
                    地域、企業、行政、個人。すべてのステークホルダーとともに、より良い社会を創ります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <MotionWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              ともに、灯火をともそう
            </h2>
            <p className="text-lg mb-8 text-opacity-80">
              社会を変えるのは、特別な誰かではありません。
              <br />
              あなたの小さな一歩が、大きな変化を生み出します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/projects/spr" variant="primary">
                SPRの世界を探る
              </Button>
              <Button href="/contact" variant="outline" className="border-tomoshibi-beige text-tomoshibi-beige hover:bg-tomoshibi-beige hover:text-tomoshibi-brown">
                お問い合わせ
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </Section>
    </>
  )
}
