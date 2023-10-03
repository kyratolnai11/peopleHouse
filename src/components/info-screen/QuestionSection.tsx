import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

const QuestionSection: React.FC = () => {
  return (
    <View style={styles.sectionOne}>
      <Text style={styles.sectionTitle}>We have answered some questions</Text>
      <View style={styles.imagesectionOne}>
        <Image
          source={require("./../../../assets/info-screen/question_mark.png")}
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
          How can I see all events and activities happening in the People house?
        </Text>
        <Text style={styles.text}>
          All of our great events can be found in the “Events” page.
        </Text>
        <Text style={styles.questionText}>Can I use the LEGO® Arena?</Text>
        <Text style={styles.text}>
          In the Arena, you are of course welcome to change the floors and use
          the basketball hoop, but all nets and goals will not be available for
          use until we have a proper scheduling system in place.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: Colors.dark.secondary,
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 20,
  },
});

export default QuestionSection;
