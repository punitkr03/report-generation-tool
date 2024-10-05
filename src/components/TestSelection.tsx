import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReferenceValuesEnum } from "@/constants/reference-values-enum";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function TestSelection() {
  const testTypes = Object.values(ReferenceValuesEnum);
  const [selectedTestTypes, setSelectedTestTypes] = useState<string[]>([]);

  return (
    <div className="flex items-center gap-4 px-4">
      <Label className="min-w-fit">Test Types</Label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-white text-black capitalize w-[650px] hover:bg-white">
            <span className="min-w-28 truncate">
              {selectedTestTypes.length !== 0
                ? selectedTestTypes.join(", ")
                : "Select Test Types"}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 max-h-80 overflow-y-auto">
          <DropdownMenuLabel>Test Types</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {testTypes.map((testType, index) => (
            <DropdownMenuCheckboxItem
              className="capitalize"
              key={index}
              onSelect={(e) => e.preventDefault()}
              checked={selectedTestTypes.includes(testType)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedTestTypes([...selectedTestTypes, testType]);
                } else {
                  setSelectedTestTypes(
                    selectedTestTypes.filter((t) => t !== testType)
                  );
                }
              }}
            >
              {testType}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button className="bg-slate-700 text-white flex gap-2">
        <Plus size={16} />
        Add
      </Button>
    </div>
  );
}
