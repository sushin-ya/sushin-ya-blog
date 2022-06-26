---
title: 'ブログつくりました'
excerpt: 'Next.jsとChakraUIブログつくりました'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022-06-26T20:30:07.322Z'
author:
  name: Sushin ya
  picture: '/avatar.jpg'
ogImage:
  url: '/avatar.jpg'
---

こんにちは、はじめまして。Sushin-ya 🍣🐈 と申します（適当な名前にしすぎてちょっと恥ずかしい笑）。

今回は、個人ブログを作ったことについて書こうと思います。

## 個人ブログ作成の経緯
気軽にアウトプットができる場所がほしいな、と思ったので作りました。

ZennやQiitaなどだと、なんとなく人の目が気になるので、個人ブログなら好きなこと書いても許されるかなと...

あと、Next.jsやChakraUIを使ってなにか作りたかったというのもあります。

怠け者なのでサボらないようにしたい...この記事も書き始めるまで一日遅延しました🤔

## 開発環境
- MacBook Pro (13-inch, 2020)
  - 業務ではM1使ってますが、私用は普通の2020年モデルです
- VSCode
  - かっこいいからVim使ってみたいけどVSCodeが覇権すぎる

## 技術選定
- React/Next.js
  - どちらも好きです。深く勉強していきたいですね
- TypeScript
  - 最高ですね。型に強くなりてえ...🤪
- Chakra UI
  - 業務だとUIライブラリは使わず、CSS Modulesで素のまま書くことが多いので
  - 大昔にBootstrapやMaterialUI(MUIになる前）は使ったことあります
- eslint
- prettier
  - 開発では必須ですね。けど設定が秘伝のタレ化しやすい気が...。Next.jsは幸い色々入れてくれてるので考えなくてよいですね
- husky/lint-stage
- commit lint
  - 案件で入ってる事が多いので、一応
- dayjs
  - 日付部分の表示用
- remark/rehype
  - マークダウンに変換するやつ
- Vercel
  - 安定のデプロイ先

## 構築

### Next.jsの立ち上げ
[ChakraUIのテンプレート](https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui)はデフォルトがTypeScript対応で、かつ最近Reactv18にも対応したみたいだった（着手時の７日前に更新あり）

そのまま使っていきましょう

```sh
npx create-next-app sushinya-blog --example with-chakra-ui with-chakra-ui-app
```

### ESLintとPrettier
公式DOCS
### ESLintとPrettier

## 困ったこと

## 最後に

## 参考
