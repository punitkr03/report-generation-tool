import { referenceValues } from "@/constants/reference-values";
import {
  Document,
  Font,
  Image,
  Page,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import { format } from "date-fns";

export default function Report() {
  const data = JSON.parse(localStorage.getItem("data") as string);
  const metadata = JSON.parse(localStorage.getItem("metadata") as string);
  const selectedTests = data.selectedTestTypes;
  const reportData = data.reportData;
  const collectionDateArr = metadata.collectionDate.split("/");
  const reportingDateArr = metadata.reportingDate.split("/");

  console.log(collectionDateArr);
  console.log(reportingDateArr);

  Font.register({
    family: "Cambria",
    fonts: [
      {
        src: "/fonts/Cambria.ttf",
      },
      {
        src: "/fonts/Cambria-Bold.ttf",
        fontWeight: "bold",
      },
    ],
  });

  const antibiotics = [
    {
      label: "Amikacin (AK)",
      value: "amikacin",
    },
    {
      label: "Aztreonam (AT)",
      value: "aztreonam",
    },
    {
      label: "Cefotaxime (CTX)",
      value: "cefotaxime",
    },
    {
      label: "Cefdinir (CD)",
      value: "cefdinir",
    },
    {
      label: "Nitrofurantoin (NI)",
      value: "nitrofurantoin",
    },
    {
      label: "Ceftriaxone (CRO)",
      value: "ceftriaxone",
    },
    {
      label: "Nalidixic acid (NA)",
      value: "nalidixic_acid",
    },
    {
      label: "Gentamicin (GM)",
      value: "gentamicin",
    },
    {
      label: "Cefuroxime (XM)",
      value: "cefuroxime",
    },
    {
      label: "Ciprofloxacin (CI)",
      value: "ciprofloxacin",
    },
    {
      label: "Ceftazidime (CAZ)",
      value: "ceftazidime",
    },
    {
      label: "Cefixime (FIX)",
      value: "cefixime",
    },
    {
      label: "Norfloxacin (NOR)",
      value: "norfloxacin",
    },
    {
      label: "Ofloxacin (OF)",
      value: "ofloxacin",
    },
  ];

  const widal_tests = [
    {
      label: "Salmonella Typhi - O",
      value: "salmonella_typhi_o",
    },
    {
      label: "Salmonella Typhi - H",
      value: "salmonella_typhi_h",
    },
    {
      label: "Salmonella Para Typhi - AH",
      value: "salmonella_typhi_ah",
    },
    {
      label: "Salmonella Para Typhi - BH",
      value: "salmonella_typhi_bh",
    },
  ];

  const widal_result = {
    no_agglutination_seen: "No agglutination seen",
    agglutination_seen_1_320: "Agglutination seen 1:320",
    agglutination_seen_1_160: "Agglutination seen 1:160",
    agglutination_seen_1_80: "Agglutination seen 1:80",
    agglutination_seen_1_40: "Agglutination seen 1:40",
  };
  console.log(metadata.patientTitle);
  return (
    <PDFViewer width="100%" height="800px">
      <Document>
        <Page
          size="A4"
          style={{
            fontFamily: "Cambria",
          }}
        >
          <Image
            src="/header.png"
            style={{
              objectFit: "contain",
              paddingHorizontal: "10px",
              transform: "translate(-10px, 0)",
            }}
          />
          <Image
            src="/pad3.png"
            style={{
              height: "340px",
              width: "340px",
              zIndex: -1,
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: "-175px",
              marginTop: "-175px",
            }}
          />
          <View
            style={{
              borderBottom: "1px solid #000",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          ></View>
          <View
            style={{
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              INVESTIGATION REPORT
            </Text>
          </View>

          <View
            style={{
              width: "97%",
              border: "1px solid black",
              margin: "3px 0",
              alignSelf: "center",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  width: "50%",
                  padding: 2,
                }}
              >
                <Text
                  style={{ fontSize: 10, fontWeight: 600 }}
                  render={() =>
                    `Patient Name :- ${metadata.patientTitle.toUpperCase()}. ${
                      metadata.patientName
                    }`
                  }
                ></Text>
              </View>
              <View style={{ width: "50%", padding: 2 }}>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 140,
                  }}
                  render={() =>
                    `Collection Date :- ${format(
                      new Date(
                        collectionDateArr[2],
                        collectionDateArr[1] - 1,
                        collectionDateArr[0]
                      ),
                      "d MMM, yyyy"
                    )}`
                  }
                ></Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  width: "50%",
                  padding: 2,
                }}
              >
                <Text
                  style={{ fontSize: 10 }}
                  render={() =>
                    `Age/Gender     :- ${metadata.age} Years / ${metadata.gender}`
                  }
                ></Text>
              </View>
              <View style={{ width: "50%", padding: 2 }}>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 140,
                  }}
                  render={() =>
                    `Reporting Date :- ${format(
                      new Date(
                        reportingDateArr[2],
                        reportingDateArr[1] - 1,
                        reportingDateArr[0]
                      ),
                      "d MMM, yyyy"
                    )}`
                  }
                ></Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  width: "50%",
                  padding: 2,
                  // fontWeight: 600,
                }}
              >
                <Text style={{ fontSize: 10 }}>
                  Referral {"            "}:-{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    {metadata.referral}
                  </Text>
                </Text>
              </View>
              <View style={{ width: "50%", padding: 2 }}>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 140,
                  }}
                  render={() => `Sample ID           :- ${metadata.sampleID}`}
                >
                  Sample ID :-
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                borderTop: "1px solid black",
                marginTop: "2px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    paddingVertical: 3,
                    paddingLeft: 3,
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: 700 }}>
                    INVESTIGATION
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 3,
                    paddingLeft: 3,
                    textAlign: "center",
                    transform: "translate(11px, 0)",
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: 700 }}>RESULT</Text>
                </View>
                <View
                  style={{
                    paddingVertical: 3,
                    paddingLeft: 3,
                    textAlign: "left",
                    transform: "translate(5px, 0)",
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: 700 }}>
                    REFERENCE RANGE
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 3,
                    paddingLeft: 3,
                    textAlign: "left",
                    width: "17%",
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: 700 }}>UNIT</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Test results will be added here */}
          {/* ASO Titre */}
          {selectedTests &&
            selectedTests.includes("aso_titre") &&
            reportData["aso_titre"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        Anti Streptolysin O (ASO)
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        ASO titre
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.aso_titre}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.aso_titre.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.aso_titre.unit}
                      ></Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 8,
                      fontWeight: 600,
                      marginBottom: 5,
                      textDecoration: "underline",
                    }}
                  >
                    Method: Immunoturbidimetry
                  </Text>
                </View>
              </View>
            )}
          {selectedTests &&
            selectedTests.includes("bilirubin") &&
            reportData["bilirubin"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        Bilirubin
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Total Bilirubin
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.bilirubin.total_bilirubin}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.bilirubin.total_bilirubin.value
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.bilirubin.total_bilirubin.unit
                        }
                      ></Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Direct Bilirubin
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.bilirubin.direct_bilirubin}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.bilirubin.direct_bilirubin.value
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.bilirubin.direct_bilirubin.unit
                        }
                      ></Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Indirect Bilirubin
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          (
                            parseFloat(reportData.bilirubin.total_bilirubin) -
                            parseFloat(reportData.bilirubin.direct_bilirubin)
                          ).toFixed(1)
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.bilirubin.indirect_bilirubin.value
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.bilirubin.indirect_bilirubin.unit
                        }
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          {selectedTests &&
            selectedTests.includes("btct") &&
            reportData["btct"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        BLEEDING TIME, CLOTTING TIME
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Bleeding Time
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.btct.bleeding_time}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.btct.bleeding_time.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.btct.bleeding_time.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Clotting Time
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.btct.clotting_time}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.btct.clotting_time.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.btct.clotting_time.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("blood_glucose") &&
            reportData["blood_glucose"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        BLOOD GLUCOSE
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Fasting Plasma Glucose
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          reportData.blood_glucose.fasting_plasma_glucose
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Normal : ${referenceValues.blood_glucose.fasting_plasma_glucose.normal.value}\nImpaired GT : ${referenceValues.blood_glucose.fasting_plasma_glucose.impaired_glucose_tolerance.value}\nDiabetic : ${referenceValues.blood_glucose.fasting_plasma_glucose.diabetic.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.blood_glucose.fasting_plasma_glucose
                            .diabetic.unit
                        }
                      ></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Post Prandial Blood Sugar
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          reportData.blood_glucose.post_prandial_blood_sugar
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Normal : ${referenceValues.blood_glucose.post_prandial_blood_sugar.normal.value}\nImpaired GT : ${referenceValues.blood_glucose.post_prandial_blood_sugar.impaired_glucose_tolerance.value}\nDiabetic : ${referenceValues.blood_glucose.post_prandial_blood_sugar.diabetic.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.blood_glucose
                            .post_prandial_blood_sugar.diabetic.unit
                        }
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("blood_glucose_random") &&
            reportData["blood_glucose_random"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        BLOOD GLUCOSE LEVEL ( RANDOM )
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Blood Glucose Random
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.blood_glucose_random}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Normal : ${referenceValues.blood_glucose_random.normal.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.blood_glucose_random.normal.unit
                        }
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("blood_group") &&
            reportData["blood_group"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        BLOOD GROUP
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Blood Group
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                        textTransform: "uppercase",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.blood_group.abo_grouping}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Rh Factor
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                        textTransform: "uppercase",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.blood_group.rh_factor}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("blood_urea") &&
            reportData["blood_urea"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        UREA
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Blood Urea
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.blood_urea}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => `${referenceValues.blood_urea.value}`}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.blood_urea.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("calcium") &&
            reportData["calcium"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        CALCIUM
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Calcium
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.calcium}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => `${referenceValues.calcium.value}`}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.calcium.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("cbc") &&
            reportData["cbc"] !== undefined && (
              <>
                <View
                  style={{
                    marginHorizontal: 10,
                    borderBottom: "1px solid black",
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          CBC (COMPLETE BLOOD COUNT)
                        </Text>
                      </View>
                    </View>
                  </View>
                  {reportData.cbc.haemoglobin && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Hemoglobin
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbc.haemoglobin}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `Male : ${referenceValues.cbc.hemoglobin.male.value}\nFemale : ${referenceValues.cbc.hemoglobin.female.value}\nInfant : ${referenceValues.cbc.hemoglobin.infant.value}\nChildren : ${referenceValues.cbc.hemoglobin.children.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              referenceValues.cbc.hemoglobin.male.unit
                            }
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.cbc.total_wbc_count && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Total WBC count
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbc.total_wbc_count}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `${referenceValues.cbc.total_wbc_count.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              referenceValues.cbc.total_wbc_count.unit
                            }
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.cbc.rbc_count && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            RBC Count
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbc.rbc_count}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `${referenceValues.cbc.rbc_count.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => referenceValues.cbc.rbc_count.unit}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.cbc.platelet_count && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Platelet Count
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbc.platelet_count}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `${referenceValues.cbc.platelet_count.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              referenceValues.cbc.platelet_count.unit
                            }
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                </View>
                {reportData.cbc.differential_count && (
                  <View
                    style={{
                      marginHorizontal: 10,
                      borderBottom: "1px solid black",
                    }}
                  >
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              textDecoration: "underline",
                            }}
                          >
                            DIFFERENTIAL COUNT
                          </Text>
                        </View>
                      </View>
                    </View>
                    {reportData.cbc.differential_count.neutrophils && (
                      <View
                        style={{
                          width: "97%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              width: "35%",
                              paddingTop: 1,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                              }}
                            >
                              Neutrophils
                            </Text>
                          </View>
                          <View
                            style={{
                              width: "22%",
                              padding: 2,
                              textAlign: "left",
                              marginRight: 10,
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                reportData.cbc.differential_count.neutrophils
                              }
                            ></Text>
                          </View>
                          <View
                            style={{
                              width: "35%",
                              padding: 2,
                              textAlign: "left",
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                `${referenceValues.cbc.differential_count.neutrophils.value}`
                              }
                            ></Text>
                          </View>
                          <View style={{ width: "15%", padding: 2 }}>
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                referenceValues.cbc.differential_count
                                  .neutrophils.unit
                              }
                            ></Text>
                          </View>
                        </View>
                      </View>
                    )}
                    {reportData.cbc.differential_count.lymphocytes && (
                      <View
                        style={{
                          width: "97%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              width: "35%",
                              paddingTop: 1,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                              }}
                            >
                              Lymphocytes
                            </Text>
                          </View>
                          <View
                            style={{
                              width: "22%",
                              padding: 2,
                              textAlign: "left",
                              marginRight: 10,
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                reportData.cbc.differential_count.lymphocytes
                              }
                            ></Text>
                          </View>
                          <View
                            style={{
                              width: "35%",
                              padding: 2,
                              textAlign: "left",
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                `${referenceValues.cbc.differential_count.lymphocytes.value}`
                              }
                            ></Text>
                          </View>
                          <View style={{ width: "15%", padding: 2 }}>
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                referenceValues.cbc.differential_count
                                  .lymphocytes.unit
                              }
                            ></Text>
                          </View>
                        </View>
                      </View>
                    )}
                    {reportData.cbc.differential_count.monocytes && (
                      <View
                        style={{
                          width: "97%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              width: "35%",
                              paddingTop: 1,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                              }}
                            >
                              Monocytes
                            </Text>
                          </View>
                          <View
                            style={{
                              width: "22%",
                              padding: 2,
                              textAlign: "left",
                              marginRight: 10,
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                reportData.cbc.differential_count.monocytes
                              }
                            ></Text>
                          </View>
                          <View
                            style={{
                              width: "35%",
                              padding: 2,
                              textAlign: "left",
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                `${referenceValues.cbc.differential_count.monocytes.value}`
                              }
                            ></Text>
                          </View>
                          <View style={{ width: "15%", padding: 2 }}>
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                referenceValues.cbc.differential_count.monocytes
                                  .unit
                              }
                            ></Text>
                          </View>
                        </View>
                      </View>
                    )}
                    {reportData.cbc.differential_count.eosinophils && (
                      <View
                        style={{
                          width: "97%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              width: "35%",
                              paddingTop: 1,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                              }}
                            >
                              Eosinophils
                            </Text>
                          </View>
                          <View
                            style={{
                              width: "22%",
                              padding: 2,
                              textAlign: "left",
                              marginRight: 10,
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                reportData.cbc.differential_count.eosinophils
                              }
                            ></Text>
                          </View>
                          <View
                            style={{
                              width: "35%",
                              padding: 2,
                              textAlign: "left",
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                `${referenceValues.cbc.differential_count.eosinophils.value}`
                              }
                            ></Text>
                          </View>
                          <View style={{ width: "15%", padding: 2 }}>
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                referenceValues.cbc.differential_count
                                  .eosinophils.unit
                              }
                            ></Text>
                          </View>
                        </View>
                      </View>
                    )}
                    {reportData.cbc.differential_count.basophils && (
                      <View
                        style={{
                          width: "97%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              width: "35%",
                              paddingTop: 1,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                              }}
                            >
                              Basophils
                            </Text>
                          </View>
                          <View
                            style={{
                              width: "22%",
                              padding: 2,
                              textAlign: "left",
                              marginRight: 10,
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                reportData.cbc.differential_count.basophils
                              }
                            ></Text>
                          </View>
                          <View
                            style={{
                              width: "35%",
                              padding: 2,
                              textAlign: "left",
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                `${referenceValues.cbc.differential_count.basophils.value}`
                              }
                            ></Text>
                          </View>
                          <View style={{ width: "15%", padding: 2 }}>
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                referenceValues.cbc.differential_count.basophils
                                  .unit
                              }
                            ></Text>
                          </View>
                        </View>
                      </View>
                    )}
                    {reportData.cbc.differential_count.pcv && (
                      <View
                        style={{
                          width: "97%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              width: "35%",
                              paddingTop: 1,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                              }}
                            >
                              PCV (Packed Cell Volume)
                            </Text>
                          </View>
                          <View
                            style={{
                              width: "22%",
                              padding: 2,
                              textAlign: "left",
                              marginRight: 10,
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                reportData.cbc.differential_count.pcv
                              }
                            ></Text>
                          </View>
                          <View
                            style={{
                              width: "35%",
                              padding: 2,
                              textAlign: "left",
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                `${referenceValues.cbc.differential_count.pcv.value}`
                              }
                            ></Text>
                          </View>
                          <View style={{ width: "15%", padding: 2 }}>
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                referenceValues.cbc.differential_count.pcv.unit
                              }
                            ></Text>
                          </View>
                        </View>
                      </View>
                    )}
                    {reportData.cbc.differential_count.pcv &&
                      reportData.cbc.rbc_count && (
                        <View
                          style={{
                            width: "97%",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <View
                              style={{
                                width: "35%",
                                paddingTop: 1,
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 10,
                                }}
                              >
                                MCV (Mean Corp. Volume)
                              </Text>
                            </View>
                            <View
                              style={{
                                width: "22%",
                                padding: 2,
                                textAlign: "left",
                                marginRight: 10,
                              }}
                            >
                              <Text
                                style={{ fontSize: 10 }}
                                render={() => {
                                  const value =
                                    (parseFloat(
                                      reportData.cbc.differential_count.pcv
                                    ) *
                                      10) /
                                    parseFloat(reportData.cbc.rbc_count);
                                  return value.toFixed(2);
                                }}
                              ></Text>
                            </View>
                            <View
                              style={{
                                width: "35%",
                                padding: 2,
                                textAlign: "left",
                              }}
                            >
                              <Text
                                style={{ fontSize: 10 }}
                                render={() =>
                                  `${referenceValues.cbc.differential_count.mcv.value}`
                                }
                              ></Text>
                            </View>
                            <View style={{ width: "15%", padding: 2 }}>
                              <Text
                                style={{ fontSize: 10 }}
                                render={() =>
                                  referenceValues.cbc.differential_count.mcv
                                    .unit
                                }
                              ></Text>
                            </View>
                          </View>
                        </View>
                      )}
                    {reportData.cbc.differential_count.pcv &&
                      reportData.cbc.haemoglobin && (
                        <View
                          style={{
                            width: "97%",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <View
                              style={{
                                width: "35%",
                                paddingTop: 1,
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 10,
                                }}
                              >
                                MCHC (Mean Corp. Hb Con.)
                              </Text>
                            </View>
                            <View
                              style={{
                                width: "22%",
                                padding: 2,
                                textAlign: "left",
                                marginRight: 10,
                              }}
                            >
                              <Text
                                style={{ fontSize: 10 }}
                                render={() => {
                                  const value =
                                    (parseFloat(reportData.cbc.haemoglobin) /
                                      parseFloat(
                                        reportData.cbc.differential_count.pcv
                                      )) *
                                    100;
                                  return value.toFixed(2);
                                }}
                              ></Text>
                            </View>
                            <View
                              style={{
                                width: "35%",
                                padding: 2,
                                textAlign: "left",
                              }}
                            >
                              <Text
                                style={{ fontSize: 10 }}
                                render={() =>
                                  `${referenceValues.cbc.differential_count.mchc.value}`
                                }
                              ></Text>
                            </View>
                            <View style={{ width: "15%", padding: 2 }}>
                              <Text
                                style={{ fontSize: 10 }}
                                render={() =>
                                  referenceValues.cbc.differential_count.mchc
                                    .unit
                                }
                              ></Text>
                            </View>
                          </View>
                        </View>
                      )}
                    {reportData.cbc.haemoglobin && reportData.cbc.rbc_count && (
                      <View
                        style={{
                          width: "97%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              width: "35%",
                              paddingTop: 1,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                              }}
                            >
                              MCH (Mean Corp. Haemoglobin)
                            </Text>
                          </View>
                          <View
                            style={{
                              width: "22%",
                              padding: 2,
                              textAlign: "left",
                              marginRight: 10,
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() => {
                                const value =
                                  (parseFloat(reportData.cbc.haemoglobin) /
                                    parseFloat(reportData.cbc.rbc_count)) *
                                  10;
                                return value.toFixed(2);
                              }}
                            ></Text>
                          </View>
                          <View
                            style={{
                              width: "35%",
                              padding: 2,
                              textAlign: "left",
                            }}
                          >
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                `${referenceValues.cbc.differential_count.mch.value}`
                              }
                            ></Text>
                          </View>
                          <View style={{ width: "15%", padding: 2 }}>
                            <Text
                              style={{ fontSize: 10 }}
                              render={() =>
                                referenceValues.cbc.differential_count.mch.unit
                              }
                            ></Text>
                          </View>
                        </View>
                      </View>
                    )}
                  </View>
                )}
              </>
            )}

          {selectedTests &&
            selectedTests.includes("cbp") &&
            reportData["cbp"] !== undefined && (
              <>
                <View
                  style={{
                    marginHorizontal: 10,
                    borderBottom: "1px solid black",
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          CBP (COMPLETE BLOOD PICTURE)
                        </Text>
                      </View>
                    </View>
                  </View>
                  {reportData.cbp.haemoglobin && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Hemoglobin
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbp.haemoglobin}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `Male : ${referenceValues.cbp.hemoglobin.male.value}\nFemale : ${referenceValues.cbp.hemoglobin.female.value}\nInfant : ${referenceValues.cbp.hemoglobin.infant.value}\nChildren : ${referenceValues.cbp.hemoglobin.children.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              referenceValues.cbp.hemoglobin.male.unit
                            }
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.cbp.total_wbc_count && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Total WBC count
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbp.total_wbc_count}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `${referenceValues.cbp.total_wbc_count.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              referenceValues.cbp.total_wbc_count.unit
                            }
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.cbp.neutrophils && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Neutrophils
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbp.neutrophils}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `${referenceValues.cbp.neutrophils.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => referenceValues.cbp.neutrophils.unit}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.cbp.lymphocytes && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Lymphocytes
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbp.lymphocytes}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `${referenceValues.cbp.lymphocytes.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => referenceValues.cbp.lymphocytes.unit}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.cbp.monocytes && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Monocytes
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbp.monocytes}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `${referenceValues.cbp.monocytes.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => referenceValues.cbp.monocytes.unit}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.cbp.eosinophils && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Eosinophils
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbp.eosinophils}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `${referenceValues.cbp.eosinophils.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => referenceValues.cbp.eosinophils.unit}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.cbp.basophils && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Basophils
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => reportData.cbp.basophils}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              `${referenceValues.cbp.basophils.value}`
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => referenceValues.cbp.basophils.unit}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              </>
            )}

          {selectedTests &&
            selectedTests.includes("crp") &&
            reportData["crp"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        C REACTIVE PROTEIN (CRP) QUANTATITAIVE
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        CRP
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.crp}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.crp.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.crp.unit}
                      ></Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 8,
                      fontWeight: 600,
                      marginBottom: 5,
                      textDecoration: "underline",
                    }}
                  >
                    Method: Nephelometry
                  </Text>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("creatinine_serum") &&
            reportData["creatinine_serum"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        CREATININE
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Creatinine Serum
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.creatinine_serum}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.creatinine_serum.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.creatinine_serum.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("differential_count") &&
            reportData["differential_count"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        DIFFERENTIAL COUNT
                      </Text>
                    </View>
                  </View>
                </View>
                {reportData.differential_count.neutrophils && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Neutrophils
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            reportData.differential_count.neutrophils
                          }
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            `${referenceValues.differential_count.neutrophils.value}`
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.differential_count.neutrophils.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.differential_count.lymphocytes && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Lymphocytes
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            reportData.differential_count.lymphocytes
                          }
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            `${referenceValues.differential_count.lymphocytes.value}`
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.differential_count.lymphocytes.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.differential_count.monocytes && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Monocytes
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.differential_count.monocytes}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            `${referenceValues.differential_count.monocytes.value}`
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.differential_count.monocytes.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.differential_count.eosinophils && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Eosinophils
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            reportData.differential_count.eosinophils
                          }
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            `${referenceValues.differential_count.eosinophils.value}`
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.differential_count.eosinophils.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.differential_count.basophils && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Basophils
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.differential_count.basophils}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            `${referenceValues.differential_count.basophils.value}`
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.differential_count.basophils.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("electrolytes") &&
            reportData["electrolytes"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        ELECTROLYTES
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  {reportData.electrolytes.serum_sodium && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Serum Sodium
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.electrolytes.serum_sodium}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.electrolytes.serum_sodium.value
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.electrolytes.serum_sodium.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  )}
                  {reportData.electrolytes.serum_potassium && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Serum Potassium
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.electrolytes.serum_potassium}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.electrolytes.serum_potassium.value
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.electrolytes.serum_potassium.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  )}
                  {reportData.electrolytes.serum_chloride && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Serum Chloride
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.electrolytes.serum_chloride}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.electrolytes.serum_chloride.value
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.electrolytes.serum_chloride.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("esr") &&
            reportData["esr"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        ERYTHROCYTE SEDIMENTATION RATE (ESR)
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        ESR (Westergren's method)
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.esr}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Male : ${referenceValues.esr.male.value}\nFemale : ${referenceValues.esr.female.value}\n1st hr.`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.esr.male.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("fasting_plasma_glucose") &&
            reportData["fasting_plasma_glucose"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        BLOOD GLUCOSE
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Fasting Plasma Glucose
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.fasting_plasma_glucose}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Normal : ${referenceValues.fasting_plasma_glucose.normal.value}\nImpaired GT : ${referenceValues.fasting_plasma_glucose.impaired_glucose_tolerance.value}\nDiabetic : ${referenceValues.fasting_plasma_glucose.diabetic.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.fasting_plasma_glucose.diabetic.unit
                        }
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("hcg") &&
            reportData["hcg"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        HCG
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        URINE PREGNANCY CARD TEST
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10, textTransform: "uppercase" }}
                        render={() => reportData.hcg}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("kft") &&
            reportData["kft"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        KFT (KIDNEY FUNCTION TEST)
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  {reportData.kft.blood_urea && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Blood urea
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.kft.blood_urea}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.kft.blood_urea.value}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.kft.blood_urea.unit}
                        ></Text>
                      </View>
                    </View>
                  )}
                  {reportData.kft.creatinine_serum && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Creatinine Serum
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.kft.creatinine_serum}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.kft.creatinine_serum.value
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.kft.creatinine_serum.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  )}
                  {reportData.kft.uric_acid && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Uric Acid
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.kft.uric_acid}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.kft.uric_acid.value}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.kft.uric_acid.unit}
                        ></Text>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("lipid_profile") &&
            reportData["lipid_profile"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        LIPID PROFILE
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Total Cholesterol
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          reportData.lipid_profile.total_cholesterol
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Desireable : ${referenceValues.lipid_profile.total_cholesterol.desirable.value}\nBorderline : ${referenceValues.lipid_profile.total_cholesterol.borderline.value}\nHigh : ${referenceValues.lipid_profile.total_cholesterol.high.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.lipid_profile.total_cholesterol
                            .borderline.unit
                        }
                      ></Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Triglycerides
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.lipid_profile.triglycerides}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Normal : ${referenceValues.lipid_profile.triglycerides.normal.value}\nBorderline : ${referenceValues.lipid_profile.triglycerides.borderline.value}\nHigh : ${referenceValues.lipid_profile.triglycerides.high.value}\nVery High : ${referenceValues.lipid_profile.triglycerides.very_high.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.lipid_profile.triglycerides.normal
                            .unit
                        }
                      ></Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        HDL Cholesterol
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.lipid_profile.hdl_cholesterol}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Major risk factor for heart disease : ${referenceValues.lipid_profile.hdl_cholesterol.major_risk_factor.value}\nNegative risk factor for heart disease : ${referenceValues.lipid_profile.hdl_cholesterol.negative_risk_factor.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.lipid_profile.hdl_cholesterol
                            .major_risk_factor.unit
                        }
                      ></Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        LDL Cholesterol
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          (
                            reportData.lipid_profile.total_cholesterol -
                            reportData.lipid_profile.hdl_cholesterol -
                            reportData.lipid_profile.vldl_cholesterol
                          ).toFixed(2)
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Optimal : ${referenceValues.lipid_profile.ldl_cholesterol.optimal.value}\nNear optimal : ${referenceValues.lipid_profile.ldl_cholesterol.near_optimal.value}\nBorderline : ${referenceValues.lipid_profile.ldl_cholesterol.borderline.value}\nHigh : ${referenceValues.lipid_profile.ldl_cholesterol.high.value}\nVery High : ${referenceValues.lipid_profile.ldl_cholesterol.very_high.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.lipid_profile.ldl_cholesterol.optimal
                            .unit
                        }
                      ></Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        VLDL Cholesterol
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.lipid_profile.vldl_cholesterol}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `${referenceValues.lipid_profile.vldl_cholesterol.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.lipid_profile.vldl_cholesterol.unit
                        }
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("lft") &&
            reportData["lft"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        LIVER FUNCTION TEST
                      </Text>
                    </View>
                  </View>
                </View>
                {reportData.lft.total_bilirubin && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Total Bilirubin
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.lft.total_bilirubin}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.lft.total_bilirubin.value
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.lft.total_bilirubin.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.lft.direct_bilirubin && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Direct Bilirubin
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.lft.direct_bilirubin}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.lft.direct_bilirubin.value
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.lft.direct_bilirubin.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.lft.total_bilirubin &&
                  reportData.lft.direct_bilirubin && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Indirect Bilirubin
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              (
                                parseFloat(reportData.lft.total_bilirubin) -
                                parseFloat(reportData.lft.direct_bilirubin)
                              ).toFixed(1)
                            }
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              referenceValues.lft.indirect_bilirubin.value
                            }
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              referenceValues.lft.indirect_bilirubin.unit
                            }
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                {reportData.lft.alt_sgpt && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          ALT (SGPT)
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.lft.alt_sgpt}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.lft.alt_sgpt.value}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.lft.alt_sgpt.unit}
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.lft.ast_sgot && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          AST (SGOT)
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.lft.ast_sgot}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.lft.ast_sgot.value}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.lft.ast_sgot.unit}
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.lft.alkaline_phosphatase && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Alkaline Phosphatase
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.lft.alkaline_phosphatase}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.lft.alkaline_phosphatase.value
                          }
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.lft.alkaline_phosphatase.unit
                          }
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.lft.total_protein && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Total Protein
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.lft.total_protein}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.lft.total_protein.value}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.lft.total_protein.unit}
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.lft.albumin && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Albumin
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.lft.albumin}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.lft.albumin.value}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.lft.albumin.unit}
                        ></Text>
                      </View>
                    </View>
                  </View>
                )}
                {reportData.lft.total_protein &&
                  reportData.lft.total_protein && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Globulin
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() =>
                              (
                                reportData.lft.total_protein -
                                reportData.lft.albumin
                              ).toFixed(1)
                            }
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => referenceValues.lft.globulin.value}
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => referenceValues.lft.globulin.unit}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                {reportData.lft.total_protein && reportData.lft.albumin && (
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          A/G Ratio
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            (
                              reportData.lft.albumin /
                              (reportData.lft.total_protein -
                                reportData.lft.albumin)
                            ).toFixed(1)
                          }
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.lft.a_g_ratio.value}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("malaria") &&
            reportData["malaria"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        MALARIA
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Blood smear for MP
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10, textTransform: "uppercase" }}
                        render={() => reportData.malaria}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("malaria_antigen") &&
            reportData["malaria_antigen"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        MALARIA ANTIGEN TEST
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Plasmodium vivax
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10, textTransform: "uppercase" }}
                        render={() =>
                          reportData.malaria_antigen.plasmodium_vivax
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Plasmodium falciparum
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10, textTransform: "uppercase" }}
                        render={() =>
                          reportData.malaria_antigen.plasmodium_falciparum
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("mantoux_test") &&
            reportData["mantoux_test"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        MANTOUX TEST
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        PPD Given on
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          reportData.mantoux_test.ppdGivenDate.replaceAll(
                            "/",
                            "-"
                          )
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Reading on
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          reportData.mantoux_test.ppdReadDate.replaceAll(
                            "/",
                            "-"
                          )
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        P.P.D Injected
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `${reportData.mantoux_test.ppdInjected} TU of Purified Protein Derivative`
                        }
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Erythema
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.mantoux_test.erythema}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Induration
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.mantoux_test.induration}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        Interpretation
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10, textTransform: "uppercase" }}
                        render={() => reportData.mantoux_test.interpretation}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Induration\n<10 mm - Negative\n10-15 mm - Indeterminate\n>15 mm Positive`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("platelet") &&
            reportData["platelet"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        PLATELET
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Platelet Count
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.platelet}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.platelet.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.platelet.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("post_prandial_blood_sugar") &&
            reportData["post_prandial_blood_sugar"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        BLOOD GLUCOSE
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Post Prandial Blood Sugar
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.post_prandial_blood_sugar}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Normal : ${referenceValues.blood_glucose.post_prandial_blood_sugar.normal.value}\nImpaired GT : ${referenceValues.blood_glucose.post_prandial_blood_sugar.impaired_glucose_tolerance.value}\nDiabetic : ${referenceValues.blood_glucose.post_prandial_blood_sugar.diabetic.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.post_prandial_blood_sugar.normal.unit
                        }
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("pt_inr") &&
            reportData["pt_inr"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        PROTHROMBIN TIME (PT/INR)
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Test
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.pt_inr.test}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => `${referenceValues.pt_inr.value}`}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.pt_inr.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Control
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.pt_inr.control}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        INR
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.pt_inr.inr}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("ra_test") &&
            reportData["ra_test"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        RA FACTOR (RHEUMATOID ARTHRITIS FACTOR)
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        RA Test (Turbidimetric Method)
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.ra_test}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.ra_test.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.ra_test.unit}
                      ></Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 8,
                      fontWeight: 600,
                      marginBottom: 5,
                      textDecoration: "underline",
                    }}
                  >
                    Method: Turbidometery
                  </Text>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("semen") &&
            reportData["semen"] !== undefined && (
              <>
                <View
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          SEMEN ANALYSIS
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Abstinence
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.abstinence}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "Days"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          PHYSICAL EXAMINATION
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Quantity
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.quantity}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Colour
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.colour}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Reaction
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "uppercase" }}
                          render={() => reportData.semen.reaction}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    borderBottom: "1px solid black",
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          MICROSCOPIC EXAMINATION
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Sperm count
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.sperm_count}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `50-150`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "million/ml"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Total Motile
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.total_motile}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "%"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Actively Motile
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.actively_motile}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "%"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Sluggishly Motile
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.sluggishly_motile}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "%"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Non Motile
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.non_motile}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "%"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Pus Cells
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.pus_cells}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "/HPF"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Epithelial Cells
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.semen.epithelial_cells}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "/HPF"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          RBC
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "uppercase" }}
                          render={() => reportData.semen.rbc}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "/HPF"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      fontWeight: 600,
                      fontSize: 10,
                    }}
                  >
                    <Text
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      Interpretation Notes:-
                    </Text>
                    <Text
                      style={{
                        fontSize: 8,
                        marginBottom: "8px",
                        marginTop: "4px",
                      }}
                    >
                      The sample should be collection after a minimum of 2 days
                      and maximum of 7 days of sexual abstinence (ideally 3
                      days).
                    </Text>
                  </View>
                </View>
              </>
            )}

          {selectedTests &&
            selectedTests.includes("serology") &&
            reportData["serology"] !== undefined && (
              <>
                <View
                  style={{
                    marginHorizontal: 10,
                    borderBottom: "1px solid black",
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          SEROLOGY
                        </Text>
                      </View>
                    </View>
                  </View>
                  {reportData.serology.hiv && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            HIV (1&2)
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10, textTransform: "uppercase" }}
                            render={() => reportData.serology.hiv}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ``}
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ""}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.serology.hbsag && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            HbsAg
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10, textTransform: "uppercase" }}
                            render={() => reportData.serology.hbsag}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ``}
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ""}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.serology.vdrl && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            VDRL
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10, textTransform: "uppercase" }}
                            render={() => reportData.serology.vdrl}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ``}
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ""}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                  {reportData.serology.hcv && (
                    <View
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            HCV
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "22%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{ fontSize: 10, textTransform: "uppercase" }}
                            render={() => reportData.serology.hcv}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ``}
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ""}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              </>
            )}

          {selectedTests &&
            selectedTests.includes("serum_chloride") &&
            reportData["serum_chloride"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        CHLORIDE
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Serum Chloride
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.serum_chloride}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.serum_chloride.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.serum_chloride.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          {selectedTests &&
            selectedTests.includes("serum_potassium") &&
            reportData["serum_potassium"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        POTASSIUM
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Serum Potassium
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.serum_potassium}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.serum_potassium.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.serum_potassium.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          {selectedTests &&
            selectedTests.includes("serum_sodium") &&
            reportData["serum_sodium"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        SODIUM
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Serum Sodium
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.serum_sodium}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.serum_sodium.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.serum_sodium.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("sgot") &&
            reportData["sgot"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        SGOT
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        AST (SGOT)
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.sgot}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.sgot.ast_sgot.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.sgot.ast_sgot.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("sgpt") &&
            reportData["sgpt"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        SGPT
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        ALT (SGPT)
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.sgpt}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.sgpt.alt_sgpt.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.sgpt.alt_sgpt.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("sputum_afb") &&
            reportData["sputum_afb"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        SPUTUM FOR AFB
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Sputum for AFB
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10, textTransform: "uppercase" }}
                        render={() => reportData.sputum_afb}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          {selectedTests &&
            selectedTests.includes("stool") &&
            reportData["stool"] !== undefined && (
              <>
                <View
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          STOOL ROUTINE TEST
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          PHYSICAL EXAMINATION
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Colour
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.stool.color}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Consistency
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.stool.consistency}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Parasite
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "uppercase" }}
                          render={() => reportData.stool.parasite}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    borderBottom: "1px solid black",
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          MICROSCOPIC EXAMINATION
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Cysts
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "uppercase" }}
                          render={() => reportData.stool.cysts}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Ova
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "uppercase" }}
                          render={() => reportData.stool.ova}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Pus Cells
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.stool.pus_cells}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "/HPF"}
                        ></Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          RBC
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "uppercase" }}
                          render={() => reportData.stool.rbc}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "/HPF"}
                        ></Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Epithelial cells
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.stool.epithelial_cells}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "/HPF"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Macrophages
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.stool.macrophages}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "/HPF"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            )}
          {selectedTests &&
            selectedTests.includes("total_cholesterol") &&
            reportData["total_cholesterol"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        CHOLESTEROL
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Total Cholesterol
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.total_cholesterol}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Desireable : ${referenceValues.total_cholesterol.desirable.value}\nBorderline : ${referenceValues.total_cholesterol.borderline.value}\nHigh : ${referenceValues.total_cholesterol.high.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.total_cholesterol.borderline.unit
                        }
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("total_protein") &&
            reportData["total_protein"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        PROTEIN
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Total Protein
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.total_protein}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.total_protein.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.total_protein.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("triglycerides") &&
            reportData["triglycerides"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        TRIGLYCERIDES
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Triglycerides
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.triglycerides}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.triglycerides.normal.value
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.triglycerides.normal.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("urine_cs") &&
            reportData["urine_cs"] !== undefined && (
              <>
                <View
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          URINE CULTURE & SENSITIVITY
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Specimen
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "URINE"}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Gram stain
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "uppercase" }}
                          render={() => reportData.urine_cs.gram_stain}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Organism Isolated
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_cs.organism_isolated}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    borderBottom: "1px solid black",
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          ANTIBIOTIC SUSCEPTIBILITY REPORT
                        </Text>
                      </View>
                    </View>
                  </View>
                  {antibiotics.map((antibiotic, idx) => (
                    <View
                      key={idx}
                      style={{
                        width: "97%",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            width: "35%",
                            paddingTop: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            {antibiotic.label}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "20%",
                            padding: 2,
                            textAlign: "left",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                              textTransform: "capitalize",
                            }}
                            render={() => reportData.urine_cs[antibiotic.value]}
                          ></Text>
                        </View>
                        <View
                          style={{
                            width: "35%",
                            padding: 2,
                            textAlign: "left",
                          }}
                        >
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ``}
                          ></Text>
                        </View>
                        <View style={{ width: "15%", padding: 2 }}>
                          <Text
                            style={{ fontSize: 10 }}
                            render={() => ""}
                          ></Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </>
            )}

          {selectedTests &&
            selectedTests.includes("urine_re") &&
            reportData["urine_re"] !== undefined && (
              <>
                <View
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          URINE R/E:-
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          PHYSICAL EXAMINATION
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Color
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "capitalize" }}
                          render={() => reportData.urine_re.color}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Appearance
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "capitalize" }}
                          render={() => reportData.urine_re.appearance}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Reaction(pH)
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.reaction_ph}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Specific Gravity
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "uppercase" }}
                          render={() => reportData.urine_re.specific_gravity}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    borderBottom: "1px solid black",
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          CHEMICAL EXAMINATION
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Protein
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.protein}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `Absent`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Glucose
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.glucose}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `Absent`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Blood
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.blood}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `Negative`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Ketones
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.ketones}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `Negative`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    borderBottom: "1px solid black",
                  }}
                >
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            textDecoration: "underline",
                          }}
                        >
                          MICROSCOPIC EXAMINATION
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Pus Cells
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.pus_cells}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `0-3`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "/HPF"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Epithelial Cells
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.epithelial_cells}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `0-1`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => "/HPF"}
                        ></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          RBC
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10, textTransform: "capitalize" }}
                          render={() => reportData.urine_re.rbc}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `Absent`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Casts
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.casts}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `Absent`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Crystals
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.crystals}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => `Absent`}
                        ></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "97%",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          Others
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => reportData.urine_re.others}
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ``}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            )}

          {selectedTests &&
            selectedTests.includes("uric_acid") &&
            reportData["uric_acid"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        Uric Acid
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Uric Acid
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "22%",
                        padding: 2,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.uric_acid}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 2,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.uric_acid.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 2 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.uric_acid.unit}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

          {selectedTests &&
            selectedTests.includes("widal_test") &&
            reportData["widal_test"] !== undefined && (
              <View
                style={{
                  marginHorizontal: 10,
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "35%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: "underline",
                        }}
                      >
                        WIDAL TEST
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "97%",
                  }}
                >
                  {widal_tests.map((test, idx) => (
                    <View
                      key={idx}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: "35%",
                          paddingTop: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                          }}
                        >
                          {test.label}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "22%",
                          padding: 2,
                          textAlign: "left",
                          marginRight: 10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            widal_result[
                              reportData.widal_test[
                                test.value
                              ] as keyof typeof widal_result
                            ]
                          }
                        ></Text>
                      </View>
                      <View
                        style={{
                          width: "35%",
                          padding: 2,
                          textAlign: "left",
                        }}
                      >
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                      <View style={{ width: "15%", padding: 2 }}>
                        <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                      </View>
                    </View>
                  ))}
                </View>
                <Text
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    marginBottom: 5,
                    textDecoration: "underline",
                  }}
                >
                  Method: Screening by slide agglutination
                </Text>
              </View>
            )}

          <View>
            <Text
              style={{
                fontSize: 10,
                textAlign: "center",
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >{`** END OF REPORT **\n`}</Text>
              {`In case of any typing errors/clarification, please contact the lab immediately.\nPh.No.-7061937894`}
            </Text>
          </View>

          {/* Footer */}
          <Image
            src="/footer.png"
            fixed
            style={{
              objectFit: "contain",
              position: "absolute",
              width: "100%",
              bottom: "0",
              height: "130px",
            }}
          />
        </Page>
      </Document>
    </PDFViewer>
  );
}
