// SectionsScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Appearance,
  Image,
  SafeAreaView,
} from "react-native";
import Colors from "../../utils/theme";
import { ScrollView } from "react-native-gesture-handler";

const InfoScreen: React.FC = () => {
  const colorScheme = Appearance.getColorScheme();

  const styles = StyleSheet.create({
    sectionOne: {
      padding: 16,
      backgroundColor:
        colorScheme === "dark"
          ? Colors.dark.primaryBackground
          : Colors.light.primaryBackground,
      marginBottom: 20,
      borderRadius: 8,
    },
    sectionTwo: {
      backgroundColor: Colors.dark.secondary,
      marginBottom: 20,
      width: "100%"
    },
    innerSection: {
      alignItems: "center", // Vertically center items
      padding: 16,
    },
    sectionTitle: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#730012",
      textAlign: "center",
    },
    imagesectionOne: {
      marginRight: 16,
      width: "100%",
    },
    image: {
      width: 150, // Adjust the width as needed
      height: 150, // Adjust the height as needed
      resizeMode: "cover", // You can change the resizeMode as needed
      borderRadius: 8,
      alignSelf: "center", // Add a border radius for a rounded image
    },
    text: {
      fontSize: 16,
      textAlign: "justify",
    },
    questionText: {
      color: Colors.dark.secondary,
      fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 10,
      paddingTop: 20,
    },
  });

  return (
    <SafeAreaView style={styles.sectionOne}>
      <ScrollView style={{width: "100%"}}>
        <View style={styles.sectionOne}>
          <Text style={styles.sectionTitle}>
            We have answered some questions
          </Text>
          <View>
            <View style={styles.innerSection}>
              <View style={styles.imagesectionOne}>
                <Image
                  source={require("./../../assets/info-screen/question_mark.png")}
                  style={styles.image}
                />
              </View>
              <View>
                <Text style={styles.questionText}>
                  Can I book venues and areas for activities?
                </Text>
                <Text style={styles.text}>
                  Timeslots at the venues can be booked at the “Venues” page and
                  teambuilding sessions and guided tours can be booked via
                  legocampusevents@lego.com.
                </Text>
                <Text style={styles.questionText}>
                  How can I see all events and activities happening in the
                  People house?
                </Text>
                <Text style={styles.text}>
                  All of our great events can be found in the “Events” page.
                </Text>
                <Text style={styles.questionText}>
                  Can I use the LEGO® Arena?
                </Text>
                <Text style={styles.text}>
                  In the Arena, you are of course welcome to change the floors
                  and use the basketball hoop, but all nets and goals will not
                  be available for use until we have a proper scheduling system
                  in place.
                </Text>
              </View>
            </View>
            <View style={styles.sectionTwo}>
                <View style={styles.innerSection}>
              <Text>Hello</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
