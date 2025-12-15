'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます。確認後、ご連絡させていただきます。')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-900 mb-4">Contact Us</h1>
        <p className="text-xl text-dark-text-secondary mb-12">
          ご質問やご相談がございましたら、お気軽にお問い合わせください。
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              お名前 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-surface border border-dark-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="山田太郎"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              メールアドレス *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-surface border border-dark-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="info@example.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-bold mb-2">
              会社名
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-surface border border-dark-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="株式会社〇〇"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              メッセージ *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              className="w-full px-4 py-3 bg-dark-surface border border-dark-text/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="お問い合わせ内容をお入力ください。"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105"
          >
            送信する
          </button>

          <p className="text-sm text-dark-text-secondary text-center">
            * は必須項目です
          </p>
        </form>

        <div className="mt-20 p-8 bg-dark-surface rounded-lg border border-dark-text/10">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-4">
            <div>
              <p className="text-dark-text-secondary text-sm">Email</p>
              <a
                href="mailto:contact@digitive.jp"
                className="text-primary font-bold hover:text-primary-dark"
              >
                contact@digitive.jp
              </a>
            </div>
            <div>
              <p className="text-dark-text-secondary text-sm">大阪本社</p>
              <p className="text-dark-text">
                〒550-0005 大阪府大阪市西区西本町1丁目12−19 清友ビル901
              </p>
            </div>
            <div>
              <p className="text-dark-text-secondary text-sm">東京支社</p>
              <p className="text-dark-text">
                〒150-0045 東京都渋谷区神泉町10
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
