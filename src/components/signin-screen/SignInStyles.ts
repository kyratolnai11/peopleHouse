import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

const SignInStyles = StyleSheet.create({
header:{
    backgroundColor: Colors.dark.primary,
    height:120,
},
headerImage:{
    height: 80,
    width:80,
    alignSelf: 'flex-end',
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
    fontWeight: 'bold',
    marginBottom: 26,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  passwordTextInput: {
    flex: 1,
    height: 40,
  },
  footer: {
    height: 50,
    backgroundColor: Colors.dark.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: Colors.dark.primary, // Set your desired background color
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
    // Adjust as needed to provide separation from other elements
  },
  loginButtonText: {
    color: 'white', // Set the text color for the button
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignInStyles;