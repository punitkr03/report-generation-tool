import {
  Document,
  Image,
  Page,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";

// Create Document Component
export default function Report() {
  return (
    <PDFViewer width="100%" height="800px">
      <Document>
        <Page size="A4">
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
              fontWeight: "bold",
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
                <Text style={{ fontSize: 10 }}>Patient Name :- MR./MRS.</Text>
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
                marginTop: "5px",
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
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 10 }}>INVESTIGATION</Text>
                </View>
                <View
                  style={{
                    width: "15%",
                    padding: 5,
                    textAlign: "center",
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                    RESULT
                  </Text>
                </View>
                <View
                  style={{
                    width: "35%",
                    padding: 5,
                    textAlign: "center",
                  }}
                >
                  <Text style={{ fontSize: 10 }}>REFERENCE RANGE</Text>
                </View>
                <View style={{ width: "10%", padding: 5 }}>
                  <Text style={{ fontSize: 10 }}>UNIT</Text>
                </View>
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
