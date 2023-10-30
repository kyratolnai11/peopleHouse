import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

export const specificCrewStyles = StyleSheet.create({
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
    
});
