import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

export const eventStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: Colors.light.primaryBackground,
  },
  image: {
    width: 350,
    height: 150,
    borderTopLeftRadius: 12.5,
    borderTopRightRadius: 12.5,
    overflow: "hidden",
    resizeMode: "cover",
    marginTop: -15,
  },
  text: {
    textAlign: "justify",
    maxWidth: 300,
  },
  textContainer: {
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.buttonBackground,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  dateTimeText: {
    color: Colors.dark.secondary,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
});
