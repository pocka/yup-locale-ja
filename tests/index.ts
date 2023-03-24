import * as yup from "yup";
import { it, expect } from "vitest";

import { descriptive } from "../src";

it("Should omit field label by default", async () => {
  yup.setLocale(descriptive);

  const schema = yup.object().shape({
    foo: yup.string().required(),
    bar: yup.string().required().label("bar"),
  });

  const promise = schema.validate({ foo: "", bar: "" }, { abortEarly: false });

  await expect(promise).rejects.toThrow(yup.ValidationError);

  const errors: yup.ValidationError = await promise.then(
    () => Promise.reject(new Error("Unreachable")),
    (err) => Promise.resolve(err)
  );

  const foo = errors.inner.find((x) => x.path === "foo");
  const bar = errors.inner.find((x) => x.path === "bar");

  expect(foo?.message).toEqual("必須です");
  expect(bar?.message).toEqual("barは必須です");
});
