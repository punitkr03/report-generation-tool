import {
  Document,
  Font,
  Image,
  Page,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import { referenceValues } from "@/constants/reference-values";

// Create Document Component
export default function Report({ data }: { data: string }) {
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
          <View
            style={{
              width: "97%",
              marginTop: "2px",
              alignSelf: "center",
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
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  Calcium
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "97%",
              marginTop: "2px",
              alignSelf: "center",
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
                  textAlign: "center",
                  marginRight: 10,
                }}
              >
                <Text style={{ fontSize: 10 }} render={() => data}></Text>
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
                  render={() => referenceValues.calcium.value}
                ></Text>
              </View>
              <View style={{ width: "10%", padding: 3 }}>
                <Text
                  style={{ fontSize: 10 }}
                  render={() => referenceValues.calcium.unit}
                ></Text>
              </View>
            </View>
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
