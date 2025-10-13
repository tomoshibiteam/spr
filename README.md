# TOMOSHIBI Inc. 公式サイト

![TOMOSHIBI](https://img.shields.io/badge/TOMOSHIBI-Official%20Site-d6b87a)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4)

🔥 **社会の闇に、灯火をともす。**

TOMOSHIBI Inc.の公式企業サイトです。

## 🕯️ 概要

TOMOSHIBI Inc.は、社会課題解決型エンターテインメント（SIE）を通じて、楽しみながら社会を変える新しい文化を創造する企業です。
本サイトは、会社の理念・事業（SPR探偵事務所）・ビジョン・チームを紹介する企業ブランディングサイトです。

## ✨ ブランドデザインの特徴

### 🎨 デザインコンセプト
「鍵穴の中の静かな炎」— ブランドロゴの世界観をそのままWebデザインに。

- **静寂の中の力強さ**: 余白を多く取り、視線が「灯火」に集まる構成
- **温もりと希望**: 柔らかなベージュと金色のグラデーション
- **洗練されたミニマリズム**: 無駄のない、極めてシンプルなデザイン
- **光の演出**: 灯火が点くアニメーション、鍵穴モチーフ、光の帯

### 🌈 カラーパレット
- **背景**: `#FAF7F2` (柔らかい生成ベージュ)
- **テキスト**: `#3A2C1A` (深ブラウン)
- **アクセント**: `#D6B87A` (金の灯火)
- **サブカラー**: `#EAE6DE` (淡いグレー)

### 🎭 インタラクティブ機能
- **灯火の点灯**: Heroセクションでの静かな輝き
- **呼吸するような動き**: 微細な拡大縮小アニメーション
- **光のグロー効果**: ホバー時の金色の輝き
- **フェードイン**: ぼかしを伴う繊細な登場演出
- **マウス追従光**: カーソルに追従する金色の光エフェクト
- **浮遊パーティクル**: 画面を舞う光の粒子
- **スクロール進行バー**: 金色のプログレスバー
- **3Dカード変形**: ホバー時の浮き上がり効果
- **パララックス効果**: スクロール時の奥行き感

## 🛠️ 技術スタック

- **モダンなフレームワーク**: Next.js 14.2 (App Router)
- **型安全**: TypeScript 5.5
- **洗練されたスタイリング**: Tailwind CSS 3.4
- **繊細なアニメーション**: Framer Motion 11.3
- **SEO最適化**: メタデータAPI
- **静的生成**: Vercel対応

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 14.2 (App Router)
- **言語**: TypeScript 5.5
- **スタイリング**: Tailwind CSS 3.4
- **アニメーション**: Framer Motion 11.3
- **デプロイ**: Vercel

## 📂 ディレクトリ構成

```
TOMOSHIBI/
├── app/                      # Next.js App Router
│   ├── page.tsx             # トップページ
│   ├── layout.tsx           # ルートレイアウト
│   ├── globals.css          # グローバルスタイル
│   ├── mission/             # ミッションページ
│   ├── projects/            # プロジェクト一覧
│   │   └── spr/            # SPR探偵事務所ページ
│   ├── vision/              # ビジョンページ
│   ├── about/               # 会社概要ページ
│   ├── news/                # ニュース一覧
│   ├── contact/             # お問い合わせ
│   ├── privacy/             # プライバシーポリシー
│   └── terms/               # 利用規約
├── components/              # 共通コンポーネント
│   ├── Header.tsx          # ヘッダー（灯火アイコン付き）
│   ├── Footer.tsx          # フッター
│   ├── Section.tsx         # セクションラッパー
│   ├── Button.tsx          # ボタンコンポーネント
│   ├── Card.tsx            # カードコンポーネント
│   ├── MotionWrapper.tsx   # アニメーションラッパー
│   ├── FlameParticles.tsx  # 浮遊する光の粒子
│   ├── MouseFollowLight.tsx # マウス追従光エフェクト
│   ├── ScrollProgress.tsx  # スクロール進行バー
│   ├── InteractiveCard.tsx # 3D変形カード
│   └── ParallaxSection.tsx # パララックス効果
├── public/                  # 静的ファイル
├── tailwind.config.ts      # Tailwind設定
├── tsconfig.json           # TypeScript設定
└── package.json            # 依存関係
```

## 🎨 デザインシステム

### カラーパレット

- **ベージュ**: `#FAF7F2` / `#F9F5EE` (背景)
- **深ブラウン**: `#3A2C1A` (テキスト)
- **ゴールド**: `#D6B87A` (アクセント・灯火)
- **淡いグレー**: `#EAE6DE` (サブカラー)

### フォント

- **タイトル**: Noto Serif JP / Playfair Display
- **本文**: Noto Sans JP / Inter
- **字間**: 0.03em (本文) / 0.05em (見出し)

### UI要素

- **角丸**: 8-12px (柔らかな印象)
- **シャドウ**: ソフトシャドウ + グローエフェクト
- **余白**: 広めの padding/margin
- **アニメーション**: 繊細で落ち着いた動き

## 🚀 セットアップ

### 必要環境

- Node.js 18.x以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/tomoshibi-official.git
cd tomoshibi-official

# 依存関係をインストール
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3001](http://localhost:3001) を開きます。

### ビルド

```bash
npm run build
# または
yarn build
```

### プレビュー

```bash
npm run start
# または
yarn start
```

## 📄 ページ構成

- **/** - トップページ（Hero + 各セクションのピックアップ）
- **/mission** - 私たちの使命・理念
- **/projects** - 事業紹介
- **/projects/spr** - SPR探偵事務所の詳細
- **/vision** - 未来への展望・成長フェーズ
- **/about** - 創業ストーリー・チーム紹介
- **/news** - お知らせ・ブログ
- **/contact** - お問い合わせフォーム
- **/privacy** - プライバシーポリシー
- **/terms** - 利用規約

## 🌐 デプロイ

### Vercelへのデプロイ

1. Vercelアカウントを作成
2. リポジトリをGitHubにプッシュ
3. Vercelでプロジェクトをインポート
4. 自動デプロイが開始されます

### 環境変数

`.env.local`ファイルに以下を設定してください：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=TOMOSHIBI Inc.
```

## 📝 カスタマイズ

### 色の変更

`tailwind.config.ts`で色を変更できます：

```typescript
colors: {
  'tomoshibi-beige': '#f8f5f0',
  'tomoshibi-brown': '#3a2c1a',
  'tomoshibi-gold': '#d6b87a',
}
```

### コンテンツの編集

各ページのコンテンツは`app/`ディレクトリ内の対応するファイルで編集できます。

## 🎯 インタラクティブ機能の詳細

### 🖱️ マウス追従光エフェクト
カーソルの周りに金色の光が広がり、サイト全体に温もりを感じさせます（デスクトップのみ）。

### ✨ 浮遊パーティクル
画面全体に15個の光の粒子がゆっくりと浮遊し、静かな動きを演出します。

### 📊 スクロール進行バー
ページ最上部に金色のプログレスバーが表示され、読み進めた距離が視覚的に分かります。

### 🎴 3Dカード変形
カードにマウスを乗せると、3D空間で傾き、立体的な浮き上がり効果を実現します。

### 🌄 パララックス効果
スクロール時に要素が異なる速度で動き、奥行き感のある体験を提供します。

## 🔗 関連リンク

- [SPR探偵事務所サイト](https://spr-tomoshibi.vercel.app/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📧 お問い合わせ

ご質問やご意見は、[お問い合わせフォーム](/contact)からお気軽にどうぞ。

---

© 2024 TOMOSHIBI Inc. All rights reserved.

