# Digitive Homepage - Architecture & Code Organization

## 概要

このドキュメントは、株式会社Digitiveの新ホームページの設計思想とコード構成について説明します。モダンな技術スタックを基に、保守性と拡張性を最大限に高めるために、オブジェクト指向設計原則に従い構築されています。

## コード構成の哲学

### 1. 関心の分離（Separation of Concerns）

- **Constants（定数）**: デザイントークン、カラーパレット、スペーシング、アニメーション設定
- **Styles（スタイル）**: 再利用可能なスタイルコンポーネントとユーティリティ
- **Data（データ）**: JSON ベースのコンテンツ管理とメタデータ
- **Components（コンポーネント）**: UI 要素と機能実装

このアプローチにより、各層の変更が他の層に与える影響を最小限に抑え、テストと保守が容易になります。

### 2. DRY 原則（Don't Repeat Yourself）

同じスタイルや設定を繰り返さないため、以下の仕組みを整備：

- **Design Tokens**: カラー、スペーシング、タイポグラフィを一元管理
- **Style Collections**: よく使うスタイルパターンをプリセット化
- **Configuration Objects**: ナビゲーション、メニュー、ルート設定を外部化

## ファイル構成

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # ルートレイアウト（Header, Footer）
│   ├── page.tsx                 # トップページ（改善版）
│   ├── about/
│   ├── services/
│   ├── achievements/
│   ├── members/
│   ├── apps/
│   ├── contact/
│   └── ...
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # ナビゲーションヘッダー
│   │   ├── Footer.tsx          # フッター（改善版）
│   │   └── Navigation.tsx       # ナビゲーションメニュー
│   ├── three/                   # 3D コンポーネント
│   ├── sections/               # ページセクション
│   └── ui/                     # 汎用 UI コンポーネント
│
├── lib/
│   ├── constants.ts            # ✅ NEW: デザイントークンと定数
│   ├── styles.ts               # ✅ NEW: 再利用可能なスタイル
│   ├── navigation.ts           # ✅ NEW: ナビゲーション構成
│   ├── data.ts                 # データ取得ユーティリティ
│   └── utils.ts               # その他ユーティリティ
│
├── styles/
│   └── globals.css            # グローバルスタイル
│
└── types/
    └── index.ts               # TypeScript 型定義
```

---

## 新しい設計システム詳細

### 1. `lib/constants.ts` - デザイン定数

すべてのデザイントークンを一元管理します。

**含まれる要素：**

- **COLORS**: プライマリ、セカンダリ、アクセント、ニュートラル、テキスト色
- **SPACING**: xs～4xl の 8 段階スケール（4px～64px）
- **TYPOGRAPHY**: フォントファミリー、フォントサイズ、ウェイト、行間
- **BREAKPOINTS**: モバイル、タブレット、デスクトップ、ワイドスクリーン
- **SHADOWS**: sm～2xl、glow エフェクト、カラー別グロー
- **TRANSITIONS**: fast～slower（アニメーション時間）
- **BORDER_RADIUS**: None～full（角丸）
- **CONTAINERS**: xs～maxContent（コンテナサイズ）
- **Z_INDEX**: 層の深さ管理（navigation, overlay, modal など）
- **GRADIENTS**: ブランドグラデーション
- **EASING**: アニメーション関数

**使用例：**

```typescript
import { COLORS, SPACING, SHADOWS } from '@/lib/constants'

// カラー参照
const bgColor = COLORS.primary        // #00ff88
const textColor = COLORS.textSecondary // #a0a0a0

// スペーシング参照
const padding = SPACING.lg  // 1.5rem

// シャドウ参照
const glow = SHADOWS.glowPrimary
```

### 2. `lib/styles.ts` - スタイルユーティリティ

再利用可能なスタイルパターンをオブジェクトで管理します。

**含まれるユーティリティ：**

#### Button Styles
```typescript
buttonStyles.primary        // グラデーション + ホバースケール
buttonStyles.primaryOutline // アウトラインボタン
buttonStyles.secondary      // セカンダリボタン
buttonStyles.minimal       // テキストボタン
```

#### Card Styles
```typescript
cardStyles.base    // 基本カード
cardStyles.elevated // ホバーエフェクト付き
cardStyles.neon    // ネオンボーダー + ブラー背景
```

#### Text Styles
```typescript
textStyles.h1      // h1 用スタイル
textStyles.h2      // h2 用スタイル
// ... h3～h6
textStyles.body    // 本文
textStyles.label   // ラベル
```

#### Section Styles
```typescript
sectionStyles.container       // max-w-7xl mx-auto px-6
sectionStyles.padding        // py-24
sectionStyles.spacing        // space-y-8
sectionStyles.spacingLarge   // space-y-12
```

#### Grid Styles
```typescript
gridStyles.auto2  // grid-cols-1 md:grid-cols-2
gridStyles.auto3  // grid-cols-1 md:grid-cols-3
gridStyles.auto4  // grid-cols-1 md:grid-cols-4
```

#### Component Style Collections
```typescript
componentStyles.hero.container     // ヒーロセクションコンテナ
componentStyles.featureCard       // フィーチャーカード構成
componentStyles.ctaSection       // CTA セクション構成
componentStyles.navLink          // ナビゲーションリンク
componentStyles.badge            // バッジ/タグ
componentStyles.input            // 入力フォーム
componentStyles.listItem        // リストアイテム
```

**使用例：**

```typescript
import { textStyles, cardStyles, gridStyles } from '@/lib/styles'

