'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import MotionWrapper from '@/components/MotionWrapper'
import Button from '@/components/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // シミュレート: 実際はAPIに送信
    setTimeout(() => {
      setIsSubmitting(false)
      setShowModal(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-tomoshibi-brown to-tomoshibi-gold text-tomoshibi-beige">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-center">
              Contact
            </h1>
            <div className="w-24 h-1 bg-tomoshibi-beige mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
              ともに、灯火をともそう
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Contact Info */}
      <Section>
        <MotionWrapper>
          <div className="text-center mb-16">
            <p className="text-lg text-tomoshibi-brown text-opacity-80 max-w-3xl mx-auto mb-12">
              私たちと一緒に、社会に小さな光を増やしていきませんか？
              <br />
              企業協賛・行政連携・取材依頼・イベント参加など、お気軽にお問い合わせください。
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <MotionWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-tomoshibi-brown">
                メール
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70">
                info@tomoshibi.co.jp
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-tomoshibi-brown">
                電話
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70">
                03-XXXX-XXXX
                <br />
                <span className="text-sm">(平日 10:00-18:00)</span>
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="bg-white p-8 rounded-lg box-shadow-soft text-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-tomoshibi-brown">
                所在地
              </h3>
              <p className="text-tomoshibi-brown text-opacity-70">
                東京都
                <br />
                <span className="text-sm">(詳細はお問い合わせください)</span>
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <MotionWrapper>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center text-tomoshibi-brown">
              お問い合わせフォーム
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-tomoshibi-brown font-medium mb-2">
                  お名前 / 団体名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-tomoshibi-brown border-opacity-20 focus:outline-none focus:ring-2 focus:ring-tomoshibi-gold bg-tomoshibi-beige"
                  placeholder="山田 太郎 / 〇〇株式会社"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-tomoshibi-brown font-medium mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-tomoshibi-brown border-opacity-20 focus:outline-none focus:ring-2 focus:ring-tomoshibi-gold bg-tomoshibi-beige"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-tomoshibi-brown font-medium mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-tomoshibi-brown border-opacity-20 focus:outline-none focus:ring-2 focus:ring-tomoshibi-gold bg-tomoshibi-beige"
                >
                  <option value="">選択してください</option>
                  <option value="イベント参加">イベント参加について</option>
                  <option value="企業協賛">企業協賛について</option>
                  <option value="行政連携">行政連携について</option>
                  <option value="教育機関連携">教育機関との連携について</option>
                  <option value="取材">取材・メディア掲載について</option>
                  <option value="採用">採用について</option>
                  <option value="その他">その他のお問い合わせ</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-tomoshibi-brown font-medium mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-tomoshibi-brown border-opacity-20 focus:outline-none focus:ring-2 focus:ring-tomoshibi-gold bg-tomoshibi-beige resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <div className="bg-tomoshibi-gold bg-opacity-20 p-6 rounded-lg">
                <p className="text-sm text-tomoshibi-brown text-opacity-70 leading-relaxed">
                  ※ お預かりした個人情報は、お問い合わせへの回答および当社サービスのご案内にのみ使用し、
                  厳重に管理いたします。第三者に開示・提供することはございません。
                </p>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </Button>
              </div>
            </form>
          </MotionWrapper>
        </div>
      </Section>

      {/* SPR Link */}
      <Section background="dark">
        <MotionWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              SPR探偵事務所への
              <br />
              イベント参加はこちら
            </h2>
            <p className="text-lg mb-8 text-opacity-80">
              謎解きイベントへの参加申し込みや、
              <br />
              SPR探偵事務所に関する詳細は
              <br />
              公式サイトをご覧ください。
            </p>
            <Button href="https://spr-tomoshibi.vercel.app/" variant="primary">
              SPR探偵事務所 公式サイト
            </Button>
          </div>
        </MotionWrapper>
      </Section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <MotionWrapper>
            <div className="bg-white rounded-lg p-8 md:p-12 max-w-md w-full box-shadow-soft">
              <div className="text-center">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-tomoshibi-brown">
                  送信完了
                </h3>
                <p className="text-tomoshibi-brown text-opacity-80 mb-8 leading-relaxed">
                  お問い合わせありがとうございます。
                  <br />
                  内容を確認の上、担当者より
                  <br />
                  ご連絡させていただきます。
                </p>
                <Button onClick={() => setShowModal(false)} variant="primary">
                  閉じる
                </Button>
              </div>
            </div>
          </MotionWrapper>
        </div>
      )}
    </>
  )
}
