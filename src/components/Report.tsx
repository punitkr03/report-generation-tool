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
                <Text style={{ fontSize: 10, fontWeight: 600 }}>
                  Patient Name :- MR./MRS.
                </Text>
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
                    width: "35%",
                    padding: 3,
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: 700 }}>
                    INVESTIGATION
                  </Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    padding: 3,
                    textAlign: "center",
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
                <View style={{ width: "10%", padding: 3 }}>
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
                        textAlign: "center",
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
                    <View style={{ width: "10%", padding: 3 }}>
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
                        textAlign: "center",
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
                    <View style={{ width: "10%", padding: 3 }}>
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
                        textAlign: "center",
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
                    <View style={{ width: "10%", padding: 3 }}>
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
                        textAlign: "center",
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
                    <View style={{ width: "10%", padding: 3 }}>
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
                        textAlign: "center",
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
                        render={() => referenceValues.btct.clotting_time.value}
                      ></Text>
                    </View>
                    <View style={{ width: "10%", padding: 3 }}>
                      <Text
                        style={{ fontSize: 10 }}
                        render={() => referenceValues.btct.clotting_time.unit}
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
