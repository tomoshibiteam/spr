import { Metadata } from 'next'
import Section from '@/components/Section'
import MotionWrapper from '@/components/MotionWrapper'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Vision - 未来への展望 | TOMOSHIBI Inc.',
  description: 'TOMOSHIBIの中長期ビジョンと成長戦略。灯火がつながる未来へ。',
}

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tomoshibi-brown to-tomoshibi-gold text-tomoshibi-beige">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-center">
              Vision
            </h1>
            <div className="w-24 h-1 bg-tomoshibi-beige mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
              灯火がつながる未来へ
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Vision Statement */}
      <Section>
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-tomoshibi-brown">
              私たちが目指す未来
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-tomoshibi-brown text-opacity-80 mb-6">
              TOMOSHIBIは、エンターテインメントを起点に人と社会をつなぐプラットフォームを目指します。
            </p>
            <p className="text-lg leading-relaxed text-tomoshibi-brown text-opacity-80">
              一つひとつの"支部"が地域の光となり、全国に広がる灯火のネットワークを築きます。
              <br />
              それは、楽しむことが社会を良くする新しい文化の創造です。
            </p>
          </div>
        </MotionWrapper>

        {/* Core Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft text-center h-full">
              <div className="text-6xl mb-6">🌟</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                文化の創造
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                楽しむことが社会を良くする。
                そんな新しい文化を、
                日本から世界へ広げます。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft text-center h-full">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                事業の拡大
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                SPR探偵事務所から始まる、
                全国への支部展開と
                多様なパートナーシップ。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft text-center h-full">
              <div className="text-6xl mb-6">🌐</div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                灯火のネットワーク
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                地域ごとに灯る小さな灯火が、
                つながり、大きな光となって
                社会を照らします。
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Growth Phases */}
      <Section background="white">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              成長フェーズ
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
            <p className="text-lg text-tomoshibi-brown text-opacity-80 max-w-3xl mx-auto">
              4つのフェーズで、段階的に成長していきます
            </p>
          </div>
        </MotionWrapper>

        <div className="max-w-5xl mx-auto space-y-8">
          <MotionWrapper delay={0.1}>
            <div className="bg-gradient-to-r from-tomoshibi-gold to-tomoshibi-beige p-8 md:p-12 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tomoshibi-brown rounded-full flex items-center justify-center text-tomoshibi-beige font-bold text-2xl mr-6">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-tomoshibi-brown">
                    Phase 1: 基盤構築期（2024-2025）
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70">
                    SPR探偵事務所の確立と実績の積み上げ
                  </p>
                </div>
              </div>
              <div className="space-y-3 ml-22">
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">謎解きイベント×Webアプリの融合モデル確立</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">地域・行政との実績作り</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">参加者コミュニティの育成</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">ブランド認知度の向上</span>
                </p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-gradient-to-r from-tomoshibi-gold to-tomoshibi-beige p-8 md:p-12 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tomoshibi-brown rounded-full flex items-center justify-center text-tomoshibi-beige font-bold text-2xl mr-6">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-tomoshibi-brown">
                    Phase 2: 連携拡大期（2026-2028）
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70">
                    パートナーシップの拡大と事業多角化
                  </p>
                </div>
              </div>
              <div className="space-y-3 ml-22">
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">教育機関との連携プログラム開発</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">企業CSRプログラムの本格展開</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">複数地域での同時展開</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">オンラインプラットフォームの拡充</span>
                </p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-gradient-to-r from-tomoshibi-gold to-tomoshibi-beige p-8 md:p-12 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tomoshibi-brown rounded-full flex items-center justify-center text-tomoshibi-beige font-bold text-2xl mr-6">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-tomoshibi-brown">
                    Phase 3: 支部ネットワーク化（2029-2031）
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70">
                    全国展開とフランチャイズモデルの構築
                  </p>
                </div>
              </div>
              <div className="space-y-3 ml-22">
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">全国主要都市への支部展開</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">フランチャイズシステムの確立</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">支部間連携イベントの開催</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">灯火ネットワークの可視化</span>
                </p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <div className="bg-gradient-to-r from-tomoshibi-gold to-tomoshibi-beige p-8 md:p-12 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tomoshibi-brown rounded-full flex items-center justify-center text-tomoshibi-beige font-bold text-2xl mr-6">
                  4
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-tomoshibi-brown">
                    Phase 4: グローバル展開（2032以降）
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70">
                    日本発SIEを世界へ
                  </p>
                </div>
              </div>
              <div className="space-y-3 ml-22">
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">アジアを中心とした海外展開</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">現地課題に応じたコンテンツ開発</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">グローバルパートナーシップ構築</span>
                </p>
                <p className="flex items-start">
                  <span className="text-tomoshibi-brown mr-2">▸</span>
                  <span className="text-tomoshibi-brown text-opacity-80">「楽しむ社会貢献」文化の世界普及</span>
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Key Strategies */}
      <Section>
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              重点戦略
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <MotionWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                ブランド戦略
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                「社会を照らすエンターテインメント」というブランドメッセージを一貫して発信し、
                新しいジャンルのパイオニアとしてのポジションを確立します。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown flex items-center">
                <span className="text-3xl mr-3">💻</span>
                テクノロジー活用
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                AI、ゲーミフィケーション、データ可視化などの技術を活用し、
                参加者体験の向上と社会的インパクトの測定を実現します。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown flex items-center">
                <span className="text-3xl mr-3">👥</span>
                コミュニティ育成
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                参加者同士がつながり、支え合い、共に社会課題に挑むコミュニティを育成。
                一人ひとりが「灯火」となる環境を創ります。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown flex items-center">
                <span className="text-3xl mr-3">🤝</span>
                パートナーシップ
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                地域、企業、行政、教育機関など、
                多様なステークホルダーとのパートナーシップを構築し、
                社会課題解決のエコシステムを形成します。
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Impact */}
      <Section background="dark">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              社会への影響
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="max-w-4xl mx-auto space-y-6">
          <MotionWrapper delay={0.1}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">🌍</span>
                社会課題への関心喚起
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed">
                エンターテインメントの力で、複雑な社会課題を身近に感じられる体験を提供。
                無関心だった人々が、社会に目を向けるきっかけを創ります。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">💪</span>
                行動する人々の増加
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed">
                「楽しい」から始まる行動変容。社会貢献のハードルを下げ、
                より多くの人々が自然と行動を起こせる仕組みを提供します。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">✨</span>
                新しい文化の創造
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed">
                「楽しむことが社会を良くする」という新しい価値観を広め、
                社会貢献が特別なことではなく、日常の一部となる文化を創造します。
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <MotionWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              一緒に、未来を照らしませんか
            </h2>
            <p className="text-lg text-tomoshibi-brown text-opacity-80 mb-8">
              TOMOSHIBIのビジョンに共感していただける方、
              <br />
              一緒に新しい文化を創っていきませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/about" variant="primary">
                チームについて
              </Button>
              <Button href="/contact" variant="outline">
                協業・連携のご相談
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </Section>
    </>
  )
}
