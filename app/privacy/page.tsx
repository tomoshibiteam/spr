import { Metadata } from 'next'
import Section from '@/components/Section'
import MotionWrapper from '@/components/MotionWrapper'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | TOMOSHIBI Inc.',
  description: 'TOMOSHIBI Inc.のプライバシーポリシーです。お客様の個人情報保護に関する方針を明示しています。',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tomoshibi-brown to-tomoshibi-gold text-tomoshibi-beige">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">
              プライバシーポリシー
            </h1>
            <div className="w-24 h-1 bg-tomoshibi-beige mx-auto" />
          </MotionWrapper>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <MotionWrapper>
            <div className="bg-white p-8 md:p-12 rounded-lg box-shadow-soft space-y-8">
              <div>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed mb-4">
                  株式会社TOMOSHIBI（以下「当社」といいます）は、お客様の個人情報保護の重要性について認識し、
                  個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守すると共に、
                  以下のプライバシーポリシー（以下「本ポリシー」といいます）に従って、
                  適切な取扱い及び保護に努めます。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  1. 個人情報の定義
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、
                  すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
                  特定の個人を識別することができるもの（他の情報と容易に照合することができ、
                  それにより特定の個人を識別することができることとなるものを含みます）を指します。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  2. 個人情報の収集方法
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、お客様からのお問い合わせ、サービスのご利用申込み、アンケートへのご回答等を通じて、
                  お客様の個人情報を収集することがあります。
                  また、当社のウェブサイトにおいて、Cookie等の技術を使用して情報を収集することがあります。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  3. 個人情報の利用目的
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed mb-4">
                  当社は、収集した個人情報を以下の目的で利用いたします。
                </p>
                <ul className="list-disc list-inside space-y-2 text-tomoshibi-brown text-opacity-80">
                  <li>お客様からのお問い合わせへの対応</li>
                  <li>当社サービスの提供及び運営</li>
                  <li>当社サービスに関する情報のご案内</li>
                  <li>お客様のご本人確認</li>
                  <li>当社サービスの改善及び新サービスの開発</li>
                  <li>利用規約等に違反する行為への対応</li>
                  <li>その他、上記利用目的に付随する目的</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  4. 個人情報の第三者提供
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                </p>
                <ul className="list-disc list-inside space-y-2 text-tomoshibi-brown text-opacity-80 mt-4">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                  <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</li>
                  <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  5. 個人情報の安全管理
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、
                  個人情報の安全管理が図られるよう、当社の従業員に対し、必要かつ適切な監督を行います。
                  また、当社は、個人情報の取扱いの全部又は一部を委託する場合は、
                  委託先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  6. 個人情報の開示・訂正・削除等
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、お客様から個人情報の開示を求められたときは、遅滞なく開示いたします。
                  ただし、開示することにより以下のいずれかに該当する場合は、
                  その全部又は一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  7. プライバシーポリシーの変更
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、本ポリシーの内容を適宜見直し、その改善に努めます。
                  本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、変更することができるものとします。
                  変更後のプライバシーポリシーは、当社ウェブサイトに掲載したときから効力を生じるものとします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  8. お問い合わせ窓口
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed mb-4">
                  本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <div className="bg-tomoshibi-beige p-6 rounded-lg">
                  <p className="text-tomoshibi-brown">
                    株式会社TOMOSHIBI<br />
                    個人情報保護管理者<br />
                    Email: privacy@tomoshibi.co.jp
                  </p>
                </div>
              </div>

              <div className="text-right text-tomoshibi-brown text-opacity-60">
                <p>制定日：2024年10月1日</p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>
    </>
  )
}

