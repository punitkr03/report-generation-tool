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

export default function Report() {
  const data = JSON.parse(localStorage.getItem("data") as string);
  // const metadata = JSON.parse(localStorage.getItem("metadata") as string);
  console.log(data);
  const selectedTests = data.selectedTestTypes;
  const reportData = data.reportData;

  Font.register({
    family: "Open Sans",
    fonts: [
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
        fontWeight: 700,
      },
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
        fontWeight: 600,
      },
    ],
  });

  return (
    <PDFViewer width="100%" height="800px">
      <Document>
        <Page
          size="A4"
          style={{
            fontFamily: "Open Sans",
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
                  render={() => `Patient Name :-`}
                ></Text>
              </View>
              <View style={{ width: "50%", padding: 2 }}>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 140,
                  }}
                >
                  Collection Date :- 25 Sep, 2024
                </Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  width: "50%",
                  padding: 2,
                }}
              >
                <Text style={{ fontSize: 10 }}>
                  Age/Gender :- Years/Male/Female
                </Text>
              </View>
              <View style={{ width: "50%", padding: 2 }}>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 140,
                  }}
                >
                  Reporting Date :- 25 Sep, 2024
                </Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  width: "50%",
                  padding: 2,
                }}
              >
                <Text style={{ fontSize: 10 }}>Referral :- Dr. M O</Text>
              </View>
              <View style={{ width: "50%", padding: 2 }}>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 140,
                  }}
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
                    width: "33%",
                    padding: 3,
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: 700 }}>
                    INVESTIGATION
                  </Text>
                </View>
                <View
                  style={{
                    width: "18%",
                    padding: 3,
                    textAlign: "left",
                    marginRight: 10,
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: 700 }}>RESULT</Text>
                </View>
                <View
                  style={{
                    width: "35%",
                    padding: 3,
                    textAlign: "left",
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: 700 }}>
                    REFERENCE RANGE
                  </Text>
                </View>
                <View
                  style={{
                    width: "10%",
                    padding: 3,
                    textAlign: "left",
                    transform: "translate(-14px, 0)",
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.aso_titre.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.bilirubin.indirect_bilirubin}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.btct.bleeding_time.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.btct.clotting_time.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Normal : ${referenceValues.blood_glucose.fasting_plasma_glucose.normal.value}\nImapred GT : ${referenceValues.blood_glucose.fasting_plasma_glucose.impaired_glucose_tolerance.value}\nDiabetic : ${referenceValues.blood_glucose.fasting_plasma_glucose.diabetic.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Normal : ${referenceValues.blood_glucose.post_prandial_blood_sugar.normal.value}\nImapred GT : ${referenceValues.blood_glucose.post_prandial_blood_sugar.impaired_glucose_tolerance.value}\nDiabetic : ${referenceValues.blood_glucose.post_prandial_blood_sugar.diabetic.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => `${referenceValues.blood_urea.value}`}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => `${referenceValues.calcium.value}`}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.cbc.hemoglobin.male.unit
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.cbc.total_wbc_count.unit
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.cbc.rbc_count.unit}
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.cbc.platelet_count.unit}
                        ></Text>
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
                          DIFFERENTIAL COUNT
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.cbc.differential_count.neutrophils
                              .unit
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.cbc.differential_count.lymphocytes
                              .unit
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.cbc.differential_count.eosinophils
                              .unit
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
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
                </View>
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.cbp.hemoglobin.male.unit
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() =>
                            referenceValues.cbp.total_wbc_count.unit
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.cbp.neutrophils.unit}
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.cbp.lymphocytes.unit}
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.cbp.monocytes.unit}
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.cbp.eosinophils.unit}
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
                          paddingTop: 3,
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
                          width: "20%",
                          padding: 3,
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
                          padding: 3,
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
                      <View style={{ width: "15%", padding: 3 }}>
                        <Text
                          style={{ fontSize: 10 }}
                          render={() => referenceValues.cbp.basophils.unit}
                        ></Text>
                      </View>
                    </View>
                  </View>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.crp.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.creatinine_serum.value}
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.differential_count.neutrophils}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.differential_count.neutrophils.unit
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.differential_count.lymphocytes}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.differential_count.lymphocytes.unit
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.differential_count.monocytes.unit
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
                        textAlign: "left",
                        marginRight: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => reportData.differential_count.eosinophils}
                      ></Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.differential_count.eosinophils.unit
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.differential_count.basophils.unit
                        }
                      ></Text>
                    </View>
                  </View>
                </View>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.electrolytes.serum_sodium.unit
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.electrolytes.serum_potassium.unit
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          referenceValues.electrolytes.serum_chloride.unit
                        }
                      ></Text>
                    </View>
                  </View>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
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
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text
                        style={{ fontSize: 10 }}
                        render={() =>
                          `Normal : ${referenceValues.fasting_plasma_glucose.normal.value}\nImapred GT : ${referenceValues.fasting_plasma_glucose.impaired_glucose_tolerance.value}\nDiabetic : ${referenceValues.fasting_plasma_glucose.diabetic.value}`
                        }
                      ></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
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
                        paddingTop: 3,
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
                        width: "20%",
                        padding: 3,
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
                        padding: 3,
                        textAlign: "left",
                      }}
                    >
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                    <View style={{ width: "15%", padding: 3 }}>
                      <Text style={{ fontSize: 10 }} render={() => ""}></Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

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
