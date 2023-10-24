import { StyleSheet } from "react-native";
import Colors from "./theme";

export const sharedStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: Colors.light.primaryBackground,
  },
  screenTitle: {
    fontSize: 31,
    fontWeight: "bold",
    paddingVertical: 40,
    textAlign: "center",
  },
  secondaryTitle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  centeredText: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 10,
    lineHeight: 28,
  },
  text: {
    fontSize: 18,
    paddingBottom: 10,
    lineHeight: 25,
  },
  link: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

//Practices:
//Always use SafeAreaView and ScrollView for screens
//
