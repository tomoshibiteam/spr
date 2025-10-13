import { Metadata } from 'next'
import Section from '@/components/Section'
import MotionWrapper from '@/components/MotionWrapper'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Projects - 事業紹介 | TOMOSHIBI Inc.',
  description: 'TOMOSHIBIの事業内容をご紹介します。SPR探偵事務所を中心に、社会に光を届けるサービスを展開しています。',
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tomoshibi-brown to-tomoshibi-gold text-tomoshibi-beige">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-center">
              Projects
            </h1>
            <div className="w-24 h-1 bg-tomoshibi-beige mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
              社会を照らすエンターテインメント
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-lg md:text-xl leading-relaxed text-tomoshibi-brown text-opacity-80">
              TOMOSHIBIは、社会課題解決型エンターテインメント（SIE）を通じて、
              人々が楽しみながら社会に関わり、行動を起こせる仕組みを創造しています。
              現在はSPR探偵事務所を運営し、今後は教育・企業連携・地域展開など、
              事業領域を拡大していく予定です。
            </p>
          </div>
        </MotionWrapper>
      </Section>

      {/* Main Project: SPR */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <MotionWrapper>
            <div className="aspect-square bg-gradient-to-br from-tomoshibi-gold to-tomoshibi-brown rounded-lg flex items-center justify-center box-shadow-soft">
              <div className="text-center text-tomoshibi-beige p-8">
                <div className="text-8xl mb-6">🕵️</div>
                <h3 className="font-serif text-4xl font-bold">SPR</h3>
                <p className="text-2xl mt-4">探偵事務所</p>
                <p className="text-sm mt-2 text-opacity-80">Social Problem Research</p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div>
              <div className="inline-block bg-tomoshibi-gold text-tomoshibi-brown px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ソーシャル・インパクト・エンターテインメント
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
                SPR探偵事務所
              </h2>
              <p className="text-lg text-tomoshibi-brown text-opacity-80 mb-6 leading-relaxed">
                SPR（Social Problem Research）探偵事務所は、
                TOMOSHIBIが運営するソーシャル・インパクト・エンターテインメント事業です。
              </p>
              <p className="text-lg text-tomoshibi-brown text-opacity-80 mb-8 leading-relaxed">
                参加者は"探偵"として社会課題を探究し、謎解きイベントとWebアプリを通じて、
                楽しみながら行動を記録。その積み重ねが「光の記録」として可視化され、
                社会貢献が日常になる体験を提供します。
              </p>
              <Button href="/projects/spr" variant="primary">
                SPRの世界を探る
              </Button>
            </div>
          </MotionWrapper>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionWrapper delay={0.1}>
            <div className="bg-tomoshibi-beige p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-tomoshibi-brown">
                地域×謎解きイベント
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70">
                地域を舞台にした謎解きイベントで、社会課題を体験として探究
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-tomoshibi-beige p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-tomoshibi-brown">
                行動記録Webアプリ
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70">
                日々の行動を記録し、社会貢献を可視化するプラットフォーム
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-tomoshibi-beige p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-tomoshibi-brown">
                共創モデル
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70">
                参加者・行政・企業が連携する新しい社会貢献の形
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Future Projects */}
      <Section>
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              今後の展開
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
            <p className="text-lg text-tomoshibi-brown text-opacity-80 max-w-3xl mx-auto">
              SPR探偵事務所での実績を基盤に、
              <br />
              さらなるサービス展開を計画しています。
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                教育機関との連携
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed mb-4">
                学校や大学と協働し、社会課題を学ぶ新しい教育プログラムを開発。
                次世代が楽しみながら社会を学べる機会を創出します。
              </p>
              <span className="inline-block bg-tomoshibi-gold bg-opacity-30 text-tomoshibi-brown px-3 py-1 rounded-full text-sm">
                Coming Soon
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                企業CSRプログラム
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed mb-4">
                企業の社会貢献活動をエンターテインメント化。
                社員や顧客が楽しみながら参加できるCSRプログラムを提供します。
              </p>
              <span className="inline-block bg-tomoshibi-gold bg-opacity-30 text-tomoshibi-brown px-3 py-1 rounded-full text-sm">
                Coming Soon
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <div className="text-5xl mb-4">🌏</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                地域支部ネットワーク
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed mb-4">
                全国各地にSPR支部を展開。
                地域ごとに独自の社会課題に挑む、灯火のネットワークを構築します。
              </p>
              <span className="inline-block bg-tomoshibi-gold bg-opacity-30 text-tomoshibi-brown px-3 py-1 rounded-full text-sm">
                Coming Soon
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                デジタルプラットフォーム
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed mb-4">
                オンラインでも社会課題に挑めるプラットフォームを構築。
                場所を選ばず、誰もが参加できる環境を提供します。
              </p>
              <span className="inline-block bg-tomoshibi-gold bg-opacity-30 text-tomoshibi-brown px-3 py-1 rounded-full text-sm">
                Coming Soon
              </span>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <MotionWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              まずはSPRの世界へ
            </h2>
            <p className="text-lg mb-8 text-opacity-80">
              現在、SPR探偵事務所にて社会課題解決型イベントを開催中です。
              <br />
              一緒に、社会の謎を解き明かしませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/projects/spr" variant="primary">
                SPR探偵事務所へ
              </Button>
              <Button href="/contact" variant="outline" className="border-tomoshibi-beige text-tomoshibi-beige hover:bg-tomoshibi-beige hover:text-tomoshibi-brown">
                協業・連携のお問い合わせ
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </Section>
    </>
  )
}
