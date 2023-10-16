import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

export const venueStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.light.primaryBackground,
  },
  image: {
    width: 390,
    borderRadius: 12.5,
    overflow: "hidden",
    resizeMode: "contain",
    marginTop: -5,
  },
  text: {
    textAlign: "justify",
  },
  textContainer: {
    padding: 15,
  },
});
