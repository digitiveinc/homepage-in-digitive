import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-dark-bg">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-900 text-primary mb-4">404</h1>
        <p className="text-2xl font-bold text-dark-text mb-4">ページが見つかりません</p>
        <p className="text-lg text-dark-text-secondary mb-8">
          申し訳ありませんが、お探しのページは存在しません。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-dark transition-all"
          >
            ホームに戻る
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-dark-surface text-dark-text border border-dark-text/20 font-bold rounded-lg hover:bg-dark-surface/80 transition-all"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </main>
  )
}
