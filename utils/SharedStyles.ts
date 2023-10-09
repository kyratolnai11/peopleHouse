import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
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
});

//Practices:
//Always use SafeAreaView and ScrollView for screens
//
