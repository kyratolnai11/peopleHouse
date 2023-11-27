import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

const signDownFromEventStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.primaryBackground,
        height: '100%',
      },
crewsection: {
    marginTop: 25,
    fontSize:17,
    marginLeft: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noCrewText:{
    marginTop: 10,
    fontSize: 17,
    marginLeft: 15,
    marginBottom: 5,
  },
  crewGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: -2,
  },
  crewCards: {
    width: '45%', 
    margin: '1%',
  },
  textTEST:{
    marginTop: -10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: Colors.light.buttonBackground,
    padding: 10,
    borderRadius: 10,
    marginTop: -10,
    width: 120,
    alignSelf: "center",
  },
  buttonText:{
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  userInfoContainer: {},
  userImageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  userNameContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  infoItem: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emailContainer: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailLabel: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 13,
    width: 250,
    marginTop: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 9,
  },
});

export default signDownFromEventStyles;