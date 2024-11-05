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
import { supabase } from "@/lib/supabase";

export default function TestSelection() {
  const [selectedTestTypes, setSelectedTestTypes] = useState<string[]>([]);
  const [reportData, setReportData] = useState({});
  const [ppdGivenDate, setPpdGivenDate] = useState<Date | undefined>(undefined);
  const [ppdReadDate, setPpdReadDate] = useState<Date | undefined>(undefined);
  const [metadata, setMetadata] = useState({
    patientTitle: "Mr",
    patientName: "",
  });
  return (
    <>
      <Navbar />
      <Metadata setMetadata={setMetadata} />
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
                type="text"
                placeholder="Enter value"
                className="max-w-40"
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    btct: {
                      //@ts-expect-error - Sab changa-si
                      ...reportData.btct,
                      bleeding_time: e.target.value,
                    },
                  });
                }}
              />
              <p className="my-auto">Clotting Time</p>
              <Input
                type="text"
                placeholder="Enter value"
                className="max-w-40"
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    btct: {
                      //@ts-expect-error - Sab changa-si
                      ...reportData.btct,
                      clotting_time: e.target.value,
                    },
                  });
                }}
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
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    blood_glucose: {
                      //@ts-expect-error - Sab changa-si
                      ...reportData.blood_glucose,
                      fasting_plasma_glucose: e.target.value,
                    },
                  });
                }}
              />
              <p className="my-auto">Post Prandial Blood Sugar</p>
              <Input
                type="number"
                placeholder="Enter value"
                className="max-w-40"
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    blood_glucose: {
                      //@ts-expect-error - Sab changa-si
                      ...reportData.blood_glucose,
                      post_prandial_blood_sugar: e.target.value,
                    },
                  });
                }}
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
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    blood_glucose_random: e.target.value,
                  });
                }}
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
              <Select
                onValueChange={(value) => {
                  setReportData({
                    ...reportData,
                    blood_group: {
                      //@ts-expect-error - Sab changa-si
                      ...reportData.blood_group,
                      abo_grouping: value,
                    },
                  });
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select blood group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="a">A</SelectItem>
                    <SelectItem value="b">B</SelectItem>
                    <SelectItem value="ab">AB</SelectItem>
                    <SelectItem value="o">O</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p className="my-auto">RH (Factor)</p>
              <Select
                onValueChange={(value) => {
                  setReportData({
                    ...reportData,
                    blood_group: {
                      //@ts-expect-error - Sab changa-si
                      ...reportData.blood_group,
                      rh_factor: value,
                    },
                  });
                }}
              >
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
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    blood_urea: e.target.value,
                  });
                }}
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
                onChange={(e) => {
                  setReportData({
                    ...reportData,
                    calcium: e.target.value,
                  });
                }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        haemoglobin: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Total WBC count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        total_wbc_count: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">RBC Count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        rbc_count: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Platelet Count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        platelet_count: e.target.value,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        differential_count: {
                          //@ts-expect-error - Sab changa-si
                          ...reportData.cbc.differential_count,
                          neutrophils: e.target.value,
                        },
                      },
                    });
                  }}
                />
                <p className="my-auto">Lymphocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        differential_count: {
                          //@ts-expect-error - Sab changa-si
                          ...reportData.cbc.differential_count,
                          lymphocytes: e.target.value,
                        },
                      },
                    });
                  }}
                />
                <p className="my-auto">Monocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        differential_count: {
                          //@ts-expect-error - Sab changa-si
                          ...reportData.cbc.differential_count,
                          monocytes: e.target.value,
                        },
                      },
                    });
                  }}
                />
                <p className="my-auto">Eosinophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        differential_count: {
                          //@ts-expect-error - Sab changa-si
                          ...reportData.cbc.differential_count,
                          eosinophils: e.target.value,
                        },
                      },
                    });
                  }}
                />
                <p className="my-auto">Basophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        differential_count: {
                          //@ts-expect-error - Sab changa-si
                          ...reportData.cbc.differential_count,
                          basophils: e.target.value,
                        },
                      },
                    });
                  }}
                />
                <p className="my-auto">PCV (Packed Cell Volume)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbc: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbc,
                        differential_count: {
                          //@ts-expect-error - Sab changa-si
                          ...reportData.cbc.differential_count,
                          pcv: e.target.value,
                        },
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbp: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbp,
                        haemoglobin: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Total WBC count</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbp: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbp,
                        total_wbc_count: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Neutrophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbp: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbp,
                        neutrophils: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Lymphocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbp: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbp,
                        lymphocytes: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Monocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbp: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbp,
                        monocytes: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Eosinophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbp: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbp,
                        eosinophils: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Basophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      cbp: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.cbp,
                        basophils: e.target.value,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      crp: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      creatinine_serum: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      differential_count: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.differential_count,
                        neutrophils: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Lymphocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      differential_count: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.differential_count,
                        lymphocytes: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Monocytes</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      differential_count: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.differential_count,
                        monocytes: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Eosinophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      differential_count: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.differential_count,
                        eosinophils: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Basophils</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      differential_count: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.differential_count,
                        basophils: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">PCV (Packed Cell Volume)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      differential_count: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.differential_count,
                        pcv: e.target.value,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      electrolytes: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.electrolytes,
                        serum_sodium: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Serum Potassium</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      electrolytes: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.electrolytes,
                        serum_potassium: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto">Serum Chloride</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="max-w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      electrolytes: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.electrolytes,
                        serum_chloride: e.target.value,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      esr: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      fasting_plasma_glucose: e.target.value,
                    });
                  }}
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      hcg: value,
                    });
                  }}
                >
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      kft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.kft,
                        blood_urea: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Creatinine Serum</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      kft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.kft,
                        creatinine_serum: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Uric Acid</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      kft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.kft,
                        uric_acid: e.target.value,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lipid_profile: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lipid_profile,
                        total_cholesterol: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Triglycerides</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lipid_profile: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lipid_profile,
                        triglycerides: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">HDL Cholesterol</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lipid_profile: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lipid_profile,
                        hdl_cholesterol: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">LDL Cholesterol</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lipid_profile: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lipid_profile,
                        ldl_cholesterol: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">VLDL Cholesterol</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lipid_profile: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lipid_profile,
                        vldl_cholesterol: e.target.value,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        total_bilirubin: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Direct Bilirubin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        direct_bilirubin: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Indirect Bilirubin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        indirect_bilirubin: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">ALT (SGPT)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        alt_sgpt: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">AST (SGOT)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        ast_sgot: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Alkaline Phosphatase</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        alkaline_phosphatase: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Total Protein</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        total_protein: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Albumin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        albumin: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Globulin</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        globulin: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">A/G Ratio</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      lft: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.lft,
                        a_g_ratio: e.target.value,
                      },
                    });
                  }}
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      malaria: value,
                    });
                  }}
                >
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      malaria_antigen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.malaria_antigen,
                        plasmodium_vivax: value,
                      },
                    });
                  }}
                >
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      malaria_antigen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.malaria_antigen,
                        plasmodium_falciparum: value,
                      },
                    });
                  }}
                >
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
                    <Input
                      placeholder="Select date"
                      value={
                        ppdGivenDate
                          ? `${ppdGivenDate.getDate()}/${
                              ppdGivenDate.getMonth() + 1
                            }/${ppdGivenDate.getFullYear()}`
                          : ""
                      }
                      readOnly
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={ppdGivenDate}
                      onSelect={(value) => {
                        setReportData({
                          ...reportData,
                          mantoux_test: {
                            //@ts-expect-error Sab Changa-si
                            ...reportData.mantoux_test,
                            ppdGivenDate: `${value?.getDate()}/${
                              value!.getMonth() + 1
                            }/${value?.getFullYear()}`,
                          },
                        });
                        setPpdGivenDate(value);
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <p className="my-auto pr-4">Reading On</p>
                <Popover>
                  <PopoverTrigger>
                    <Input
                      placeholder="Select date"
                      value={
                        ppdReadDate
                          ? `${ppdReadDate.getDate()}/${
                              ppdReadDate.getMonth() + 1
                            }/${ppdReadDate.getFullYear()}`
                          : ""
                      }
                      readOnly
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={ppdReadDate}
                      onSelect={(value) => {
                        setReportData({
                          ...reportData,
                          mantoux_test: {
                            //@ts-expect-error Sab Changa-si
                            ...reportData.mantoux_test,
                            ppdReadDate: `${value?.getDate()}/${
                              value!.getMonth() + 1
                            }/${value?.getFullYear()}`,
                          },
                        });
                        setPpdReadDate(value);
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <p className="my-auto pr-4">Erythema</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      mantoux_test: {
                        //@ts-expect-error Sab Changa-si
                        ...reportData.mantoux_test,
                        erythema: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Induration</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      mantoux_test: {
                        //@ts-expect-error Sab Changa-si
                        ...reportData.mantoux_test,
                        induration: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">P.P.D Injected</p>
                <div className="flex items-center gap-2 col-span-3">
                  <Input
                    type="number"
                    placeholder="Enter value"
                    className="w-40"
                    onChange={(e) => {
                      setReportData({
                        ...reportData,
                        mantoux_test: {
                          //@ts-expect-error Sab Changa-si
                          ...reportData.mantoux_test,
                          ppdInjected: e.target.value,
                        },
                      });
                    }}
                  />
                  TU of Purified Protein Derivative
                </div>
                <p className="my-auto pr-4">Interpretation</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      mantoux_test: {
                        //@ts-expect-error Sab Changa-si
                        ...reportData.mantoux_test,
                        interpretation: value,
                      },
                    });
                  }}
                >
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      platelet: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      post_prandial_blood_sugar: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      pt_inr: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.pt_inr,
                        test: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Control</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      pt_inr: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.pt_inr,
                        control: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">INR</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      pt_inr: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.pt_inr,
                        inr: e.target.value,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      ra_test: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        abstinence: e.target.value,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        quantity: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Colour</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        colour: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Reaction</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        reaction: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="alkaline">ALKALINE</SelectItem>
                      <SelectItem value="acidic">ACIDIC</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        sperm_count: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Total Motile</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        total_motile: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Actively Motile</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        actively_motile: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Sluggishly Motile</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        sluggishly_motile: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Non Motile</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        non_motile: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Pus Cells</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        pus_cells: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Epithelial Cells</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        epithelial_cells: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">RBC</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      semen: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.semen,
                        rbc: value,
                      },
                    });
                  }}
                >
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      serology: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.serology,
                        hiv: value,
                      },
                    });
                  }}
                >
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      serology: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.serology,
                        hbsag: value,
                      },
                    });
                  }}
                >
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      serology: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.serology,
                        vdrl: value,
                      },
                    });
                  }}
                >
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      serology: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.serology,
                        hcv: value,
                      },
                    });
                  }}
                >
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      serum_chloride: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      serum_potassium: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      serum_sodium: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      sgot: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      sgpt: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {selectedTestTypes.includes("sputum_afb") && (
        <>
          <div className="mx-4 mt-5 flex flex-wrap border-b-2">
            <div>
              <h1 className="text-xl font-semibold">Sputum for AFB</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Sputum for AFB</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      sputum_afb: value,
                    });
                  }}
                >
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
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      stool: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.stool,
                        color: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Consistency</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      stool: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.stool,
                        consistency: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Parasite</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      stool: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.stool,
                        parasite: value,
                      },
                    });
                  }}
                >
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
              <h1 className="text-xl font-semibold">Microscopic Examination</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Cysts</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      stool: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.stool,
                        cysts: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="found">FOUND</SelectItem>
                      <SelectItem value="not_found">NOT FOUND</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Ova</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      stool: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.stool,
                        ova: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="found">FOUND</SelectItem>
                      <SelectItem value="not_found">NOT FOUND</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Pus cells</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      stool: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.stool,
                        pus_cells: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">R.B.C</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      stool: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.stool,
                        rbc: value,
                      },
                    });
                  }}
                >
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
                <p className="my-auto pr-4">Epithelial cells</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      stool: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.stool,
                        epithelial_cells: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Macrophages</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      stool: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.stool,
                        macrophages: e.target.value,
                      },
                    });
                  }}
                />
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      total_cholesterol: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      total_protein: e.target.value,
                    });
                  }}
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      triglycerides: e.target.value,
                    });
                  }}
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
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  value={"URINE"}
                  disabled
                />
                <p className="my-auto pr-4">Gram stain</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        gram_stain: value,
                      },
                    });
                  }}
                >
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
                <p className="my-auto pr-4">Organism Isolated</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        organism_isolated: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <h1 className="text-xl font-semibold">
                Antibiotic Susceptibility Report
              </h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Aztreonam(AT)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        aztreonam: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Cefotaxime(CTX)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        cefotaxime: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Cefdinir(CD)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        cefdinir: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Ceftriaxone(CRO)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        ceftriaxone: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Cefuroxime(XM)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        cefuroxime: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Ceftazidime(CAZ)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        ceftazidime: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Cefixime(FIX)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        cefixime: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Amikacin (AK)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        amikacin: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Nitrofurantoin(NI)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        nitrofurantoin: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Nalidixic acid(NA)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        nalidixic_acid: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Gentamicin (GM)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        gentamicin: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Ciprofloxacin(CI)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        ciprofloxacin: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Norfloxacin (NOR)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        norfloxacin: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
                      <SelectItem value="+">+</SelectItem>
                      <SelectItem value="++">++</SelectItem>
                      <SelectItem value="+++">+++</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Ofloxacin (OF)</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_cs: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_cs,
                        ofloxacin: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="resistant">RESISTANT</SelectItem>
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        color: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="pale_yellow">Pale Yellow</SelectItem>
                      <SelectItem value="yellow">Yellow</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="brown">Brown</SelectItem>
                      <SelectItem value="straw">Straw</SelectItem>
                      <SelectItem value="milky">Milky</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Appearance</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        appearance: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="clear">Clear</SelectItem>
                      <SelectItem value="hazy">Hazy</SelectItem>
                      <SelectItem value="slightly_hazy">
                        Slightly Hazy
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Reaction (pH)</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        reaction_ph: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Specific Gravity</p>
                <Input
                  type="number"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        specific_gravity: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <h1 className="text-xl font-semibold">Chemical Examination</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Protein</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        protein: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Glucose</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        glucose: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Blood</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        blood: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Ketones</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        ketones: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <h1 className="text-xl font-semibold">Microscopic Examination</h1>
              <div className="grid grid-cols-6 items-center gap-2 my-2">
                <p className="my-auto pr-4">Pus cells</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        pus_cells: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Epithelial cells</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        epithelial_cells: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">R.B.C</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        rbc: e.target.value,
                      },
                    });
                  }}
                />
                <p className="my-auto pr-4">Casts</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        casts: value,
                      },
                    });
                  }}
                >
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
                <p className="my-auto pr-4">Crystals</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        crystals: value,
                      },
                    });
                  }}
                >
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
                <p className="my-auto pr-4">Others</p>
                <Input
                  type="text"
                  placeholder="Enter value"
                  className="w-40"
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      urine_re: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.urine_re,
                        others: e.target.value,
                      },
                    });
                  }}
                />
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
                  onChange={(e) => {
                    setReportData({
                      ...reportData,
                      uric_acid: e.target.value,
                    });
                  }}
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
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      widal_test: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.widal_test,
                        salmonella_typhi_o: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="no_agglutination_seen">
                        No agglutination seen
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_320">
                        Agglutination seen 1:320
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_160">
                        Agglutination seen 1:160
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_80">
                        Agglutination seen 1:80
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_40">
                        Agglutination seen 1:40
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Salmonella Typhi - H</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      widal_test: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.widal_test,
                        salmonella_typhi_h: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="no_agglutination_seen">
                        No agglutination seen
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_320">
                        Agglutination seen 1:320
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_160">
                        Agglutination seen 1:160
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_80">
                        Agglutination seen 1:80
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_40">
                        Agglutination seen 1:40
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Salmonella Para Typhi - AH</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      widal_test: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.widal_test,
                        salmonella_typhi_ah: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="no_agglutination_seen">
                        No agglutination seen
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_320">
                        Agglutination seen 1:320
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_160">
                        Agglutination seen 1:160
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_80">
                        Agglutination seen 1:80
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_40">
                        Agglutination seen 1:40
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="my-auto pr-4">Salmonella Para Typhi - BH</p>
                <Select
                  onValueChange={(value) => {
                    setReportData({
                      ...reportData,
                      widal_test: {
                        //@ts-expect-error - Sab changa-si
                        ...reportData.widal_test,
                        salmonella_typhi_bh: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="no_agglutination_seen">
                        No agglutination seen
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_320">
                        Agglutination seen 1:320
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_160">
                        Agglutination seen 1:160
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_80">
                        Agglutination seen 1:80
                      </SelectItem>
                      <SelectItem value="agglutination_seen_1_40">
                        Agglutination seen 1:40
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </>
      )}

      {selectedTestTypes.length > 0 && (
        <div className="flex w-full justify-center">
          <Button
            className="bg-slate-700 text-white max-w-fit my-4"
            onClick={async () => {
              const { error } = await supabase.from("reportData").insert({
                metadata: metadata,
                data: {
                  selectedTestTypes: selectedTestTypes,
                  reportData: reportData,
                },
                patient_name: metadata.patientName,
              });

              if (error) {
                console.log("DB error", error);
                alert("Error saving data to database");
                return;
              }
              localStorage.removeItem("metadata");
              localStorage.removeItem("data");
              localStorage.setItem("metadata", JSON.stringify(metadata));
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
