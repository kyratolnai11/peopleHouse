import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

export const specificEventStyles = StyleSheet.create({
  showMoreText: {
    fontSize: 18,
    color: Colors.light.textPrimary,
    fontWeight: "bold",
  },

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
    width: 350,
    height: 350,
    borderRadius: 20,
    position: "relative",
    alignItems: "center",
    marginTop: 60,
    justifyContent: "space-between",
  },
  ticketText: {
    marginTop: 100,
    fontSize: 20,
  },
  chairImage: {
    width: 100,
    resizeMode: "cover",
  },
  button: {
    backgroundColor: Colors.dark.lightGrey,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
    alignSelf: "center",
  },
  buttonText: {
    color: Colors.dark.grey,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  rowContainer: {
    flex: 1,
    alignItems: "center",
  },
  communityText: { textAlign: "center", marginTop: -20, marginLeft: 20 },
  byText: {
    color: Colors.dark.secondary,
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
    textAlign: "center",
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginTop: -37,
    zIndex: 0,
    alignSelf: "center",
  },

  headerText: {
    color: Colors.dark.secondary,
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 15,
  },
  row: {
    flexDirection: "row", // Display the Image and Text components in a row
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    marginBottom: 30,
  },
  spinnerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: Colors.dark.white,
  },
  image: {
    width: 500,
    height: 200,
    resizeMode: "cover",
    marginTop: -37,
    zIndex: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginTop: -60,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
  },
  eventName: {
    color: Colors.light.textSecondary,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    zIndex: 2,
    marginTop: -20,
  },
  venueName: {
    color: Colors.light.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 55,
    zIndex: 2,
  },
  date: {
    color: Colors.light.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 90,
    zIndex: 2,
  },
  brief: {
    color: Colors.light.textSecondary,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 125,
    zIndex: 2,
  },
});
