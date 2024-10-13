import Metadata from "@/components/Metadata";
import Navbar from "@/components/Navbar";
import TestSelection from "@/components/TestSelection";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Report from "./components/Report";

function App() {
  return (
    <>
      <Navbar />
      <Metadata />
      <TestSelection />
      {/* <Report /> */}
      {/* <PDFDownloadLink document={<Report />} fileName="report.pdf">
        Lol
      </PDFDownloadLink> */}
    </>
  );
}

export default App;
