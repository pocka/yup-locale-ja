# yup-locale-ja

[![npm](https://img.shields.io/npm/v/yup-locale-ja)](https://www.npmjs.com/package/yup-locale-ja)
[![Automated Tests Status](https://img.shields.io/github/actions/workflow/status/pocka/yup-locale-ja/test.yml?branch=master&label=test&logo=github)](https://github.com/pocka/yup-locale-ja/actions?query=workflow%3ATest)
[![Automated Publish Status](https://img.shields.io/github/actions/workflow/status/pocka/yup-locale-ja/publish.yml?label=publish&logo=github)](https://github.com/pocka/yup-locale-ja/actions?query=workflow%3APublish)

Japanese localization for [yup](https://github.com/jquense/yup) messages, with translation flavors.

[README (日本語)](./README_ja.md)

## Getting Started

```sh
$ yarn add yup yup-locale-ja

# or...
$ npm i yup yup-locale-ja
```

then, set a locale object as yup's default message dictionary with `setLocale` function.

```js
import { setLocale } from "yup";
import * as ja from "yup-locale-ja";

setLocale(ja.suggestive);
```

For more info, see [yup's README](https://github.com/jquense/yup#using-a-custom-locale-dictionary).

## Translation Flavors

This package comes with two flavors: **descriptive** and **suggestive**.
**descriptive** is such like "~です" ("... is ...") form, which simply describe the field's attribute.
In contrast, **suggestive** messages show a user an action to fix the error, such as "~してください" ("Please do ...").

```js
import * as ja from "yup-locale-ja";

ja.suggestive; // suggestive messages
ja.descriptive; // descriptive messages
```

## How to show a field label?

Add a label by calling [`.label`](https://github.com/jquense/yup#mixedlabellabel-string-schema) method on the field.
This package omits a field path unless a label is set.

## Similar Projects

- [loicmahieu/yup-locales](https://github.com/loicmahieu/yup-locales) ... `fr`, `nl`, `nb`, `de`, `ar`
- [arfurlaneto/yup-locale-pt](https://github.com/arfurlaneto/yup-locale-pt) ... `pt` with three translation flavors
