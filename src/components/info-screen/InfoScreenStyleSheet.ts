import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

export const infoStyles = StyleSheet.create({
  sectionOne: {
    alignItems: "center",
    backgroundColor: Colors.light.primaryBackground,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 8,
    color: "#730012",
    textAlign: "center",
  },
  imagesectionOne: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
  },
  questionText: {
    color: Colors.light.secondary,
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 20,
  },
  sectionTwo: {
    backgroundColor: Colors.light.secondary,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 35,
    alignItems: "center",
  },
  descriptionSTwo: {
    fontSize: 16,
    color: Colors.light.textSecondary,
    paddingBottom: 10,
    textAlign: "justify",
  },
  imageSTwo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 400,
    marginTop: -30,
  },
  sTwoTitle: {
    fontSize: 25,
    color: Colors.light.textSecondary,
    paddingBottom: 20,
  },
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    paddingBottom: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginTop: 10,
  },
  openingHPicture: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 350,
    marginTop: -20,
  },
  openingHPictureTwo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 250,
  },
  hourPicOneCont: {
    transform: "rotate(-5deg)",
  },
  hourPicTwoCont: {
    transform: "rotate(7deg)",
    position: "absolute",
    top: 200,
    right: 50,
  },
  titleSection: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  descriptionWithPadding: {
    fontSize: 16,
    paddingBottom: 10,
  },
  imageSection4: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  link: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
