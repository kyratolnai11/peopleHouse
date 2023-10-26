import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

export const addCrewStyles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 300,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
    alignSelf: "center",
  },
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  loginButton: {
    backgroundColor: Colors.dark.primary, // Set your desired background color
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
    alignSelf: "center",
    // Adjust as needed to provide separation from other elements
  },
  loginButtonText: {
    color: "black", // Set the text color for the button
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  dateButton: {
    backgroundColor: Colors.dark.secondary, // Set your desired background color
    padding: 10,
    borderRadius: 10,
    width: 120,
    marginBottom: 10,
    // Adjust as needed to provide separation from other elements
  },
  dateButtonText: {
    color: Colors.dark.textPrimary, // Set the text color for the button
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
