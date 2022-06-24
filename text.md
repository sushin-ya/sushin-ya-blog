---
title: Hello
slug: home
---

<h1>Hello world!</h1>

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
