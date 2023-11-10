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
});
