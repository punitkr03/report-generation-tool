import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Metadata() {
  const [collectionDate, setCollectionDate] = useState<Date | undefined>(
    new Date()
  );
  const [reportingDate, setReportingDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-4 w-fit">
        <div className="flex items-center gap-4 px-4">
          <Label className="min-w-fit">Patient Name</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Mr." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="mr">Mr.</SelectItem>
                <SelectItem value="ms">Ms.</SelectItem>
                <SelectItem value="mrs">Mrs.</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input placeholder="Enter patient name" />
        </div>
        <div className="flex items-center gap-4 px-4">
          <Label className="min-w-fit"> Collection Date</Label>
          <Popover>
            <PopoverTrigger>
              <Input
                placeholder="Select collection date"
                value={collectionDate?.toLocaleDateString()}
              />
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={collectionDate}
                onSelect={setCollectionDate}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-4 px-4">
          <Label className="min-w-fit">Age / Gender</Label>
          <Input placeholder="Age" type="number" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4 px-4">
          <Label className="min-w-fit">Reporting Date</Label>
          <Popover>
            <PopoverTrigger>
              <Input
                placeholder="Select collection date"
                value={reportingDate?.toLocaleDateString()}
              />
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={reportingDate}
                onSelect={setReportingDate}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-4 px-4">
          <Label className="w-[110px]">Referral</Label>
          <Input placeholder="Enter referral" type="text" />
        </div>
        <div className="flex items-center gap-4 px-4">
          <Label className="w-[95px]">Sample ID</Label>
          <Input placeholder="Enter sample ID" type="text" className="w-fit" />
        </div>
      </div>
    </>
  );
}
