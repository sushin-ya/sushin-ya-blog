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

## 環境構築

### Next.jsの立ち上げ
[ChakraUIのテンプレート](https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui)はデフォルトがTypeScript対応で、かつ最近Reactv18にも対応したみたいだった（着手時の７日前に更新あり）

そのまま使っていきましょう

```sh
npx create-next-app sushinya-blog --example with-chakra-ui with-chakra-ui-app
```

### ESLintとPrettier
[公式ドキュメント](https://nextjs.org/docs/basic-features/eslint)に習って入れていきます

```json
// pakage.json
"scripts": {
  "lint": "next lint"
}
```

```sh
yarn lint
```

strict modeを選択しました

Prettierも入れていきます

```sh
yarn add --dev eslint-config-prettier
```

```json:
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

あとになって、使ってないimport文をESLintでチェックしてほしくなったので、追加しました

```sh
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

```sh
yarn add --dev husky lint-staged
```

```sh
npx husky-init && yarn
```

```sh
// .husky/pre-commit

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint-staged
```

husky-initがいい感じにやってくれるらしい

lintstageの設定も[公式ドキュメント](https://nextjs.org/docs/basic-features/eslint#lint-staged)を見たような見てないような

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

```sh
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

```sh
npx husky add .husky/commit-msg
```

```sh
// commit-msg
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn commitmsg
```

よくわかってないですが、動いてるのでセットアップ終了です笑

## 実装
マークダウンブログという

## 困ったこと

## 最後に

## 参考
