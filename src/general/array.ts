/** 配列をチャンクに分ける */
export const chunkArray = <T>(array: T[], size = 1): T[][] => {
  const copiedArray = [...array];
  const chunkedArray = [];

  if (size < 1) {
    throw new Error("Please choose a number greater than 0");
  }

  while (copiedArray.length > 0) {
    chunkedArray.push(copiedArray.splice(0, size));
  }

  return chunkedArray;
};

/**
 * 配列検索の最適化のために検索要素をキーとするオブジェクトを作成する。
 * @param array 変換する配列
 * @param keyProperty キーとして使用するプロパティ
 * @returns 検索性能が改善されたオブジェクト
 */
export const arrayToObject = <T, K extends keyof T>(
  array: T[], // 変換する配列
  keyProperty: K, // キーとして使用するプロパティ
): Record<string, T> => {
  return array.reduce(
    (acc, item) => {
      // キーを取得（文字列または数値に変換）
      const key = String(item[keyProperty]);
      // オブジェクトに追加
      acc[key] = item;
      return acc;
    },
    {} as Record<string, T>,
  );
};
