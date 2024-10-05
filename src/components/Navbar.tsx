import { ClipboardList } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="flex gap-2 items-center w-full bg-slate-700 text-white p-4">
        <ClipboardList />
        <p className="font-semibold text-xl">Report Generation Tool</p>
      </div>
    </>
  );
}
