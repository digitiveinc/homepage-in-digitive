'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-dark-bg">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-900 text-primary mb-4">エラー</h1>
        <p className="text-xl text-dark-text-secondary mb-8">
          申し訳ありませんが、予期しないエラーが発生しました。
        </p>
        {error.message && (
          <p className="text-sm text-dark-text-secondary mb-8 p-4 bg-dark-surface rounded-lg border border-dark-text/10">
            {error.message}
          </p>
        )}
        {error.digest && (
          <p className="text-xs text-dark-text-secondary/50 mb-8">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-dark transition-all"
          >
            再試行
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-dark-surface text-dark-text border border-dark-text/20 font-bold rounded-lg hover:bg-dark-surface/80 transition-all"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
