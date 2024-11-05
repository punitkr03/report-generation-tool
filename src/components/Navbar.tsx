import { ClipboardList, Database } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center w-full bg-slate-700 text-white p-4">
        <div className="flex gap-2 items-center">
          <ClipboardList />
          <p className="font-semibold text-xl">Report Generation Tool</p>
        </div>
        <div>
          <Button
            className="flex items-center gap-2"
            onClick={() => {
              navigate("/db");
            }}
          >
            <Database />
            Reports Database
          </Button>
        </div>
      </div>
    </>
  );
}
