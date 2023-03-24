# yup-locale-ja

[![npm](https://img.shields.io/npm/v/yup-locale-ja)](https://www.npmjs.com/package/yup-locale-ja)
[![Automated Tests Status](https://img.shields.io/github/actions/workflow/status/pocka/yup-locale-ja/test.yml?branch=master&label=test&logo=github)](https://github.com/pocka/yup-locale-ja/actions?query=workflow%3ATest)
[![Automated Publish Status](https://img.shields.io/github/actions/workflow/status/pocka/yup-locale-ja/publish.yml?label=publish&logo=github)](https://github.com/pocka/yup-locale-ja/actions?query=workflow%3APublish)

[yup](https://github.com/jquense/yup)のエラーメッセージを日本語化するパッケージです。
スタイルの異なる 2 種類の翻訳が用意されています。

[README (English)](./README.md)

## 利用方法

```sh
$ yarn add yup yup-locale-ja

# もしくは
$ npm i yup yup-locale-ja
```

インストールしたら yup の `setLocale` 関数でメッセージを登録してください。

```js
import { setLocale } from "yup";
import * as ja from "yup-locale-ja";

setLocale(ja.suggestive);
```

yup のローカライゼーションに関しての詳細は [yup の README](https://github.com/jquense/yup#using-a-custom-locale-dictionary) を参照してください。

## 翻訳スタイル

このパッケージでは **descriptive** (記述的) と **suggestive** (提示的) の 2 種類のメッセージセットを提供しています。
**descriptive** は "~です" というように、フィールドのルールをそのまま記述する形です。
対して **suggestive** は "~してください" という形でユーザがエラーを解消するために必要なアクションを提示するようなメッセージになっています。

```js
import * as ja from "yup-locale-ja";

ja.suggestive; // suggestive (提示的)
ja.descriptive; // descriptive (記述的)
```

## ラベルの表示方法

デフォルトではエラーメッセージにフィールド名は含まれません。
含める場合は [`.label`](https://github.com/jquense/yup#mixedlabellabel-string-schema) メソッドを対象のフィールドで呼び、
フィールドにラベルを設定してください。
