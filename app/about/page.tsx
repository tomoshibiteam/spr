import { Metadata } from 'next'
import Section from '@/components/Section'
import MotionWrapper from '@/components/MotionWrapper'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'About - 私たちについて | TOMOSHIBI Inc.',
  description: 'TOMOSHIBIの創業ストーリー、代表メッセージ、チーム紹介。社会を照らす私たちの想い。',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tomoshibi-brown to-tomoshibi-gold text-tomoshibi-beige">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-center">
              About Us
            </h1>
            <div className="w-24 h-1 bg-tomoshibi-beige mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
              小さな灯火から始まった物語
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Company Overview */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <MotionWrapper>
            <div className="aspect-square bg-gradient-to-br from-tomoshibi-gold to-tomoshibi-brown rounded-lg flex items-center justify-center box-shadow-soft">
              <div className="text-center text-tomoshibi-beige p-8">
                <div className="text-8xl mb-6">🔥</div>
                <h3 className="font-serif text-4xl font-bold">TOMOSHIBI</h3>
                <p className="text-xl mt-4">Inc.</p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
                会社概要
              </h2>
              <div className="space-y-4 text-tomoshibi-brown text-opacity-80">
                <div className="flex">
                  <span className="font-semibold w-32 flex-shrink-0">会社名</span>
                  <span>株式会社TOMOSHIBI</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-32 flex-shrink-0">設立</span>
                  <span>2024年</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-32 flex-shrink-0">代表</span>
                  <span>代表取締役 創業者</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-32 flex-shrink-0">事業内容</span>
                  <span>社会課題解決型エンターテインメント事業</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-32 flex-shrink-0">ビジョン</span>
                  <span>社会の闇に灯火をともし、<br />楽しむことが社会を良くする文化を創る</span>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Founding Story */}
      <Section background="white">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              創業ストーリー
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="max-w-4xl mx-auto">
          <MotionWrapper delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  始まりは、一つの問いから
                </h3>
                <p className="text-lg text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  「社会を良くしたい」と思う気持ちは誰の中にもある。
                  <br /><br />
                  でも、それを行動に移すきっかけが足りない。
                  社会課題は複雑で、自分には関係ないと感じてしまう。
                  何をすればいいのか分からない。
                  <br /><br />
                  この「もどかしさ」から、TOMOSHIBIは生まれました。
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  エンターテインメントという選択
                </h3>
                <p className="text-lg text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  私たちが選んだのは、「エンターテインメント」という手法でした。
                  <br /><br />
                  謎解きゲーム、物語、探索。人々が夢中になれる体験を通じて、
                  自然と社会課題に触れ、考え、行動するきっかけを創る。
                  <br /><br />
                  楽しいから参加する。そして気づいたら、社会を良くする行動をしていた。
                  そんな体験をデザインすることが、私たちの使命だと信じています。
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  「灯火」という名前に込めた想い
                </h3>
                <p className="text-lg text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  TOMOSHIBIという社名には、暗闇を照らす小さな灯火でありたい、
                  という想いが込められています。
                  <br /><br />
                  どんなに暗い闇の中でも、小さな灯火があれば道は見えます。
                  そして、一人ひとりの灯火が集まれば、大きな光になる。
                  <br /><br />
                  私たちは、人々が社会を照らす「灯火」となるためのきっかけを提供します。
                  そして、その灯火がつながり、温もりのある社会を創っていきます。
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* CEO Message */}
      <Section>
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              代表メッセージ
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="max-w-4xl mx-auto">
          <MotionWrapper delay={0.2}>
            <div className="bg-white p-8 md:p-12 rounded-lg box-shadow-soft mb-8">
              <p className="text-lg leading-relaxed text-tomoshibi-brown text-opacity-80 mb-6">
                現代社会は、複雑な課題に満ちています。
                環境問題、地域の衰退、文化の消失、社会的孤立。
                これらは決して他人事ではなく、私たち一人ひとりに関わる問題です。
              </p>
              <p className="text-lg leading-relaxed text-tomoshibi-brown text-opacity-80 mb-6">
                しかし、多くの人はこれらの課題に無関心か、
                関心はあっても「自分には何もできない」と感じています。
                この無力感が、社会の"闇"をさらに深くしています。
              </p>
              <p className="text-lg leading-relaxed text-tomoshibi-brown text-opacity-80 mb-6">
                私たちTOMOSHIBIは、この状況を変えたいと考えています。
                エンターテインメントの力で、社会課題を「楽しく、身近に、自分ごと」にする。
                一人ひとりが無理なく、楽しみながら社会に貢献できる仕組みを創る。
              </p>
              <p className="text-lg leading-relaxed text-tomoshibi-brown text-opacity-80 mb-8">
                それは、単なるイベントでも、単なる社会貢献でもありません。
                新しい文化の創造です。
                <br /><br />
                楽しむことが社会を良くする。その当たり前を、共に創っていきましょう。
              </p>
              <div className="text-right">
                <p className="font-semibold text-tomoshibi-brown">
                  株式会社TOMOSHIBI 代表取締役
                </p>
                <p className="font-serif text-2xl font-bold text-tomoshibi-brown mt-2">
                  創業者
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Values */}
      <Section background="dark">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              私たちの価値観
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <MotionWrapper delay={0.1}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎉</span>
                楽しさの追求
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed">
                何よりも「楽しい」体験を大切にします。
                楽しいから続く。楽しいから広がる。それが、持続可能な社会貢献の鍵です。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                創造性と革新
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed">
                既存の枠にとらわれず、常に新しいアイデアと手法を追求します。
                社会課題解決の新しい形を、共に創造していきます。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">🤝</span>
                つながりの重視
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed">
                人と人、人と地域、人と社会をつなぎます。
                一人では成し遂げられないことも、つながれば実現できます。
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <div className="bg-tomoshibi-brown bg-opacity-50 backdrop-blur p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">🌱</span>
                持続可能性
              </h3>
              <p className="text-tomoshibi-beige text-opacity-90 leading-relaxed">
                一時的なムーブメントではなく、長く続く文化を創ります。
                無理なく、楽しく、自然と続けられる仕組みをデザインします。
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Team */}
      <Section background="white">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              チーム
            </h2>
            <div className="w-24 h-1 bg-tomoshibi-gold mx-auto mb-8" />
            <p className="text-lg text-tomoshibi-brown text-opacity-80 max-w-3xl mx-auto">
              多様なバックグラウンドを持つメンバーが、
              <br />
              それぞれの専門性を活かして活動しています
            </p>
          </div>
        </MotionWrapper>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <MotionWrapper delay={0.1}>
              <div className="bg-tomoshibi-beige p-8 rounded-lg text-center">
                <div className="w-24 h-24 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown text-4xl mx-auto mb-4">
                  🎭
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-tomoshibi-brown">
                  コンテンツチーム
                </h3>
                <p className="text-tomoshibi-brown text-opacity-70">
                  謎解きや物語を通じて、社会課題を魅力的なエンターテインメントに変える
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <div className="bg-tomoshibi-beige p-8 rounded-lg text-center">
                <div className="w-24 h-24 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown text-4xl mx-auto mb-4">
                  💻
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-tomoshibi-brown">
                  テクノロジーチーム
                </h3>
                <p className="text-tomoshibi-brown text-opacity-70">
                  アプリ開発やデータ分析で、体験を拡張し、社会的インパクトを可視化する
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="bg-tomoshibi-beige p-8 rounded-lg text-center">
                <div className="w-24 h-24 bg-tomoshibi-gold rounded-full flex items-center justify-center text-tomoshibi-brown text-4xl mx-auto mb-4">
                  🤝
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-tomoshibi-brown">
                  パートナーシップチーム
                </h3>
                <p className="text-tomoshibi-brown text-opacity-70">
                  地域、企業、行政との連携を構築し、プロジェクトを推進する
                </p>
              </div>
            </MotionWrapper>
          </div>

          <MotionWrapper delay={0.4}>
            <div className="bg-gradient-to-r from-tomoshibi-gold to-tomoshibi-beige p-8 rounded-lg text-center">
              <p className="text-lg text-tomoshibi-brown mb-4">
                私たちと一緒に働きませんか？
              </p>
              <p className="text-tomoshibi-brown text-opacity-80 mb-6">
                TOMOSHIBIでは、熱意と創造性を持った仲間を募集しています
              </p>
              <Button href="/contact" variant="secondary">
                採用について問い合わせる
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <MotionWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tomoshibi-brown">
              ともに、灯火をともそう
            </h2>
            <p className="text-lg text-tomoshibi-brown text-opacity-80 mb-8">
              あなたも、社会を照らす灯火の一つになりませんか？
              <br />
              私たちと一緒に、新しい文化を創っていきましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/projects/spr" variant="primary">
                SPRの世界を探る
              </Button>
              <Button href="/contact" variant="outline">
                お問い合わせ
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </Section>
    </>
  )
}
