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
  yellowCircle: {
    backgroundColor: Colors.light.tertiary,
    padding: 25,
    borderRadius: 300,
    marginBottom: 20,
    marginTop:25,
  },
  providerText: {
    fontSize: 18,
    paddingBottom: 10,
    lineHeight: 28,
    color: Colors.light.white,
    textAlign: "center",
  },
});
