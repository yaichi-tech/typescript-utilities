import jsPDF from "jspdf";

type Props = {
  /** PDF化対象の要素 */
  ref: React.RefObject<HTMLDivElement>;
  filename: string;
};
export const usePDF = ({ ref, filename }: Props) => {
  const savePDF = async () => {
    if (ref.current == null) {
      return;
    }
    const a4Width = 595.28;
    const a4Height = 841.89;
    const pdf = new jsPDF({
      orientation: "portrait",
      format: [a4Width, a4Height], // A4のptサイズ。このサイズでPDFが出力される
      unit: "pt",
    });
    const margin = 16;
    await pdf.html(ref.current, {
      margin,
      width: a4Width - margin * 2, // PDFに出力する幅 (pt)
      windowWidth: 1300, // 仮想的にレンダリングするときのウィンドウ幅(pt)
    });
    pdf.save(filename);
  };
  return { savePDF };
};
