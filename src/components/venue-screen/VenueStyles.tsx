import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

export const venueStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: Colors.light.primaryBackground,
  },
  image: {
    width: 350,
    borderTopLeftRadius: 12.5,
    borderTopRightRadius: 12.5,
    overflow: "hidden",
    resizeMode: "cover",
    marginTop: -5,
  },
  text: {
    textAlign: "justify",
  },
  textContainer: {
    padding: 15,
    maxWidth: 350,
  },
});
