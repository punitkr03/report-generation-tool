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

export default function Metadata({
  setMetadata,
}: {
  setMetadata: React.Dispatch<
    React.SetStateAction<{
      patientTitle: string;
    }>
  >;
}) {
  const [collectionDate, setCollectionDate] = useState<Date | undefined>(
    undefined
  );
  const [reportingDate, setReportingDate] = useState<Date | undefined>(
    undefined
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-4 w-fit">
        <div className="flex items-center gap-4 px-4">
          <Label className="min-w-fit">Patient Name</Label>
          <Select
            onValueChange={(value) => {
              setMetadata((prev) => ({ ...prev, patientTitle: value }));
            }}
          >
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
          <Input
            placeholder="Enter patient name"
            onChange={(e) => {
              setMetadata((prev) => ({ ...prev, patientName: e.target.value }));
            }}
          />
        </div>
        <div className="flex items-center gap-4 px-4">
          <Label className="min-w-fit"> Collection Date</Label>
          <Popover>
            <PopoverTrigger>
              <Input
                placeholder="Select collection date"
                value={
                  collectionDate ? collectionDate?.toLocaleDateString() : ""
                }
                readOnly
              />
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={collectionDate}
                onSelect={(value) => {
                  setCollectionDate(value);
                  setMetadata((prev) => ({ ...prev, collectionDate: value }));
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-4 px-4">
          <Label className="min-w-fit">Age / Gender</Label>
          <Input
            placeholder="Age"
            type="number"
            onChange={(e) => {
              setMetadata((prev) => ({ ...prev, age: e.target.value }));
            }}
          />
          <Select
            onValueChange={(value) => {
              setMetadata((prev) => ({
                ...prev,
                gender: value,
              }));
            }}
          >
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
                value={reportingDate ? reportingDate?.toLocaleDateString() : ""}
                readOnly
              />
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={reportingDate}
                onSelect={(value) => {
                  setReportingDate(value);
                  setMetadata((prev) => ({ ...prev, reportingDate: value }));
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-4 px-4">
          <Label className="w-[110px]">Referral</Label>
          <Input
            placeholder="Enter referral"
            type="text"
            onChange={(e) => {
              setMetadata((prev) => ({ ...prev, referral: e.target.value }));
            }}
          />
        </div>
        <div className="flex items-center gap-4 px-4">
          <Label className="w-[95px]">Sample ID</Label>
          <Input
            placeholder="Enter sample ID"
            type="text"
            className="w-fit"
            onChange={(e) => {
              setMetadata((prev) => ({ ...prev, sampleID: e.target.value }));
            }}
          />
        </div>
      </div>
    </>
  );
}
