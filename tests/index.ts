import * as yup from "yup";

import { descriptive } from "../src";

it("Should omit field label by default", async () => {
  yup.setLocale(descriptive);

  const schema = yup.object().shape({
    foo: yup.string().required(),
    bar: yup.string().required().label("bar"),
  });

  try {
    await schema.validate(
      {
        foo: "",
        bar: "",
      },
      {
        abortEarly: false,
      }
    );

    fail("Should throw ValidationError");
  } catch (e) {
    expect(e).toBeInstanceOf(yup.ValidationError);

    const foo = (e as yup.ValidationError).inner.find((x) => x.path === "foo");
    const bar = (e as yup.ValidationError).inner.find((x) => x.path === "bar");

    expect(foo?.message).toMatch("必須です");
    expect(bar?.message).toMatch("barは必須です");
  }
});
