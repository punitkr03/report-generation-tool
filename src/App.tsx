import TestSelection from "@/components/TestSelection";
import { Route, Routes } from "react-router-dom";
import Report from "./components/Report";
import RequireAuth from "./components/RequireAuth";
import ReportsDB from "./components/ReportsDB";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestSelection />} />
        <Route path="/report" element={<Report />} />
        <Route path="/db" element={<RequireAuth />}>
          <Route index element={<ReportsDB />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
