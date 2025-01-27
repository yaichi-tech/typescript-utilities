import { parseISO } from "date-fns";
import { type Result, err, ok } from "neverthrow";
import { type ZodType, z } from "zod";
import { ValidationError } from "../general/error";

export const numberInString = z.string().transform((val, ctx) => {
  const parsed = Number.parseInt(val);
  if (Number.isNaN(parsed)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Not a number",
    });

    // This is a special symbol you can use to
    // return early from the transform function.
    // It has type `never` so it does not affect the
    // inferred return type.
    return z.NEVER;
  }
  return parsed;
});

export const dateInString = z.string().transform((val) => {
  return parseISO(val);
});

/** zodで定義した型を生成する関数 */
export const createEntity =
  <T>(schema: ZodType<T>) =>
  (value: unknown): Result<T, ValidationError> => {
    const parsed = schema.safeParse(value);
    if (!parsed.success) {
      console.error(parsed.error.issues);
      return err(new ValidationError("validation error"));
    }
    return ok(parsed.data);
  };
