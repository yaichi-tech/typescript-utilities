import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale";

/**
 *
 * @param isoString タイムゾーン付きのISOString
 * @returns 日本時刻の年月日
 */
export const isoToJaYMD = (isoString: string) => {
  const jstDate = parseISO(isoString);
  // フォーマットされた日付を作成
  const year = format(jstDate, "yyyy", { locale: ja });
  const month = format(jstDate, "MM", { locale: ja });
  const day = format(jstDate, "dd", { locale: ja });
  return {
    year,
    month,
    day,
  };
};
