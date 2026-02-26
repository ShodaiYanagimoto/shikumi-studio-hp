# しくみスタジオ コーポレートサイト（LP）

## 概要
株式会社しくみスタジオのコーポレートLP。
AIとDXの力で中小企業の「しくみ」をデザインする会社。

## 技術構成
- Next.js 16（App Router）+ React 19 + TypeScript
- Tailwind CSS v4
- フォント: LINE Seed JP（日本語）+ Inter（英数字）
- 静的サイト生成（SSG）

## デプロイ
- ホスティング: Vercel（GitHub連携・自動デプロイ）
- 本番URL: https://shikumi-studio.vercel.app
- リポジトリ: https://github.com/ShodaiYanagimoto/shikumi-studio-hp.git

## ディレクトリ構成
```
hp/
├── app/               # ページ・レイアウト
│   ├── layout.tsx       ルートレイアウト（フォント設定・メタデータ）
│   ├── page.tsx         トップページ
│   ├── globals.css      グローバルCSS
│   ├── fonts/           LINE Seed JP フォントファイル
│   └── services/[id]/   サービス詳細ページ（SSG）
├── components/
│   ├── layout/          Header, Footer
│   ├── sections/        各セクションコンポーネント
│   └── ui/              汎用UIコンポーネント
├── lib/
│   └── constants.ts     会社情報・サービス・FAQ等の全データ
└── public/images/       ロゴ・プロフィール画像
```

## 開発ルール
- データや文言の変更は `lib/constants.ts` を編集する
- コンポーネントは `components/` 配下に、役割ごとのサブフォルダに配置
- 画像は `public/images/` に配置
- 外部画像はUnsplash URLを使用（constants.ts内で管理）

## 開発コマンド
```bash
npm run dev    # 開発サーバー起動（localhost:3000）
npm run build  # 本番ビルド
npm run lint   # ESLint実行
```
