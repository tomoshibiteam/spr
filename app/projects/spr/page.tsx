import { Metadata } from 'next'
import Section from '@/components/Section'
import MotionWrapper from '@/components/MotionWrapper'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'SPR探偵事務所 | TOMOSHIBI Inc.',
  description: 'SPR（Social Problem Research）探偵事務所は、社会課題を謎解きで体験する、新しいエンターテインメントです。',
}

export default function SPRPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tomoshibi-brown via-tomoshibi-gold to-tomoshibi-brown text-tomoshibi-beige">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <div className="text-center mb-8">
              <div className="text-7xl mb-6">🕵️</div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                SPR探偵事務所
              </h1>
              <div className="w-24 h-1 bg-tomoshibi-beige mx-auto mb-8" />
              <p className="text-xl md:text-2xl mb-2">
                Social Problem Research Detective Agency
              </p>
              <p className="text-lg text-opacity-80">
                社会課題を、謎として解き明かす。
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-tomoshibi-brown">
              社会を照らす新しいエンターテインメント
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-tomoshibi-brown text-opacity-80 mb-6">
              SPR探偵事務所は、社会課題を「事件」として探究する、
              ソーシャル・インパクト・エンターテインメント（SIE）です。
            </p>
            <p className="text-lg leading-relaxed text-tomoshibi-brown text-opacity-80">
              参加者は"探偵"となり、地域を舞台にした謎解きイベントに挑戦。
              楽しみながら社会課題の本質に迫り、自分なりの答えを探します。
              そして、イベント後もWebアプリで日々の行動を記録し、
              「光の記録」として社会貢献を可視化していきます。
            </p>
          </div>
        </MotionWrapper>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft text-center h-full">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-tomoshibi-brown">
                リアル謎解きイベント
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                地域を歩き、謎を解きながら、
                環境・文化・地域課題の本質に迫る体験型イベント。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft text-center h-full">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-tomoshibi-brown">
                行動記録アプリ
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                日常の小さな行動を記録し、
                社会貢献をゲーミフィケーションで可視化。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft text-center h-full">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-tomoshibi-brown">
                光の記録
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                あなたの行動が「灯火」として蓄積され、
                社会に与えた影響を実感できる。
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Experience Flow */}
      <Section background="white">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              SPRでの体験の流れ
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { step: 1, title: '事件（社会課題）に遭遇', description: '地域で起きている「事件」（環境問題、地域課題、文化の危機など）の情報を受け取ります。' },
            { step: 2, title: '探偵として謎解きに挑戦', description: '地域を巡りながら、謎を解き、事件の背景にある社会課題の本質を探ります。' },
            { step: 3, title: '物語を通じて課題を理解', description: 'ストーリーを進める中で、複雑な社会課題が身近に、わかりやすく理解できます。' },
            { step: 4, title: 'アプリで行動を記録', description: 'イベント後も、日常でできる小さな行動（エコ活動、地域貢献など）をアプリで記録。' },
            { step: 5, title: '光の記録として可視化', description: 'あなたの行動が「灯火ポイント」として蓄積され、社会への影響が見える化されます。' },
            { step: 6, title: 'コミュニティとつながる', description: '他の参加者と情報交換し、一緒に社会課題に挑む仲間を見つけられます。' },
            { step: 7, title: '継続的な社会貢献', description: '楽しみながら、無理なく、社会貢献が日常の一部になっていきます。' },
          ].map((item, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              <div className="flex items-start bg-tomoshibi-beige p-6 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown font-bold text-xl mr-6">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-tomoshibi-brown">
                    {item.title}
                  </h3>
                  <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Section>

      {/* Event Themes */}
      <Section>
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              探究できる社会課題（テーマ例）
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <MotionWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown flex items-center">
                <span className="text-3xl mr-3">🌊</span>
                環境・気候変動
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed mb-4">
                海洋プラスチック、温暖化、生物多様性の喪失。
                謎解きを通じて、環境問題の実態と私たちにできることを探ります。
              </p>
              <ul className="space-y-2 text-sm text-tomoshibi-brown text-opacity-70">
                <li>• 消えた海洋生物の謎</li>
                <li>• 街を襲う異常気象の正体</li>
                <li>• 森からの最後のメッセージ</li>
              </ul>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown flex items-center">
                <span className="text-3xl mr-3">🏘️</span>
                地域・コミュニティ
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed mb-4">
                過疎化、商店街の衰退、世代間の断絶。
                地域を巡りながら、コミュニティの課題と可能性を発見します。
              </p>
              <ul className="space-y-2 text-sm text-tomoshibi-brown text-opacity-70">
                <li>• 失われた商店街の記憶</li>
                <li>• つながりを求める声</li>
                <li>• 地域に眠る宝物</li>
              </ul>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown flex items-center">
                <span className="text-3xl mr-3">🎭</span>
                文化・伝統の継承
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed mb-4">
                失われゆく伝統工芸、祭りの担い手不足、歴史の風化。
                文化継承の課題を、物語を通じて体験します。
              </p>
              <ul className="space-y-2 text-sm text-tomoshibi-brown text-opacity-70">
                <li>• 伝統工芸の最後の継承者</li>
                <li>• 忘れられた祭りの謎</li>
                <li>• 歴史が語る未来への道</li>
              </ul>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown flex items-center">
                <span className="text-3xl mr-3">🤝</span>
                社会的孤立・格差
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70 leading-relaxed mb-4">
                孤独、貧困、教育格差。
                見えにくい社会課題を、物語の力で可視化し、考えるきっかけを提供します。
              </p>
              <ul className="space-y-2 text-sm text-tomoshibi-brown text-opacity-70">
                <li>• 見えない壁の向こう側</li>
                <li>• つながりを失った街</li>
                <li>• 希望の光を探して</li>
              </ul>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Partnership */}
      <Section background="dark">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              協業・パートナーシップ
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <MotionWrapper delay={0.1}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                自治体・行政
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed text-sm">
                地域課題の可視化と、
                住民参加型の課題解決プログラムを共同開発
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                企業CSR
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed text-sm">
                社員や顧客が楽しみながら参加できる、
                エンターテインメント型CSRプログラム
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                教育機関
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed text-sm">
                学生が社会課題をリアルに学べる、
                体験型教育プログラムの提供
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
              あなたも、探偵になりませんか？
            </h2>
            <p className="text-lg text-tomoshibi-brown text-opacity-80 mb-8">
              社会課題を解き明かし、未来を照らす冒険へ。
              <br />
              まずはイベントに参加して、SPRの世界を体験してみてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://spr-tomoshibi.vercel.app/" variant="primary">
                SPR公式サイトへ
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
