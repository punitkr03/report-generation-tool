import TestSelection from "@/components/TestSelection";
import { Route, Routes } from "react-router-dom";
import Report from "./components/Report";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestSelection />} />
        <Route path="/report" element={<Report data={"Hii"} />} />
      </Routes>
    </>
  );
}

export default App;
