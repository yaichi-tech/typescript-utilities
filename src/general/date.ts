import { TZDate } from "@date-fns/tz";

/**
 * 今日の日付を取得する。時刻が0時0分0秒になるように調整される。
 */
export const getToday = (): Date => {
  const now = new TZDate(new Date(), "Asia/Tokyo");
  const todayInJapan = new TZDate(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    0,
    0,
    0,
    "Asia/Tokyo",
  );
  return todayInJapan;
};
