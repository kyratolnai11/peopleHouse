import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.secondaryBackground,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 31,
    fontWeight: "bold",
    marginVertical: 40,
    textAlign: "center",
  },
  content: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 10,
    lineHeight: 28,
  },
  divider: {
    borderBottomWidth: 2,
    borderColor: Colors.dark.secondary,
    width: 400,
    marginVertical: 20,
  },
  image: { resizeMode: "contain", width: 450, height: 300 },
  openingHours: {
    fontSize: 20,
  }
});
