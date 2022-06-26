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

こんにちは、はじめまして。Sushin-ya 🍣🐈 と申します（適当な名前にしすぎてちょっと恥ずかしい笑）

今回は、個人ブログを作ったことについて書こうと思います

## 個人ブログ作成の経緯

気軽にアウトプットができる場所がほしいな、と思ったので作りました

Zenn や Qiita などだと、なんとなく人の目が気になるので、個人ブログなら好きなこと書いても許されるかなと...

あと、Next.js や ChakraUI を使ってなにか作りたかったというのもあります

怠け者なのでサボらないようにしたい...この記事も書き始めるまで一日遅延しました 🤔

## 開発環境

- MacBook Pro (13-inch, 2020)
  - 業務では M1 使ってますが、私用は普通の 2020 年モデルです
- VSCode
  - かっこいいから Vim 使ってみたいけど VSCode が覇権すぎる

## 技術選定

- React/Next.js
  - どちらも好きです。深く勉強していきたいですね
- TypeScript
  - 最高ですね。型に強くなりてえ...🤪
- Chakra UI
  - 業務だと UI ライブラリは使わず、CSS Modules で素のまま書くことが多いです
  - 大昔に Bootstrap や MaterialUI(MUI になる前）は使ったことあります
- eslint
- prettier
  - 開発では必須ですね。けど設定が秘伝のタレ化しやすい気が...。Next.js は幸い色々入れてくれてるので考えなくてよいですね
- husky/lint-stage
- commit lint
  - 案件で入ってる事が多いので、一応
- dayjs
  - 日付部分の表示用
- remark/rehype
  - マークダウンに変換する
- reading-time
  - 記事を読む時間を計算してくれる
- Vercel
  - 安定のデプロイ先

## 環境構築

### Next.js の立ち上げ

[ChakraUI のテンプレート](https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui)はデフォルトが TypeScript 対応で、かつ最近 Reactv18 にも対応したみたいでラッキーでした（着手時の７日前に更新あり）

そのまま使っていきましょう

```bash
npx create-next-app sushinya-blog --example with-chakra-ui with-chakra-ui-app
```

### ESLint と Prettier

[公式ドキュメント](https://nextjs.org/docs/basic-features/eslint)に習って入れていきます

```json
// pakage.json
"scripts": {
  "lint": "next lint"
}
```

```bash
yarn lint
```

strict mode を選択しました

Prettier も入れていきます

```bash
yarn add --dev eslint-config-prettier
```

```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

あとになって、使ってない import 文を ESLint でチェックしてほしくなったので、追加しました

```bash
yarn add -D eslint-plugin-unused-imports
```

```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "plugins": ["unused-imports"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ]
  }
}
```

### husky/lint-stage

正解のやり方がよくわからないのですが、[こちらの記事](https://blog.gaji.jp/2021/12/16/8810/)を眺めたりしつつ導入

```bash
yarn add --dev husky lint-staged
```

```bash
npx husky-init && yarn
```

```bash
// .husky/pre-commit

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint-staged
```

husky-init がいい感じにやってくれるらしい

lintstage の設定も[公式ドキュメント](https://nextjs.org/docs/basic-features/eslint#lint-staged)を見たような見てないような

```js
// .lintstagedrc.js
const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
```

動いてるっぽいのでヨシ！

### commit lint

[公式](https://github.com/conventional-changelog/commitlint)と[記事](https://qiita.com/PonPon3/items/333e1f6e899576ab4195#git-commit%E6%99%82%E3%81%AB%E8%87%AA%E5%8B%95%E3%81%A7eslint%E3%81%A8stylelint%E3%82%92%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B)を参考にしつつ

```bash
yarn add --dev @commitlint/{cli,config-conventional}
```

```json
// .commitlintrc.json
{
  "extends": ["@commitlint/config-conventional"]
}
```

```json
// package.json
"scripts": {
    "commitmsg": "commitlint -e $GIT_PARAMS"
  },