export function MyComponent() {
  return (
    <div className={gridStyles.auto3}>
      <div className={cardStyles.elevated}>
        <h3 className={textStyles.h4}>Title</h3>
        <p className={textStyles.body}>Description</p>
      </div>
    </div>
  )
}
```

### 3. `lib/navigation.ts` - ナビゲーション構成

すべてのナビゲーション構造を一元管理します。

**含まれる要素：**

- **mainNavigation**: ヘッダーのメインナビゲーション
- **footerNavigation**: フッターのセクション別ナビゲーション
- **breadcrumbRoutes**: パンくずナビゲーション設定
- **socialLinks**: ソーシャルメディアリンク

**使用例：**

```typescript
import { mainNavigation, footerNavigation } from '@/lib/navigation'

// ナビゲーション表示
{mainNavigation.map(item => (
  <Link key={item.href} href={item.href}>
    {item.label}
  </Link>
))}
```

---

## コンポーネント設計パターン

### パターン 1: セクションコンポーネント

```typescript
import { sectionStyles, textStyles, gridStyles } from '@/lib/styles'

function MySection() {
  return (
    <section className={`${sectionStyles.container} ${sectionStyles.padding}`}>
      <div className="text-center mb-16">
        <h2 className={textStyles.h2}>Section Title</h2>
        <p className={textStyles.body}>Description</p>
      </div>

      <div className={gridStyles.auto3}>
        {/* Content */}
      </div>
    </section>
  )
}
```

### パターン 2: カード列挙コンポーネント

```typescript
const cards = [
  {
    title: 'Card 1',
    description: 'Description 1',
    color: 'primary',
  },
  // ... more cards
]

return (
  <div className={gridStyles.auto3}>
    {cards.map((card, idx) => (
      <div key={idx} className={cardStyles.elevated}>
        <h3 className={textStyles.h4}>{card.title}</h3>
        <p className={textStyles.body}>{card.description}</p>
      </div>
    ))}
  </div>
)
```

### パターン 3: ホバーエフェクト

```typescript
import { hoverStyles } from '@/lib/styles'

<button className={`px-4 py-2 ${hoverStyles.glow} ${hoverStyles.scale}`}>
  Hover me
</button>
```

---

## 更新・保守ガイド

### カラーを変更したい場合

1. `src/lib/constants.ts` の `COLORS` オブジェクトを編集
2. 全コンポーネントが自動で反映
3. Git commit してデプロイ

**例：プライマリカラーを変更**

```typescript
// src/lib/constants.ts
export const COLORS = {
  primary: '#FF6B6B',      // 変更
  primaryDark: '#C92A2A',
  // ...
}
```

### スペーシングルールを変更したい場合

1. `src/lib/constants.ts` の `SPACING` オブジェクトを編集
2. 既存のセクション等が自動で調整される

### 新しいスタイルパターンを追加したい場合

1. `src/lib/styles.ts` に新しいオブジェクトを追加
2. 複雑な場合は `componentStyles` に配置

**例：新しいボタンスタイルを追加**

```typescript
// src/lib/styles.ts
export const buttonStyles = {
  // 既存のスタイル...
  danger: `px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all`,
}
```

### ナビゲーションを追加したい場合

1. `src/lib/navigation.ts` の `mainNavigation` または `footerNavigation` に追加
2. Header・Footer コンポーネントが自動で反映

```typescript
// src/lib/navigation.ts
export const mainNavigation: NavItem[] = [
  // 既存...
  { label: '新ページ', href: '/new-page' },
]
```

---

## オブジェクト指向のメリット

このアーキテクチャにより実現される利点：

| 利点 | 説明 |
|-----|------|
| **再利用性** | `buttonStyles.primary` をどこからでも使用可能 |
| **一貫性** | デザイントークン一元管理により全サイト統一 |
| **保守性** | 変更が一箇所で済み、全コンポーネントに反映 |
| **スケーラビリティ** | 新機能追加が容易 |
| **テスト性** | スタイル層が独立しているため単体テスト可能 |
| **ドキュメント化** | 定数を見ることで全デザイン仕様が把握可能 |

---

## Next Steps（今後の拡張）

### フェーズ 2: コンポーネントライブラリ化
- Storybook 導入
- UI コンポーネントのカタログ化

### フェーズ 3: テスト強化
- Jest + React Testing Library
- スタイルのテスト

### フェーズ 4: アクセシビリティ
- WCAG 2.1 AA 準拠確認
- 自動スクリーンリーダーテスト

---

## 参考資料

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Design Tokens](https://uxdesign.cc/design-tokens-with-css-variables-41192bb51493)
