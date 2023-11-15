import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

export const homestayStyles = StyleSheet.create({
  title: {
    color: Colors.light.tertiary,
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonSection: {
    paddingBottom: 10,
  },
  infoText: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.light.darkGrey,
    paddingBottom: 20,
  },
  sectionContainer: {
    padding: 20,
  },
  tableImage: {
    width: 300,
    resizeMode: "contain",
  },
  yellowContainer: {
    backgroundColor: Colors.light.tertiary,
    alignItems: "center",
    width: 300,
    height: 360,
    padding: 20,
    marginVertical: 10,
  },
  dashedUnderline: {
    borderBottomColor: Colors.light.black,
    borderBottomWidth: 2,
    borderStyle: "solid",
    width: "100%",
  },
  logo: { width: 38, height: 38, zIndex: 10, marginBottom: 10 },
  airplane: {
    width: 200,
    height: 120,
    marginBottom: 20,
  },
  galleryImage: {
    width: 300,
    marginTop: 10,
  },
});
