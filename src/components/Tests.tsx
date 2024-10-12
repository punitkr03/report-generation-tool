import { Input } from "./ui/input";

export default function Calcium() {
  return (
    <div>
      <h1 className="text-xl font-semibold">Calcium</h1>
      <div className="flex items-center gap-2 my-2">
        <p className="my-auto">Calcium</p>
        <Input type="number" placeholder="Enter value" className="max-w-40" />
      </div>
    </div>
  );
}
