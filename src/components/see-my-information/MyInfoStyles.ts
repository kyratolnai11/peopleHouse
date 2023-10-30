import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

const myInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primaryBackground,
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
  crewsection: {
    marginTop: 25,
    fontSize: 17,
    marginLeft: 15,
    fontWeight: 'bold',
    marginBottom: 5,
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
    margin: 5,
  },
  crewCards: {
    width: '48%', 
    margin: '1%',
  },
  addCrewButton: {
    backgroundColor: Colors.dark.primary, 
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
    marginBottom: 20,
    
  },

  addCrewButtonText: {
    color: 'black', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadMessage:{
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default myInfoStyles;
