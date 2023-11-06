import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

export const createEventStyles = StyleSheet.create({
  ticketsHeader: {
    backgroundColor: Colors.light.primary,
    transform: "rotate(-1deg)",
    width: 180,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    marginTop: -20,
  },
  ticketHeaderText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  ticketContainer: {
    borderWidth: 1,
    borderColor: Colors.light.textPrimary,
    backgroundColor: Colors.light.white,
    width: 350,
    height: 255,
    borderRadius: 20,
    position: "relative",
    alignItems: "center",
    marginTop: 30,
  },
  ticketText: {
    marginTop: 50,
    fontSize: 20,
  },
  chairImage: {
    width: 100,
    resizeMode: "cover",
  },
  secondaryTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.light.secondary,
    paddingTop: 10,
  },
  datePickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: -10,
    paddingTop: 20,
  },
  labelText: {
    paddingLeft: 10,
    paddingBottom: 5,
  },
  contWithPadding: {
    padding: 20,
  },
  whiteBackground: {
    backgroundColor: Colors.light.primaryBackground,
    height: "100%",
  },
  textArea: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: Colors.light.textSecondary,
    height: 200,
    textAlignVertical: "top",
  },
  headerSection: {
    width: "100%",
    padding: 20,
    backgroundColor: Colors.light.secondary,
  },
  brief: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: Colors.light.textSecondary,
    height: 100,
    textAlignVertical: "top",
  },
  title: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: Colors.light.textSecondary,
    height: 40,
    textAlignVertical: "top",
  },
});
