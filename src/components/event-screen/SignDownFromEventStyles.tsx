import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

const signDownFromEventStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primaryBackground,
    height: "100%",
  },
  button: {
    backgroundColor: Colors.light.buttonBackground,
    padding: 10,
    borderRadius: 10,
    marginTop: -10,
    width: 120,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  userInfoContainer: {},
  userImageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  userNameContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    height: 400,
  },
  infoItem: {
    fontSize: 20,
    fontWeight: "bold",
  },
  emailContainer: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailLabel: {
    fontSize: 13,
    fontWeight: "bold",
  },
  emailInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 13,
    width: 250,
    marginTop: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 9,
  },
});

export default signDownFromEventStyles;
