import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

export const conferenceStyles = StyleSheet.create({
  title: {
    color: Colors.light.tertiary,
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionContainer: {
    padding: 20,
    alignItems: "center",
  },
  sofaImage: {
    width: 300,
    height: 130,
    marginBottom: 20,
  },
});
