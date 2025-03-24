import { tz } from "@date-fns/tz";
import { format, parseISO } from "date-fns";

/**
 *
 * @param isoString タイムゾーン付きのISOString
 * @returns 日本時刻の年月日を取得する。
 * @example isoToJaYMD("2022-01-01T00:00:00.000Z") => { year: "2022", month: "1", day: "1" }
 * isoToJaYMD("2022-01-01T15:00:00.000Z") => { year: "2022", month: "1", day: "2" }
 */
export const isoToJaYMD = (isoString: string) => {
  const jstDate = parseISO(isoString);
  // フォーマットされた日付を作成
  const year = format(jstDate, "yyyy", { in: tz("Asia/Tokyo") });
  const month = format(jstDate, "M", { in: tz("Asia/Tokyo") });
  const day = format(jstDate, "d", { in: tz("Asia/Tokyo") });
  return {
    year,
    month,
    day,
  };
};

/** 文字列の年月日からISO形式への変換 */
export const JaYmdToIso = (year: string, month: string, day: string) =>
  `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00+09:00`;
