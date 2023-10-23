import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";


  
const myInfoStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoContainer: {
    },
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
    userTypeContainer: {
        marginTop: 10,
        marginLeft: 15,
      },
      userTypeLabel: {
        fontSize: 13,
        fontWeight: 'bold',
      },
      userTypeInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 13,
        width: 250,
        marginTop: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 9,
      },
      crewsection:{
        marginTop: 25,
        fontSize: 17,
        marginLeft: 15,
        fontWeight: 'bold',
      },
      crews: {
        marginTop: 10,
        fontSize: 14,
        marginLeft: 15,
      },
  });
  
  export default myInfoStyles;
  