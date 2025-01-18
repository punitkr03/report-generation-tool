import { supabase } from "@/lib/supabase";
import React, { useCallback, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";

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
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [searchPage, setSearchPage] = React.useState(0);
  const [totalRecords, setTotalRecords] = React.useState(0);
  const navigate = useNavigate();

  const getReports = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("reportData")
      .select("*")
      .order("created_at", { ascending: false })
      .range(page * 30, (page + 1) * 30 - 1);
    if (error) {
      console.error(error);
      setLoading(false);
    }
    setReports(data as ReportData[]);
    setLoading(false);
  }, [page]);

  const searchResults = useCallback(
    async ({ searchPage, query }: { searchPage: number; query: string }) => {
      setLoading(true);
      const { data, error, count } = await supabase
        .from("reportData")
        .select("*", { count: "exact" })
        .like("patient_name", `%${query}%`)
        .range(searchPage * 30, (searchPage + 1) * 30 - 1);

      if (error) {
        console.error(error);
        setLoading(false);
      }
      if (!count || count === 0) {
        setTotalRecords(0);
      } else {
        setTotalRecords(count);
      }
      setReports(data as ReportData[]);
      setLoading(false);
    },
    []
  );

  const getReportsLength = useCallback(async () => {
    const { count, error } = await supabase.from("reportData").select("*", {
      count: "exact",
      head: true,
    });
    if (error) {
      console.error(error);
      setLoading(false);
    }
    if (!count || count === 0) {
      setTotalRecords(0);
    } else {
      setTotalRecords(count);
    }
  }, []);

  useEffect(() => {
    getReports();
  }, [getReports]);

  useEffect(() => {
    getReportsLength();
  }, [getReportsLength]);

  return (
    <>
      <Button className="absolute top-3 left-4" onClick={() => navigate("/")}>
        Back
      </Button>
      <div className="flex gap-2 items-center w-full bg-slate-700 text-white p-4 justify-center">
        <p className="font-semibold text-xl text-center">Report Database</p>
      </div>
      <div className="flex w-96 gap-2 justify-center items-center my-2 mx-auto">
        <Input
          placeholder="Search by patient name"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchPage(0);
              searchResults({ searchPage: 0, query });
            }
          }}
        />
        <Button
          onClick={() => {
            setSearchPage(0);
            searchResults({ searchPage: 0, query });
          }}
        >
          Search
        </Button>
      </div>
      <div className="px-4">
        <table className="border-2 w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 border-r border-gray-300 w-16">Sl. No.</th>
              <th className="px-4 py-2 border-r border-gray-300">
                Patient Name
              </th>
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
                    {query === ""
                      ? page * 30 + (index + 1)
                      : searchPage * 30 + (index + 1)}
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
      </div>

      {query === "" && (
        <div className="py-10 w-full flex justify-center items-center gap-5">
          <Button
            variant="outline"
            onClick={() => {
              if (searchPage !== 0) {
                setPage(0);
              }
              setPage((prev) => prev - 1);
            }}
            disabled={page <= 0}
          >
            Prev Page
          </Button>
          <p>
            Page {page + 1} of {totalRecords ? Math.ceil(totalRecords / 30) : 0}
          </p>
          <Button
            onClick={() => {
              if (searchPage !== 0) {
                setPage(0);
              }
              setPage((prev) => prev + 1);
            }}
            disabled={page + 1 === Math.ceil(totalRecords / 30)}
          >
            Next Page
          </Button>
        </div>
      )}

      {query !== "" && (
        <div className="py-10 w-full flex justify-center items-center gap-5">
          <Button
            variant="outline"
            onClick={() => {
              if (page !== 0) {
                setPage(0);
              }
              setSearchPage((prev) => prev - 1);
              searchResults({ searchPage: searchPage - 1, query });
            }}
            disabled={searchPage <= 0}
          >
            Prev Page
          </Button>
          <p>
            Page {searchPage + 1} of{" "}
            {totalRecords ? Math.ceil(totalRecords / 30) : 0}
          </p>
          <Button
            onClick={() => {
              if (page !== 0) {
                setPage(0);
              }
              setSearchPage((prev) => prev + 1);
              searchResults({ searchPage: searchPage + 1, query });
            }}
            disabled={searchPage + 1 === Math.ceil(totalRecords / 30)}
          >
            Next Page
          </Button>
        </div>
      )}
    </>
  );
}
