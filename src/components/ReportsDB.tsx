import { supabase } from "@/lib/supabase";
import React, { useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface ReportData {
  patient_name: string;
  metadata: {
    reportingDate: string;
    collectionDate: string;
  };
  data: {
    selectedTestTypes: string[];
    reportData: {
      [key: string]: string;
    };
  };
}

export default function ReportsDB() {
  const [reports, setReports] = React.useState<ReportData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  async function getReports() {
    const { data, error } = await supabase
      .from("reportData")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error(error);
      setLoading(false);
    }
    setReports(data as ReportData[]);
    setLoading(false);
  }

  useEffect(() => {
    getReports();
  }, []);
  return (
    <>
      <Button className="absolute top-3 left-4" onClick={() => navigate("/")}>
        Back
      </Button>
      <div className="flex gap-2 items-center w-full bg-slate-700 text-white p-4 justify-center">
        <p className="font-semibold text-xl text-center">Report Database</p>
      </div>
      <table className="border-2 w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 border-r border-gray-300 w-16">Sl. No.</th>
            <th className="px-4 py-2 border-r border-gray-300">Patient Name</th>
            <th className="px-4 py-2 border-r border-gray-300">
              Reporting Date
            </th>
            <th className="px-4 py-2 border-r border-gray-300">
              Collection Date
            </th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {loading && (
            <tr>
              <td colSpan={5} className="text-center py-8">
                <div className="flex justify-center items-center">
                  <MoonLoader color="#000" />
                </div>
              </td>
            </tr>
          )}
          {!reports.length && !loading && (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No reports found
              </td>
            </tr>
          )}
          {reports &&
            !loading &&
            reports.map((report, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-r text-center border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  {report.patient_name}
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  {report.metadata.reportingDate}
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  {report.metadata.collectionDate}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-black text-white p-2 px-4 rounded-lg"
                    onClick={() => {
                      localStorage.removeItem("metadata");
                      localStorage.removeItem("data");
                      localStorage.setItem(
                        "metadata",
                        JSON.stringify(report.metadata)
                      );
                      localStorage.setItem(
                        "data",
                        JSON.stringify({
                          selectedTestTypes: report.data.selectedTestTypes,
                          reportData: report.data.reportData,
                        })
                      );
                      window.open("/#/report", "_blank");
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
