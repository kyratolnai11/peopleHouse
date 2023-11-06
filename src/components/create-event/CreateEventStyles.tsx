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
});
