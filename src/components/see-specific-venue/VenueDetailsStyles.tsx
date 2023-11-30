import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

export const venueDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  purpleSection: {
    backgroundColor: Colors.light.secondary,
    padding: 20,
    marginHorizontal: -20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 5,
  },
  sectionText: {
    fontSize: 18,
    color: "white",
  },
  thirdSectionTitle: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  rowSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  openingHoursSection: {
    width: 175,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  venueNameBackground: {
    backgroundColor: "#2e2d2d",
    padding: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-3deg" }],
    width: 200,
    height: 50,
  },
  venueName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  firstSection: {
    padding: 16,
  },
  firstSectionText: {
    paddingTop: 15,
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  descriptionText: {
    fontSize: 18,
    paddingBottom: 20,
    color: "white",
    textAlign: "justify",
  },
  thirdSectionText: {
    fontSize: 15,
  },
  decorativeLine: {
    height: 1,
    backgroundColor: "F6F1EE",
    marginVertical: 10,
    marginBottom: 20,
  },
});
