import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale";

/**
 *
 * @param isoString タイムゾーン付きのISOString
 * @returns 日本時刻の年月日
 * @example isoToJaYMD("2022-01-01T00:00:00.000Z") => { year: "2022", month: "1", day: "1" }
 */
export const isoToJaYMD = (isoString: string) => {
  const jstDate = parseISO(isoString);
  // フォーマットされた日付を作成
  const year = format(jstDate, "yyyy", { locale: ja });
  const month = format(jstDate, "M", { locale: ja });
  const day = format(jstDate, "d", { locale: ja });
  return {
    year,
    month,
    day,
  };
};

/** 文字列の年月日からISO形式への変換 */
export const JaYmdToIso = (year: string, month: string, day: string) =>
  `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00+09:00`;
