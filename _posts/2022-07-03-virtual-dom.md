---
title: '仮想DOMについて勉強'
excerpt: '仮想DOMについての記事を読んでいく回'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022-07-03T21:15:07.322Z'
author:
  name: Sushin ya
  picture: '/avatar.jpg'
ogImage:
  url: '/avatar.jpg'
---

ブラウザのレンダリングの仕組みを読んだので、次は仮想 DOM だ、ということで

「[フロントエンド苦手意識を克服すべく、お手軽仮想 DOM を自作した](https://zenn.dev/khmory/articles/de4c2478046173)」とその関連記事を読んでいきます

## ブラウザのしくみ

その前にかんたんにブラウザのレンダリングサイクルについて復習（『Web フロントエンドハイパフォーマンスチューニング』より）

レンダリングの大まかな流れ

- Loading
  - Download
    - HTML や CSS、JavaScript や Image などをダウンロード
  - Parse
    - HTML から DOM ツリー構築、CSS ファイルから CSSOM ツリーへ変換
- Scripting
  - リソースを読み込んだあと、JavaScript 実行。レンダリングエンジン（Webkit や Blink）から JavaScript エンジン（V8 とか）に渡す。イベント発火するとここから再レンダリングする
    - 字句解析 -> トークン列
    - 構文解析 -> 抽象構文木
    - コンパイル -> 実行可能コード
    - 実行
- Rendering（レンダリングツリー構築）
  - Calculate Style
    - CSSOM ツリー内を参照して、DOM 要素に CSS のセレクタがマッチするか総当りでマッチングする
  - Layout
    - スタイルがあたった DOM 要素のレイアウト情報の計算
- Painting
  - Paint
    - レンダリングツリーをもとに、Display List と呼ばれる内部の低レベルグラフィックエンジンのための命令列を生成
  - Rasterize
    - 生成された命令をもとにビットマップ（ピクセル）に描画する。レイヤーという単位で管理されていて、z 軸の上下関係を持つ
  - Composite Layers
    - レイヤーの合成。CPU による合成と GPU による合成がある（transform3d を使うと、GPU になったりする）

## 仮想 DOM とは

DOM って「ドキュメントオブジェクトモデル」の略だったのね笑

```js
もう少し具体化すると、HTML 文書をブラウザのメモリ上に展開し、操作可能にしたもの、ということができると思います。
仮想DOMというのは、このDOMの仮想的な姿をJavaScriptのオブジェクトとして保時し、それを適時DOMに適用する仕組みを示した概念です。
```

（remark の blockquote が効いてないことに気がついたので、シンタックスハイライトで...）

仮想 DOM にすると、リアル DOM と仮想 DOM の差分を検知して、patch をあてるっていう動きになる

- 仮想 DOM を変更する
- フレームワークが仮想 DOM とリアル DOM の差分を検知(diff)し、差分をリアル DOM に適用(patch)
- ブラウザの表示が更新される

仮想 DOM で宣言的に書けるように抽象化してあげれば、開発体験としてはずっと良くなりますね（実際にどういう DOM になるべきかを考えなくてよくなるし、vanillaJS で dom 操作すると地獄なので...）

## React の仮想 DOM

元記事に参考として貼ってある部分も読んでいこう

- [仮想 DOM と内部処理](https://ja.reactjs.org/docs/faq-internals.html)

### [差分検出処理](https://ja.reactjs.org/docs/reconciliation.html)

- React のツリーの差分を馬鹿正直にやると、 O(n^3)で大変なことになる
- そこで、React は異なる型の場合や、key プロパティの有無、という前提を置くことで単純化してる

下のようにリストの上部に挿入する場合、その要素移行も再レンダリングされて効率が悪いので、key を使って差分を見る

```jsx
// bad
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

// good
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

```js
key として配列のインデックスが使用されている場合、並べ替えはコンポーネントの状態に関しても問題を起こすことがあります。コンポーネントのインスタンスは key に基づいて更新、再利用されます。インデックスが key の場合、要素の移動はインデックスの変更を伴います。結果として、非制御の入力などに対するコンポーネントの状態が混乱し、予期せぬ形で更新されてしまうことがあります。
```

そっか、key が配列のインデックスで、もとの配列に変更が入るとおかしなことになるのか

ただ、コンポーネント全体が再レンダリングの対象だと気が付かないけど...

### [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

まずは、『React ハンズオンラーニング』でざっくり理解

- DOM 更新は非同期処理であるため、完了するまでの間メインスレッドを使う他の処理は待たされることになる
- React はコンポーネントツリーに対して加えられたすべての変更を DOM に反映する必要があるため、結果的にメインスレッドはブロックされる
- React v16 から Fiber になった
  - renderer を２つのモジュールに分けた
    - reconciler（差分検出、React コアに実装）
    - renderer（描画のみ、ReactDom や React Native に実装）
  - 差分検出アルゴリズム Fiber
    - fiber という小さい単位に分割して、メインスレッドがブロックされてないか確認する
    - Fiber によって、concurrent mode では fiber の処理を並列にできる

### [React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html#elements-describe-the-tree)

ダン先生の記事。差分検知では、インスタンスを生成しているのではなく、オブジェクトを生成して差分をとってる。

そして、差分を反映するのは React 側に任せているよ、みたいな話。

個人的にはただのオブジェクトで表現されていた抽象化されているって部分がなんか衝撃だった。

### [React のレンダリング完全ガイド](https://qiita.com/hellokenta/items/6b795501a0a8921bb6b5)

「レンダリング」 は「DOM の更新」と同じものではなく、変化がわからなくてもレンダリングされることがある

正しいメモ化の使い方や Context についても書かれている記事。

### [React lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

そうそう、こういうのが欲しかったのよ

### [React 自作](https://zenn.dev/akatsuki/articles/a2cbd26488fa151b828b)

これやれば全部良かったのではと思った。今度やる。

## 仮想 DOM を実装する

元記事を読めばいいけど、手順としては、下記が実装されれば OK。

この記事で attributes にしている部分は、React でいうところの key にあたるのかな？

- 仮想 DOM で宣言した内容をリアル DOM に描画する(render)
- リアル DOM と仮想 DOM の差分を検出する(diff)
- 検出した差分をリアル DOM に反映する(patch)
- 適切なタイミングで diff/patch を作動させる

## 感想

元記事を読むだけの記事にしようと思ってたのだけど、周辺の記事を読み漁った結果ものすごく尻すぼみになってしまった。

それはそれで楽しかったのでヨシ。

React 公式 Doc をもっと読まんとなと思いました。

Built your own React もやらないと 👋
