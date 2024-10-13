import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { testLabels } from "@/constants/test-labels";
import { useState } from "react";
import Metadata from "./Metadata";
import Navbar from "./Navbar";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function TestSelection() {
  const [selectedTestTypes, setSelectedTestTypes] = useState<string[]>([]);
  const [reportData, setReportData] = useState({});
  console.log("selectedTestTypes", selectedTestTypes);
  console.log(reportData);
  return (
    <>
      <Navbar />
      <Metadata />
      <div className="flex items-center gap-4 px-4">
        <Label className="min-w-fit">Test Types</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-white text-black capitalize w-[745px] hover:bg-white">
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
            {testLabels.map((testType, index) => (
              <DropdownMenuCheckboxItem
                className="capitalize"
                key={index}
                onSelect={(e) => e.preventDefault()}
                checked={selectedTestTypes.includes(testType.value)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedTestTypes([
                      ...selectedTestTypes,
                      testType.value,
                    ]);
                  } else {
                    setSelectedTestTypes(
                      selectedTestTypes.filter((t) => t !== testType.value)
                    );
                  }
                }}
              >
                {testType.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {selectedTestTypes.includes("aso_titre") && (
        <div className="mx-4 mt-5 border-b-2">
          <div>
            <h1 className="text-xl font-semibold">ASO Titre</h1>
            <div className="flex items-center gap-2 my-2">
              <p className="my-auto">ASO Titre</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    aso_titre: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
      )}
      {selectedTestTypes.includes("bilirubin") && (
        <div className="mx-4 mt-5 border-b-2">
          <div>
            <h1 className="text-xl font-semibold">Bilirubin</h1>
            <div className="flex items-center gap-2 my-2">
              <p className="my-auto">Total Bilirubin</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    bilirubin: {
                      //@ts-expect-error - Sab changa-si
                      ...reportData.bilirubin,
                      total_bilirubin: e.target.value,
                    },
                  });
                }}
              />
              <p className="my-auto">Direct Bilirubin</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    bilirubin: {
                      //@ts-expect-error - Sab changa-si
                      ...reportData.bilirubin,
                      direct_bilirubin: e.target.value,
                    },
                  });
                }}
              />
              <p className="my-auto">Indirect Bilirubin</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    bilirubin: {
                      //@ts-expect-error - Sab changa-si
                      ...reportData.bilirubin,
                      indirect_bilirubin: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      )}
      {selectedTestTypes.includes("btct") && (
        <div className="mx-4 mt-5 border-b-2">
          <div>
            <h1 className="text-xl font-semibold">
              Bleeding Time and Clotting Time
            </h1>
            <div className="flex items-center gap-2 my-2">
              <p className="my-auto">Bleeding Time</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
              />
              <p className="my-auto">Clotting Time</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
              />
            </div>
          </div>
        </div>
      )}
      {selectedTestTypes.includes("blood_glucose") && (
        <div className="mx-4 mt-5 border-b-2">
          <div>
            <h1 className="text-xl font-semibold">Blood Glucose</h1>
            <div className="flex items-center gap-2 my-2">
              <p className="my-auto">Fasting Plasma Glucose</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
              />
              <p className="my-auto">Post Prandial Blood Sugar</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
              />
            </div>
          </div>
        </div>
      )}
      {selectedTestTypes.includes("blood_glucose_random") && (
        <div className="mx-4 mt-5 border-b-2">
          <div>
            <h1 className="text-xl font-semibold">
              Blood Glucose Level (Random)
            </h1>
            <div className="flex items-center gap-2 my-2">
              <p className="my-auto">Blood Glucose Random</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
              />
            </div>
          </div>
        </div>
      )}
      {selectedTestTypes.includes("blood_group") && (
        <div className="mx-4 mt-5 border-b-2">
          <div>
            <h1 className="text-xl font-semibold">Blood Group</h1>
            <div className="flex items-center gap-2 my-2">
              <p className="my-auto">ABO Grouping</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select blood group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="a">A</SelectItem>
                    <SelectItem value="ab">AB</SelectItem>
                    <SelectItem value="o">O</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p className="my-auto">RH (Factor)</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select RH Factor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="positive">POSITIVE</SelectItem>
                    <SelectItem value="negative">NEGATIVE</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
      {selectedTestTypes.includes("blood_urea") && (
        <div className="mx-4 mt-5 border-b-2">
          <div>
            <h1 className="text-xl font-semibold">Urea</h1>
            <div className="flex items-center gap-2 my-2">
              <p className="my-auto">Blood Urea</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
              />
            </div>
          </div>
        </div>
      )}
      {selectedTestTypes.includes("calcium") && (
        <div className="mx-4 mt-5 border-b-2">
          <div>
            <h1 className="text-xl font-semibold">Calcium</h1>
            <div className="flex items-center gap-2 my-2">
              <p className="my-auto">Calcium</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
              />
            </div>
          </div>
        </div>
      )}
      {selectedTestTypes.includes("cbc") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Complete Blood Count</h1>
              <div className="flex items-center gap-2 my-2">
                <p className="my-auto">Haemoglobin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
                <p className="my-auto">Total WBC count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
                <p className="my-auto">RBC Count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
                <p className="my-auto">Platelet Count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
              </div>
            </div>
          </div>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Differential Count</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto">Neutrophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Lymphocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Monocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Eosinophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Basophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">PCV (Packed Cell Volume)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">MCV (Mean Corp. Volume)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">MCHC (Mean Corp. Hb Con.)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">MCH (Mean Corp. Haemoglobin)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("cbp") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Complete Blood Picture</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto">Haemoglobin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
                <p className="my-auto">Total WBC count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
                <p className="my-auto">Neutrophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Lymphocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Monocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Eosinophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Basophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("crp") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">
                C Reactive Protein (CRP) Quantitative
              </h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto">CRP</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("creatinine_serum") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Creatinine</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto">Creatinine Serum</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("differential_count") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Differential Count</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto">Neutrophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Lymphocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Monocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Eosinophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">Basophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">PCV (Packed Cell Volume)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">MCV (Mean Corp. Volume)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">MCHC (Mean Corp. Hb Con.)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto">MCH (Mean Corp. Haemoglobin)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("electrolytes") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Electrolytes</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto">Serum Sodium</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
                <p className="my-auto">Serum Potassium</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
                <p className="my-auto">Serum Chloride</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("esr") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">
                Erythrocyte Sedimentation Rate (ESR)
              </h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto">ESR(Westergren’s)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("fasting_plasma_glucose") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Fasting Plasma Glucose</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto">Fasting Plasma Glucose</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("hcg") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">HCG</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Urine Pregnancy Card Test</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="positive">POSITIVE</SelectItem>
                      <SelectItem value="negative">NEGATIVE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("kft") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">
                KFT (Kidney Function Test)
              </h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Blood urea</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Creatinine Serum</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Uric Acid</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("lipid_profile") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Lipid Profile</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Total Cholesterol</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Triglycerides</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">HDL Cholesterol</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">LDL Cholesterol</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">VLDL Cholesterol</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("lft") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Liver Function Test</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Total Bilirubin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Direct Bilirubin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Indirect Bilirubin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">ALT (SGPT)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">AST (SGOT)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Alkaline Phosphatase</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Total Protein</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Albumin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Globulin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">A/G Ratio</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("malaria") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Malaria</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Blood smear for MP</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="positive">FOUND</SelectItem>
                      <SelectItem value="negative">NOT FOUND</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("malaria_antigen") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Malaria Antigen Test</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Plasmodium vivax</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="positive">POSITIVE</SelectItem>
                      <SelectItem value="negative">NEGATIVE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Plasmodium falciparum</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="positive">POSITIVE</SelectItem>
                      <SelectItem value="negative">NEGATIVE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("mantoux_test") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Mantoux Test</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">PPD Given On</p>
                <Popover>
                  <PopoverTrigger>
                    <Input placeholder="Select date" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
                <p className="my-auto pr-4">Reading On</p>
                <Popover>
                  <PopoverTrigger>
                    <Input placeholder="Select date" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
                <p className="my-auto pr-4">Erythema</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Induration</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">P.P.D Injected</p>
                <div className="flex items-center gap-2 col-span-3">
                  <Input
                    type="number"
                    placeholder="Enter value"
                    className="w-40"
                  />
                  TU of Purified Protein Derivative
                </div>
                <p className="my-auto pr-4">Interpretation</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="positive">POSITIVE</SelectItem>
                      <SelectItem value="negative">NEGATIVE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("platelet") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Platelet</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Platelet Count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("post_prandial_blood_sugar") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">
                Post Prandial Blood Sugar
              </h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Post Prandial Blood Sugar</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("pt_inr") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">
                Prothrombin Time (PT/INR)
              </h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Test</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Control</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">INR</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("ra_test") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">
                RA FACTOR (RHEUMATOID ARTHRITIS FACTOR)
              </h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">RA Test (Turbidimetric Method)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("semen") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Semen Analysis</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Abstinence</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Physical Examination</h1>
              <div className="flex items-center gap-2 my-2">
                <p className="my-auto pr-4">Quantity</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Colour</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Reaction</p>
                <Input placeholder="Enter value" className="w-40" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Microscopic Examination</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Sperm count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Total Motile</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Actively Motile</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Sluggishly Motile</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Non Motile</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Pus Cells</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Epithelial Cells</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">RBC</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="present">PRESENT</SelectItem>
                      <SelectItem value="absent">ABSENT</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("serology") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Serology</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">HIV (1&2): </p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="positive">POSITIVE</SelectItem>
                      <SelectItem value="negative">NEGATIVE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">HbsAg: </p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="positive">POSITIVE</SelectItem>
                      <SelectItem value="negative">NEGATIVE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">VDRL: </p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="positive">POSITIVE</SelectItem>
                      <SelectItem value="negative">NEGATIVE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">HCV</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="positive">POSITIVE</SelectItem>
                      <SelectItem value="negative">NEGATIVE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("serum_chloride") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Chloride</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Serum Chloride</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("serum_potassium") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Potassium</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Serum Potassium</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("serum_sodium") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Sodium</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Serum Sodium</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("sgot") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">SGOT</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">AST (SGOT)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("sgpt") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">SGPT</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">ALT (SGPT)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("stool") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold underline">
                STOOL ROUTINE TEST
              </h1>
              <h1 className="text-xl font-semibold">Physical Examination</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Color</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Consistency</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Parasite</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
              </div>
              <h1 className="text-xl font-semibold">Microscopic Examination</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Cysts</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Ova</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Pus cells</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">R.B.C</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Epithelial cells</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Macrophages</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("total_cholesterol") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Cholesterol</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Total Cholesterol</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("total_protein") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Protein</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Total Protein</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("triglycerides") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Triglycerides</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Triglycerides</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("urine_cs") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">
                Urine culture & sensitivity
              </h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Specimen</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Gram stain</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Organism Isolated</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
              </div>
              <h1 className="text-xl font-semibold">
                Antibiotic Susceptibility Report
              </h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Aztreonam(AT)</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Cefotaxime(CTX)</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Cefdinir(CD) </p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Ceftriaxone(CRO) </p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Cefuroxime(XM)</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Ceftazidime(CAZ)</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Cefixime(FIX) </p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Amikacin (AK)</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Nitrofurantoin(NI)</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Nalidixic acid(NA)</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Gentamicin (GM)</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Ciprofloxacin(CI)</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Norfloxacin (NOR)</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Ofloxacin (OF)</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("urine_re") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold underline">URINE R/E:-</h1>
              <h1 className="text-xl font-semibold">Physical Examination</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Color</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Appearance</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Reaction (pH)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Specific Gravity</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
              <h1 className="text-xl font-semibold">Chemical Examination</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Protein</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Glucose</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Blood</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Ketones</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
              </div>
              <h1 className="text-xl font-semibold">Microscopic Examination</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Pus cells</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
                <p className="my-auto pr-4">Epithelial cells</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">R.B.C</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Casts</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Crystals</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Others</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("uric_acid") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Uric Acid</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Uric Acid</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("widal_test") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Widal Test</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Salmonella Typhi - O</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Salmonella Typhi - H</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Salmonella Para Typhi - AH</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
                <p className="my-auto pr-4">Salmonella Para Typhi - BH</p>
                <Input type="text" placeholder="Enter value" className="w-40" />
              </div>
            </div>
          </div>
        </>
      )}

      {selectedTestTypes.length > 0 && (
        <div className="flex w-full justify-center">
          <Button
            className="bg-slate-700 text-white max-w-fit my-4"
            onClick={() => {
              localStorage.setItem(
                "data",
                JSON.stringify({
                  selectedTestTypes: selectedTestTypes,
                  reportData: reportData,
                })
              );
              window.open("/#/report", "_blank");
            }}
          >
            Generate Report
          </Button>
        </div>
      )}
    </>
  );
}
