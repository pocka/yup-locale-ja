import type * as yup from "yup";

// NOTE: `notType` is omitted because it's too hard to users to understand the
//       concept and what's happening. Write your own if you need that one.
// NOTE: @types/yup currently missing `mixed.defined` field definition.
export const mixed: yup.MixedLocale & {
  defined: yup.MixedLocale["default"];
} = {
  default: ({ label }) => (label ? label + "の" : "") + "値が不正です",
  required: ({ label }) => (label ? label + "は" : "") + "必須です",
  oneOf: ({ label, values }) =>
    (label ? label + "には" : "") + `以下のものが入力できます: ${values}`,
  notOneOf: ({ label, values }) =>
    (label ? label + "には" : "") + `以下のものは入力できません: ${values}`,
  // From user's perspective, defined and default is essentially same.
  defined: ({ label }) => (label ? label + "は" : "") + "必須です",
};

// NOTE: @types/yup currently missing `string.uuid` field definition.
export const string: yup.StringLocale & { uuid: yup.StringLocale["email"] } = {
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

// NOTE: @types/yup currently missing `string.notEqual` field definition.
export const number: yup.NumberLocale & {
  notEqual(ctx: { notEqual: number } & Partial<yup.TestMessageParams>): any;
} = {
  min: ({ label, min }) =>
    (label ? label + "には" : "") + `${min}以上の数のみ入力可能です`,
  max: ({ label, max }) =>
    (label ? label + "には" : "") + `${max}以下の数のみ入力可能です`,
  lessThan: ({ label, less }) =>
    (label ? label + "には" : "") + `${less}未満の数のみ入力可能です`,
  moreThan: ({ label, more }) =>
    (label ? label + "には" : "") + `${more}より大きい数のみ入力可能です`,
  notEqual: ({ label, notEqual }) =>
    (label ? label + "は" : "") + `${notEqual}以外の数である必要があります`,
  positive: ({ label }) =>
    (label ? label + "には" : "") + "正の数のみ入力できます",
  negative: ({ label }) =>
    (label ? label + "には" : "") + "負の数のみ入力できます",
  integer: ({ label }) =>
    (label ? label + "には" : "") + "整数のみ入力可能です",
};

// To format date, use the second argument of yup.date().min/max.
export const date: yup.DateLocale = {
  min: ({ label, min }) =>
    (label ? label + "には" : "") + `${min}以降の日付のみ入力可能です`,
  max: ({ label, max }) =>
    (label ? label + "には" : "") + `${max}以前の日付のみ入力可能です`,
};

export const object: yup.ObjectLocale = {
  noUnknown: ({
    label,
    unknown,
  }: { unknown?: string } & Partial<yup.TestMessageParams>) =>
    (label ? label + "には" : "") +
    "登録されていないキーは入力できません" +
    (unknown ? ": " + unknown : ""),
};

export const array: yup.ArrayLocale = {
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
