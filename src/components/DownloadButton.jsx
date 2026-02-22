import { PDFDownloadLink } from "@react-pdf/renderer";

import ResumePdf from "./pdf/ResumePdf";

function DownloadButton({ data, lang }) {
  const fileName = `Ivan_Robles_Resume_${lang.toUpperCase()}.pdf`;

  return (
    <PDFDownloadLink
      document={<ResumePdf data={data} />}
      fileName={fileName}
      className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
    >
      {({ loading }) => (loading ? "..." : `PDF (${lang.toUpperCase()})`)}
    </PDFDownloadLink>
  );
}

export default DownloadButton;
