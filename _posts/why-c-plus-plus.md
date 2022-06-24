---
title: 'C++ : なぜテンプレートが必要なのか'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2016-05-30T14:46:47.000Z'
author:
  name: Joe Haddad
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

こんにちは。

ちょっと C++ への熱を冷まさないために、C++ のテンプレートについてまとめてみたいと思います。

## 対象

- C++ のテンプレートが怖い人
- C++ のコンパイルエラーメッセージが怖い人
- C++ の規格とブログポストを比較して誤りを探したい人(もし誤っていたら教えて下さい...)

## テンプレートとは

> プログラミングにおけるテンプレートは、静的型付けの C++でデータ型にとらわれずにコードを書くことを可能にする機能であり、C++においてはジェネリックプログラミングに用いられる。
>
> [テンプレート (プログラミング) - Wikipedia](<https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)>)より

他の静的型付きなプログラミング言語をすでに知っている場合は，すんなり入りやすいかもしれません。

Java や Scala, C# でいうところのジェネリクスに近い存在です。

OCaml や Haskell だと多相とか。

雑に表現するならば、リストとか連想配列のように内部のデータ型に依らないデータ構造を、静的型のもとにどうやったらうまく表現できるかな、に対する解の一つです。

### 例

では一つの例として、スタックというデータ構造をプログラムに落としこむことを考えます。

まずは `int` 型のスタックを定義してみます。

```
#define MAX\_ELEM 10

class int\_stack {
public:
  int\_stack() : data(), n() {}

  void push(int x) {
    if (n >= MAX\_ELEM) {
      throw "stack is full!!";
    }
    data[n++] = x;
  }

  int pop() {
    if (n < 0) {
      throw "stack is empty!!";
    }
    return data[--n];
  }
private:
  int data[MAX\_ELEM];
  int n;
};

```

簡単のため、かなりお粗末なスタックですが、最低限のスタックとしての見た目はしていると思います。

では次に、`std::string` 型のスタックや `double` 型のスタックを作りたいとなったらどうすればよいでしょうか。

コピーして `int` を置換しますか？あまり褒められた方法ではなさそうです。

#### C でのアプローチの一つ

C 言語の場合、このような問題に対しては `void*` というアプローチがあります。

`void*` は java でいう `Object` のように扱われます。

```
#define MAX\_ELEM 10

struct stack {
  void *data[MAX\_ELEM];
  int n;
};

void push(stack *s, void *elem) {
  ....
}

void *pop(stack *s) {
  ....
}

/* Usage */
stack *s = new\_stack();
int *x = (int*)malloc(sizeof(int));
*x = 1;
push(s, (void*)x);
int *y = (int*)pop(s);
printf("%d\n" *y); /* => 1 */

```

こんな感じでしょうか。実装の細かい部分は省略しています。

`push` の際にはあらゆるポインタを `void*` にキャストし、逆に `pop` する際には `void*` を求める型にキャストしています。

ジェネリクスのなかった頃の java は、これを `Object` へのキャスト・`Object` からのキャストとして表現していました。

##### void\* のデメリット

`void*` を使う場合のデメリットは、型システムを台無しにしている点です。(`malloc` や `free` が必要であることは C 言語特有の問題なのでスルー)

つまり、`int` のスタックから `pop` してきたとき、`int*` に正しくキャストを行う責任はプログラマにあり、コンパイラは何も手助けをしてくれないということです。

したがって、 `int` スタックに `double` の値を `push` したり、 `double` スタックから `char*` を `pop` したりというミスが簡単に引き起こされてしまうということです。

#### そこでテンプレート

では C++ ではどのようなアプローチを取るかというと、テンプレートを使います。

今回は型に関するテンプレートの話しかしないので、java のジェネリクスも大体同じ話だと思って構わないと思います。(実行時の表現やコンパイラの動きなどの違いはあるが、対象としている問題は同じ)

さきほどの `int_stack` の実装では、要素型が `int` に固定化されてしまっているのが問題でした。

そこで、テンプレートでは、型を抽象化し、ある種の引数のように扱っています。

```
template <typename T>
class stack {
public:
  stack() : data(), n() {}

  void push(T x) {
    if (n >= MAX\_ELEM) {
      throw "stack is full!!";
    }
    data[n++] = x;
  }

  T pop() {
    if (n < 0) {
      throw "stack is empty!!";
    }
    return data[--n];
  }
private:
  T data[MAX\_ELEM];
  int n;
};

```

先頭の `template <typename T>` (`template <class T>` でも可)は、型引数の導入の役割を果たしています。

`stack` クラスの定義内に登場する `T` は型引数として導入された型を表します。

利用する際には、`stack<int>` とか `stack<std::string>` とか、型を `stack` に渡してあげれば OK です。

```
stack<int> int\_stack;
int\_stack.push(1);
int\_stack.push(2);
int x = int\_stack.pop();
int\_stack.push("abc"); // => Compile error!

stack<std::string> str\_stack;
str\_stack.push("abc");
str\_stack.push(1); // => Compile error!

```

このように、同じコードをコピペすることなく、複数の型に対応したスタックという汎用的なデータ構造を表現することが出来ています。

さらに、この方法では、`void*` や `Object` と異なり、型的に誤った使用方法をしようとするとコンパイルエラーになるというメリットがあります。

ランタイムエラーよりコンパイルエラーのほうがデバッグしやすいし発見しやすいですよね。

## 一旦まとめ

というわけで今回はテンプレートがなぜ便利かという話のほんのさわりの部分について書いてみました。

次はテンプレートやジェネリクスの実現方法、ランタイムにおける表現方法などについて書いてみます。

そこからはテンプレート引数として値をとる話や、TMP についても触れていければと思っています。

---

---
