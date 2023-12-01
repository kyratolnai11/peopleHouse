import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

export const crewStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: Colors.light.primaryBackground,
  },
  card: {
    borderColor: Colors.light.primary,
    borderRadius: 1,
    borderWidth: 3,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 1,
    overflow: "hidden",
    resizeMode: "contain",
    marginTop: -5,
  },
  text: {
    fontSize: 30,
    textAlign: "justify",
  },
  textContainer: {
    padding: 1,
    alignItems: "center",
  },
  secondaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
