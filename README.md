# 株式会社Digitive 新ホームページ

最先端のDX・AI・クリエイティブを提供する株式会社Digitiveの完全にリニューアルされたホームページです。

## 特徴

- **モダンな技術スタック**: Next.js 14、React 18、Three.js による最先端の実装
- **3D演出**: インパクトのあるパーティクルアニメーション、浮遊するジオメトリ、インタラクティブなエフェクト
- **ダークテーマ + ネオンカラー**: サイバーパンク風の最新デザイン（#00ff88, #ff0080, #00d4ff）
- **高速・軽量**: 最適化されたビルド、60fps対応のアニメーション
- **完全レスポンシブ**: モバイル・タブレット・PCすべてに対応
- **保守性重視**: JSONベースのコンテンツ管理で簡単更新
- **SEO対応**: メタデータ、構造化データ、OGPにしっかり対応

## プロジェクト構造

```
src/
├── app/                      # Next.js App Router
│   ├── page.tsx             # トップページ（3Dヒーロー付き）
│   ├── about/               # 会社概要
│   ├── services/            # サービス一覧・詳細
│   ├── achievements/        # 実績一覧・詳細
│   ├── members/             # メンバー一覧・詳細
│   ├── apps/                # アプリプラットフォーム・詳細
│   ├── contact/             # お問い合わせフォーム
│   └── layout.tsx           # ルートレイアウト
├── components/
│   ├── three/               # 3Dコンポーネント
│   │   ├── ParticleField.tsx    # パーティクルアニメーション
│   │   ├── BackgroundGeometry.tsx # 背景3D図形
│   │   └── InteractiveCard.tsx   # インタラクティブカード
│   ├── layout/              # ヘッダー・フッター・ナビゲーション
│   └── sections/            # ページセクション
├── lib/
│   └── data.ts              # JSONファイルの読み込み関数
├── types/
│   └── index.ts             # TypeScript型定義
└── styles/
    └── globals.css          # グローバルスタイル

data/                         # コンテンツデータ（JSON形式）
├── company.json             # 会社情報
├── members.json             # メンバー情報
├── achievements.json        # 実績情報
├── services.json            # サービス情報
└── apps.json               # アプリ情報
```

## ページ一覧

- **トップページ** (`/`) - 3Dパーティクル背景のヒーロー＋サービス紹介＋CTA
- **会社概要** (`/about`) - 理念、ビジョン、コアバリュー、企業情報
- **サービス** (`/services`) - 3つのサービス紹介と詳細ページ
- **実績** (`/achievements`) - 過去の実績一覧（6件）と詳細ページ
- **メンバー** (`/members`) - チーム紹介（6名）と詳細プロフィール
- **アプリプラットフォーム** (`/apps`) - 開発したアプリの紹介（3件）、カテゴリフィルタ付き
- **お問い合わせ** (`/contact`) - コンタクトフォーム

合計：**31ページ**（すべてSSG/静的生成）

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ブラウザで開く
# http://localhost:3000
```

## ビルド

```bash
# プロダクションビルド
npm run build

# 本番環境で実行
npm start
```

## コンテンツの更新方法

### 実績を追加する
1. `data/achievements.json` に新規エントリを追加
2. `public/images/achievements/` に画像を配置
3. `git commit & push` → 自動デプロイ

### メンバーを追加する
1. `data/members.json` に新規メンバーを追加
2. `public/images/members/` に写真を配置
3. `git commit & push` → 自動デプロイ

### アプリを追加する
1. `data/apps.json` に新規アプリを追加
2. `public/images/apps/` にアイコン・スクリーンショット配置
3. `git commit & push` → 自動デプロイ

### サービス情報を変更する
1. `data/services.json` を編集
2. `git commit & push` → 自動デプロイ

## 技術仕様

- **フロントエンド**: React 18, Next.js 14 (App Router)
- **型安全**: TypeScript
- **スタイリング**: Tailwind CSS + グローバルCSS
- **3Dグラフィックス**: Three.js + React Three Fiber
- **ホスティング**: Vercel（推奨）
- **パフォーマンス**: Lighthouse 90+を目指す

## デザインシステム

### カラーパレット
- **Primary**: #00ff88 (ネオングリーン)
- **Secondary**: #ff0080 (ネオンピンク)
- **Accent**: #00d4ff (サイバーブルー)
- **Background**: #0a0a0a (ダークブラック)
- **Surface**: #1a1a1a (暗いグレー)

### タイポグラフィ
- **見出し**: Inter + Noto Sans JP (Bold, 900)
- **本文**: Inter + Noto Sans JP (Regular, 400-600)
- **コード**: Fira Code

## デプロイ

Vercelへのデプロイ方法：

```bash
# Vercelアカウントにログイン
npm install -g vercel
vercel login

# デプロイ
vercel

# または GitHub リポジトリを Vercel に接続して自動デプロイ
```

## 今後の拡張予定

- [ ] お問い合わせフォームのバックエンド実装
- [ ] ブログ機能の追加
- [ ] Framer Motion でのアニメーション強化
- [ ] GSAP ScrollTrigger での高度なスクロール演出
- [ ] 多言語対応（英語など）
- [ ] Google Analytics/Tag Manager の統合
- [ ] E2E テストの追加

## ライセンス

株式会社Digitive - All Rights Reserved

## サポート

質問や提案がある場合は、GitHub Issues でお知らせください。
