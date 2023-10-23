import Colors from "../../../utils/theme";
import { StyleSheet } from "react-native";

export const venueDetailsStyles = StyleSheet.create({
    scrollView:{
        flex: 1,
    },
    container: {
        flex: 1,
      },
      purpleSection: {
        backgroundColor: Colors.dark.secondary,
        padding: 16,
      },
      mainSection: {
        padding: 16,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
        paddingBottom: 5,
      },
      sectionText: {
        fontSize: 18,
        color: 'white',
        
      },
      thirdSectionTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
      },
      rowSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10, // Adjust the left margin to control the space between columns
        marginRight: 15,
      },
      openingHoursSection: {
        width: 175, // Set a fixed width for the "Opening Hours" section
        whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
        textOverflow: 'ellipsis', // Add an ellipsis (...) for text that overflows
        overflow: 'hidden', // Hide overflowed text
      },
      venueNameBackground: {
        backgroundColor: '#2e2d2d', 
        padding: 5, 
        alignSelf: 'flex-start', 
        transform: [{ rotate: '-3deg' }]

      },
      venueName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      
      firstSection:{
        padding: 16,
      },
      firstSectionText:{
        paddingTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 15,
      },
      descriptionText: {
        fontSize: 18,
        paddingBottom: 20,
        color: 'white',
        textAlign: 'justify', // Add text justification
      },
      thirdSectionText:{
        fontSize: 15,
      },
      decorativeLine:{
        height: 1, // Adjust the height as needed
  backgroundColor: 'white', // Set the color of the line
  marginVertical: 10, // Add margin to control the spacing above and below the line
      },
});
