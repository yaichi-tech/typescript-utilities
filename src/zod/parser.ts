import { parseISO } from "date-fns";
import { type Result, err, ok } from "neverthrow";
import { type ZodSchema, z } from "zod";
import { ValidationError } from "../general/error";

/** 数字の文字列をnumberに変換するスキーマ */
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

/** ISO8601形式の文字列をDateに変換するスキーマ */
export const dateInString = z.string().transform((val) => {
  return parseISO(val);
});

/** zodで定義した型を生成する関数 */
export const createEntity =
  <T>(schema: ZodSchema<T>) =>
  (value: unknown): Result<T, ValidationError> => {
    const parsed = schema.safeParse(value);
    if (!parsed.success) {
      console.error({
        issues: parsed.error.issues,
        description: schema.description,
        value: value,
      });
      return err(new ValidationError("validation error"));
    }
    return ok(parsed.data);
  };
