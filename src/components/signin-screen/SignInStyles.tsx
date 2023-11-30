import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

const SignInStyles = StyleSheet.create({
  header: {
    backgroundColor: Colors.light.primary,
    height: 120,
  },
  headerImage: {
    height: 80,
    width: 80,
    alignSelf: "flex-end",
    marginTop: 40,
    marginRight: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.light.primaryBackground,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.light.primaryBackground,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 26,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
  },
  passwordTextInput: {
    flex: 1,
    height: 40,
  },
  footer: {
    height: 75,
    backgroundColor: Colors.light.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: Colors.light.primary,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: "50%",
    alignSelf: "center",
  },
  loginButtonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  eye: {
    paddingRight: 10,
  },
  footerParagraphText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default SignInStyles;
