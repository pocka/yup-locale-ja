import type * as yup from "yup";

// NOTE: `notType` is omitted because it's too hard to users to understand the
//       concept and what's happening. Write your own if you need that one.
export const mixed: yup.LocaleObject["mixed"] = {
  default: ({ label }) => (label ? label + "の" : "") + "値が不正です",
  required: ({ label }) => (label ? label + "は" : "") + "必須です",
  oneOf: ({ label, values }) =>
    (label ? label + "には" : "") + `以下のものが入力できます: ${values}`,
  notOneOf: ({ label, values }) =>
    (label ? label + "には" : "") + `以下のものは入力できません: ${values}`,
  // From user's perspective, defined and default is essentially same.
  defined: ({ label }) => (label ? label + "は" : "") + "必須です",
};

export const string: yup.LocaleObject["string"] = {
  length: ({ label, length }) =>
    (label ? label + "は" : "") + `${length}文字である必要があります`,
  min: ({ label, min }) =>
    (label ? label + "は" : "") + `${min}文字以上のみ入力できます`,
  max: ({ label, max }) =>
    (label ? label + "は" : "") + `${max}文字まで入力できます`,
  matches: ({ label, regex }) =>
    (label ? label + "は" : "") + `以下の形式である必要があります: ${regex}`,
  email: ({ label }) =>
    (label ? label + "は" : "") + "正しいメールアドレスではありません",
  url: ({ label }) => (label ? label + "は" : "") + "正しいURLではありません",
  uuid: ({ label }) => (label ? label + "は" : "") + "正しいUUIDではありません",
  trim: ({ label }) =>
    (label ? label + "の" : "") + "前後に空白は含められません",
  lowercase: ({ label }) =>
    (label ? label + "には" : "") + "小文字のみ入力できます",
  uppercase: ({ label }) =>
    (label ? label + "には" : "") + "大文字のみ入力できます",
};

export const number: yup.LocaleObject["number"] = {
  min: ({ label, min }) =>
    (label ? label + "には" : "") + `${min}以上の数のみ入力可能です`,
  max: ({ label, max }) =>
    (label ? label + "には" : "") + `${max}以下の数のみ入力可能です`,
  lessThan: ({ label, less }) =>
    (label ? label + "には" : "") + `${less}未満の数のみ入力可能です`,
  moreThan: ({ label, more }) =>
    (label ? label + "には" : "") + `${more}より大きい数のみ入力可能です`,
  positive: ({ label }) =>
    (label ? label + "には" : "") + "正の数のみ入力できます",
  negative: ({ label }) =>
    (label ? label + "には" : "") + "負の数のみ入力できます",
  integer: ({ label }) =>
    (label ? label + "には" : "") + "整数のみ入力可能です",
};

// To format date, use the second argument of yup.date().min/max.
export const date: yup.LocaleObject["date"] = {
  min: ({ label, min }) =>
    (label ? label + "には" : "") + `${min}以降の日付のみ入力可能です`,
  max: ({ label, max }) =>
    (label ? label + "には" : "") + `${max}以前の日付のみ入力可能です`,
};

export const object: yup.LocaleObject["object"] = {
  noUnknown: ({ label, unknown }: { label?: string; unknown?: string }) =>
    (label ? label + "には" : "") +
    "登録されていないキーは入力できません" +
    (unknown ? ": " + unknown : ""),
};

export const array: yup.LocaleObject["array"] = {
  min: ({ label, min }) => (label ? label + "は" : "") + `${min}つ以上必要です`,
  max: ({ label, max }) =>
    (label ? label + "は" : "") + `${max}つまで入力できます`,
};

/**
 * Descriptive messages.
 */
export const descriptive: yup.LocaleObject = {
  mixed,
  string,
  number,
  date,
  object,
  array,
};
