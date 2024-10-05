export const referenceValues = {
  //Complete Blood Count
  cbc: {
    hemoglobin: {
      male: {
        value: "13.0-18.0",
        unit: "g/dL",
      },
      female: {
        value: "12-16.5",
        unit: "g/dL",
      },
      infant: {
        value: "13.5-19.5",
        unit: "g/dL",
      },
      children: {
        value: "12.0-14.5",
        unit: "g/dL",
      },
    },
    total_wbc_count: {
      value: "4500-12500",
      unit: "cells/cmm",
    },
    rbc_count: {
      value: "4.5-6.5",
      unit: "million/cumm",
    },
    platelet_count: {
      value: "1.50-4.5",
      unit: "lakhs/cumm",
    },
  },
  //Differential Count
  differential_count: {
    neutrophils: {
      value: "40-70",
      unit: "%",
    },
    lymphocytes: {
      value: "20-40",
      unit: "%",
    },
    monocytes: {
      value: "02-06",
      unit: "%",
    },
    eosinophils: {
      value: "01-06",
      unit: "%",
    },
    basophils: {
      value: "00-01",
      unit: "%",
    },
    band_cells: {
      value: "",
      unit: "",
    },
    pcv: {
      value: "35-54",
      unit: "%",
    },
    mcv: {
      value: "76-96",
      unit: "fl",
    },
    mchc: {
      value: "32-35",
      unit: "gm/dL",
    },
    mch: {
      value: "27-32",
      unit: "pg",
    },
    esr: {
      male: {
        value: "1-10",
        unit: "mm 1st hr.",
      },
      female: {
        value: "5-20",
        unit: "mm 1st hr.",
      },
    },
  },
  //Bleeding time
  bleeding_time: {
    bleeding_time: {
      value: "01-04",
      unit: "min",
    },
    clotting_time: {
      value: "02-06",
      unit: "min",
    },
  },
  blood_glucose: {
    fasting_plasma_glucose: {
      normal: {
        value: "70-110",
        unit: "mg/dL",
      },
      impaired_glucose_tolerance: {
        value: "111-125",
        unit: "mg/dL",
      },
      diabetic: {
        value: ">=126",
        unit: "mg/dL",
      },
    },
    post_prandial_blood_sugar: {
      normal: {
        value: "70-120",
        unit: "mg/dL",
      },
      impaired_glucose_tolerance: {
        value: "121-199",
        unit: "mg/dL",
      },
      diabetic: {
        value: ">=200",
        unit: "mg/dL",
      },
    },
  },
  blood_glucose_random: {
    normal: {
      value: "90-140",
      unit: "mg/dL",
    },
  },
  kft: {
    blood_urea: {
      value: "14-40",
      unit: "mg/dL",
    },
    creatinine_serum: {
      value: "0.5-1.4",
      unit: "mg/dL",
    },
    uric_acid: {
      value: "2.5-6.0",
      unit: "mg/dL",
    },
  },
  electrolytes: {
    serum_sodium: {
      value: "136-145",
      unit: "meq/L",
    },
    serum_potassium: {
      value: "3.5-5.5",
      unit: "meq/L",
    },
    serum_chloride: {
      value: "98-110",
      unit: "meq/L",
    },
  },
  lft: {
    total_bilirubin: {
      value: "0.0-1.0",
      unit: "mg/dL",
    },
    direct_bilirubin: {
      value: "0.0-0.2",
      unit: "mg/dL",
    },
    indirect_bilirubin: {
      value: "0.0-0.8",
      unit: "mg/dL",
    },
    alt_sgot: {
      value: "14-40",
      unit: "IU/L",
    },
    ast_sgpt: {
      value: "15-35",
      unit: "IU/L",
    },
    alkaline_phosphatase: {
      value: "54-369",
      unit: "IU/L",
    },
    total_protein: {
      value: "6.4-8.2",
      unit: "g/dL",
    },
    albumin: {
      value: "3.4-5.0",
      unit: "g/dL",
    },
    globulin: {
      value: "1.8-3.8",
      unit: "g/dL",
    },
    a_g_ratio: {
      value: "0.9-1.8",
      unit: "",
    },
    s_gamma_gt: {
      value: "0-36",
      unit: "U/L",
    },
  },
  lipid_profile: {
    total_cholesterol: {
      desirable: {
        value: "Up to 200",
        unit: "mg/dL",
      },
      borderline: {
        value: "200-239",
        unit: "mg/dL",
      },
      high: {
        value: ">=240",
        unit: "mg/dL",
      },
    },
    triglycerides: {
      normal: {
        value: "<150",
        unit: "mg/dL",
      },
      borderline: {
        value: "150-199",
        unit: "mg/dL",
      },
      high: {
        value: "200-499",
        unit: "mg/dL",
      },
      very_high: {
        value: ">=500",
        unit: "mg/dL",
      },
    },
    hdl_cholesterol: {
      major_risk_factor: {
        value: "Major risk factor for heart disease: <40",
        unit: "mg/dL",
      },
      negative_risk_factor: {
        value: "Negative risk factor for heart disease: >60",
        unit: "mg/dL",
      },
    },
    ldl_cholesterol: {
      optimal: {
        value: "<100",
        unit: "mg/dL",
      },
      near_optimal: {
        value: "100-129",
        unit: "mg/dL",
      },
      borderline: {
        value: "130-159",
        unit: "mg/dL",
      },
      high: {
        value: "160-189",
        unit: "mg/dL",
      },
      very_high: {
        value: ">=190",
        unit: "mg/dL",
      },
    },
    vldl_cholesterol: {
      value: "6.0-38.0",
      unit: "mg/dL",
    },
  },
  calcium: {
    value: "8.5-10.1",
    unit: "mg/dL",
  },
};
