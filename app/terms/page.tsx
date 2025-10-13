import { Metadata } from 'next'
import Section from '@/components/Section'
import MotionWrapper from '@/components/MotionWrapper'

export const metadata: Metadata = {
  title: '利用規約 | TOMOSHIBI Inc.',
  description: 'TOMOSHIBI Inc.のサービス利用規約です。当社サービスをご利用いただく際の規約を明示しています。',
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tomoshibi-brown to-tomoshibi-gold text-tomoshibi-beige">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">
              利用規約
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
                  この利用規約（以下「本規約」といいます）は、株式会社TOMOSHIBI（以下「当社」といいます）が
                  提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。
                  本サービスをご利用いただく際には、本規約にご同意いただいたものとみなします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第1条（適用）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  本規約は、本サービスの利用に関する当社とユーザーとの間の権利義務関係を定めることを目的とし、
                  ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第2条（定義）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed mb-4">
                  本規約において、次の各号に掲げる用語の意義は、当該各号に定めるところによります。
                </p>
                <ul className="list-decimal list-inside space-y-2 text-tomoshibi-brown text-opacity-80 ml-4">
                  <li>「本サービス」とは、当社が提供する探偵業務その他関連するサービスを意味します。</li>
                  <li>「ユーザー」とは、本サービスを利用する全ての者を意味します。</li>
                  <li>「個人情報」とは、個人情報保護法に定める個人情報を意味します。</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第3条（サービス内容）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、探偵業法に基づき、浮気調査、人探し、企業調査等の探偵業務を提供いたします。
                  サービスの詳細については、当社ウェブサイトまたは個別契約書に記載するものとします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第4条（契約の成立）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  本サービスの利用契約は、ユーザーが当社所定の方法により本サービスの利用を申し込み、
                  当社がこれを承諾した時点で成立するものとします。
                  当社は、申込内容に不備がある場合、または当社が不適切と判断した場合、
                  申込を承諾しないことがあります。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第5条（料金及び支払方法）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  ユーザーは、本サービスの利用料金を、当社が指定する方法により支払うものとします。
                  料金の詳細は、個別契約書に記載するものとします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第6条（禁止事項）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed mb-4">
                  ユーザーは、本サービスの利用にあたり、以下の行為をしてはならないものとします。
                </p>
                <ul className="list-disc list-inside space-y-2 text-tomoshibi-brown text-opacity-80 ml-4">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社、他のユーザー、または第三者の権利を侵害する行為</li>
                  <li>虚偽の情報を提供する行為</li>
                  <li>調査結果を不正な目的で使用する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第7条（守秘義務）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、本サービスの提供にあたり知り得たユーザーの個人情報及び調査内容について、
                  法令に基づく場合を除き、ユーザーの同意なく第三者に開示または提供しないものとします。
                  ユーザーも、本サービスの利用により知り得た当社の業務上の情報について、
                  第三者に開示または提供しないものとします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第8条（免責事項）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、本サービスに関して、その完全性、正確性、確実性、有用性等いかなる保証も行いません。
                  当社は、本サービスの利用により生じたユーザーの損害について、
                  当社の故意または重過失による場合を除き、一切の責任を負いません。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第9条（契約の解除）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、ユーザーが本規約に違反した場合、または当社が不適切と判断した場合、
                  事前の通知なく本サービスの利用を停止し、または契約を解除することができるものとします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第10条（規約の変更）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  当社は、必要に応じて本規約を変更することができるものとします。
                  変更後の規約は、当社ウェブサイトに掲載した時点より効力を生じるものとします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold mb-4 text-tomoshibi-brown">
                  第11条（準拠法及び管轄裁判所）
                </h2>
                <p className="text-tomoshibi-brown text-opacity-80 leading-relaxed">
                  本規約の解釈にあたっては、日本法を準拠法とします。
                  本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
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

