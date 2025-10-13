import { Metadata } from 'next'
import Section from '@/components/Section'
import MotionWrapper from '@/components/MotionWrapper'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'News - お知らせ | TOMOSHIBI Inc.',
  description: 'TOMOSHIBIからのお知らせ、活動報告、登壇情報など、最新情報をお届けします。',
}

// サンプルニュースデータ
const newsItems = [
  {
    id: '1',
    title: 'TOMOSHIBI Inc. 設立のお知らせ',
    description: '株式会社TOMOSHIBIを設立いたしました。社会課題解決型エンターテインメントを通じて、楽しみながら社会を変える新しい文化を創造してまいります。',
    date: '2024.10.01',
    category: 'プレスリリース'
  },
  {
    id: '2',
    title: 'SPR探偵事務所 第1回イベント開催決定',
    description: '社会課題を謎解きで体験する新しいエンターテインメント「SPR探偵事務所」の第1回イベントを開催します。テーマは環境問題。参加者募集中です。',
    date: '2024.10.15',
    category: 'イベント'
  },
  {
    id: '3',
    title: '〇〇市と包括連携協定を締結',
    description: '地域の社会課題解決に向けて、〇〇市と包括連携協定を締結しました。地域を舞台にした謎解きイベントを通じて、住民参加型の課題解決に取り組みます。',
    date: '2024.11.01',
    category: 'パートナーシップ'
  },
  {
    id: '4',
    title: '社会課題×エンターテインメントの可能性',
    description: '代表が〇〇フォーラムに登壇し、社会課題解決型エンターテインメント（SIE）の可能性について講演しました。多くの反響をいただいています。',
    date: '2024.11.20',
    category: '登壇'
  },
  {
    id: '5',
    title: '行動記録アプリ β版リリース',
    description: '日々の社会貢献活動を記録し、可視化するWebアプリのβ版をリリースしました。ゲーミフィケーション要素で、楽しく続けられる仕組みを実現しています。',
    date: '2024.12.05',
    category: 'プロダクト'
  },
  {
    id: '6',
    title: '〇〇大学との共同研究開始',
    description: '〇〇大学と共同で、エンターテインメントによる社会課題への関心喚起効果について研究を開始します。学術的なエビデンス構築を目指します。',
    date: '2024.12.20',
    category: 'パートナーシップ'
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tomoshibi-brown to-tomoshibi-gold text-tomoshibi-beige">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-center">
              News
            </h1>
            <div className="w-24 h-1 bg-tomoshibi-beige mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
              活動・登壇・パートナー連携のお知らせ
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* News List */}
      <Section>
        <MotionWrapper>
          <div className="text-center mb-16">
            <p className="text-lg text-tomoshibi-brown text-opacity-80 max-w-3xl mx-auto">
              TOMOSHIBIやSPR探偵事務所に関する最新情報、
              <br />
              イベントレポート、メディア掲載などをお届けします。
            </p>
          </div>
        </MotionWrapper>

        {/* Category Filter (Optional - for future enhancement) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <MotionWrapper delay={0.1}>
            <button className="px-6 py-2 rounded-full bg-tomoshibi-gold text-tomoshibi-brown font-medium hover:bg-opacity-90 transition-all">
              すべて
            </button>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <button className="px-6 py-2 rounded-full bg-white text-tomoshibi-brown font-medium hover:bg-tomoshibi-gold transition-all">
              プレスリリース
            </button>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <button className="px-6 py-2 rounded-full bg-white text-tomoshibi-brown font-medium hover:bg-tomoshibi-gold transition-all">
              イベント
            </button>
          </MotionWrapper>
          <MotionWrapper delay={0.4}>
            <button className="px-6 py-2 rounded-full bg-white text-tomoshibi-brown font-medium hover:bg-tomoshibi-gold transition-all">
              パートナーシップ
            </button>
          </MotionWrapper>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              href={`/news/${item.id}`}
              delay={index * 0.1}
              image="placeholder"
            />
          ))}
        </div>

        {/* Pagination (Optional - for future enhancement) */}
        <MotionWrapper delay={0.5}>
          <div className="flex justify-center gap-2 mt-16">
            <button className="w-10 h-10 rounded-full bg-tomoshibi-gold text-tomoshibi-brown font-medium hover:bg-opacity-90 transition-all">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-tomoshibi-brown font-medium hover:bg-tomoshibi-gold transition-all">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-tomoshibi-brown font-medium hover:bg-tomoshibi-gold transition-all">
              3
            </button>
          </div>
        </MotionWrapper>
      </Section>

      {/* Newsletter Signup */}
      <Section background="dark">
        <MotionWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              最新情報をお届けします
            </h2>
            <p className="text-lg mb-8 text-opacity-80">
              メールアドレスをご登録いただくと、
              <br />
              イベント情報や活動報告をいち早くお届けします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレス"
                className="flex-1 px-6 py-3 rounded-md bg-white text-tomoshibi-brown placeholder-tomoshibi-brown placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-tomoshibi-gold"
              />
              <button className="px-8 py-3 bg-tomoshibi-gold text-tomoshibi-brown rounded-md font-medium hover:bg-opacity-90 transition-all">
                登録
              </button>
            </div>
          </div>
        </MotionWrapper>
      </Section>
    </>
  )
}