```

```bash
npx husky add .husky/commit-msg
```

```bash
// commit-msg
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn commitmsg
```

よくわかってないですが、動いてるのでセットアップ終了です笑

## ChakraUI 何もわからん

MaterialUI 使ったことあるし、ノリで行けるやろと思ってたら、何もわかりませんでした

いくつかコンテンツを見て、学習しました

（本当は、一回ノリでコンポーネント作ったのですが、カオスが生まれました）

- [公式ドキュメント](https://chakra-ui.com/)
- [公式の動画コンテンツ](https://egghead.io/lessons/react-install-and-setup-chakra-ui-in-a-react-project)
- [Chakra UI の歩き方 & Tips 集](https://zenn.dev/terrierscript/books/2021-05-chakra-ui)

resetCSS 入ってるし、ダークモード対応してるし、いい感じです

ひとまず、Stack の使い方と、属性の指定の仕方がわかれば、ノリでいけそうです

## 実装

### デザイン

ブログのデザインは今回作らなかったので、いくつか参考にしました

- [Overreacted](https://overreacted.io/)
  - React コアチームのダン先生。twitter も見てます 👀
- [κeen の Happy Hacκing Blog | Lisp エイリアンの狂想曲](https://keens.github.io/)
  - ML 系の記事とか、コンパイラとか、Rust とかの方（？）
  - 昔、ちょっと Common Lisp に興味があったときにたどり着いたような気がする（未だに興味はあるけど、別に書いたことはない）
- [Craftz.dog](https://www.craftz.dog/)
  - おしゃれ。Youtube 見てます。このままコピーしたサイトつくりたい

あとは、ゴリゴリ実装！

[公式の sblog-starter-typescript](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript)でいけるやろ！と思ってました

### マークダウン変換

ここで、ハマりました。

シンプルな html を吐き出す事はできるけど、どうやって ChakraUI のコンポーネントにするんや...と頭を抱えました

[chakra-ui-markdown-renderer](https://github.com/mustaphaturhan/chakra-ui-markdown-renderer)というライブラリがあったのですが、動かん...

幸い、ブログに記事を書いている方がいたので、参考にさせていただきました

- [個人ブログをつくりました（↗ agatan blog ↗）](https://blog.agatan.dev/posts/building-by-own-blog#%E6%8A%80%E8%A1%93)
- [github](https://github.com/agatan/blog)

これで安心、と思いきや、なぜかシンタックスハイライトがうまくいかない

沼りすぎて、午前３時に uooooo😭 となってました

どこの動作がおかしいのか探ったところ、remark-prism の動作が怪しそうです

sanitize フラグが悪さしてたみたいですね

- [Not compatible with remark-html v13.0.2 and above #265](https://github.com/sergioramos/remark-prism/issues/265)

### リンク問題

リンクをクリックしたあとの遷移がやたら遅いな、と思っていたのですが、ChakraUI が提供している Link コンポーネントを使っているせいでした。

Next.js の Link でラップして、props も渡せるようにしてます

- [【Next.js + Chakra UI】どちらの Link を使えばいいの？](https://zenn.dev/micronn/articles/de136645d18f7d)
- [自分の実装](https://github.com/sushin-ya/sushin-ya-blog/blob/main/src/components/CustomLink.tsx)

### reading-time と ☕️

ダン先生のブログにある、コーヒーと reading-time の実装です

ライブラリがあるので楽ちんでした

- [実装](https://github.com/sushin-ya/sushin-ya-blog/pull/4/files)

### 初期値をダークテーマにした

しました

- [Default Theme](https://chakra-ui.com/docs/styled-system/theme#config)

## デプロイ

Vercel に以前作成したアカウントがあったので、このリポジトリを Vercel から見れるように権限設定すれば即完了でした

[公式](https://vercel.com)を参照してください

完成！！！

## 積み残し

ひとまず、１．５人日くらいで実装したので、積み残しが結構あります

あとで Issue 立てて対応しようかな

- favicon の設定
  　　- [絵文字をファビコンとして表示する簡単な方法](https://zenn.dev/catnose99/articles/3d2f439e8ed161)を参考にする
- SEO と OGP とか？よくわからん
- twitter/codepen の埋め込みコンポーネントつくる
- actions で lint チェックさせる
- コンポーネントの共通化・整理
- any にしてる型をなおす
- ドメイン取得？（ポートフォリオサイト作ったら取得しようかな）
- などなど...

## 最後に

読んだ人が再現可能なレベルで書こうと思いましたが、いかがだったでしょうか

自分の性格的に、最初から完成度の高いものを作ろうとすると、永遠に着手しないことがわかっていました

なので、スモールスタートして、ひとまず公開することを目標としました

目標達成できてよかったです 😎

デザインのことはほぼ考えず、ChakraUI に任せたので、実装に集中できたのも良かったです（カラーテーマがデフォのまま笑）

いま一点困っているのが、マークダウンの記事をどこで書くか問題です

VSCode をわざわざ立ち上げるのもなーと思い、Github 上で直接 md ファイルを作って書いています

それなりに快適なのですが、定期的に改行すると前の行がコピーされるバグ？のようなものに見舞われて、ちょっとストレスです

やっぱ VSCode で書くかな...なんとなくイヤなんですよね笑

できれば、ブログサービスみたいにブラウザで書きたいな（最初、データソースとして、Notion や microCMS も検討したんですけどね...今後の課題です）

ひとまず、完成したので大いに満足です 😎

週に一本は記事を書いていこう

今回は、Notion にコードをペタペタ貼っていたのでサクッと書けました 👋
