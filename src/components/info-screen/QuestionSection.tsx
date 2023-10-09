import React from "react";
import { View, Text, Image, } from "react-native";
import { infoStyles } from "./StyleSheet";
import { sharedStyles } from "../../../utils/SharedStyles";

const QuestionSection: React.FC = () => {
  return (
    <View style={[sharedStyles.mainContainer, infoStyles.bgColor]}>
      <Text style={infoStyles.sectionTitle}>We have answered some questions</Text>
      <View style={infoStyles.imagesectionOne}>
        <Image
          source={require("./../../../assets/info-screen/question_mark.png")}
          style={infoStyles.image}
        />
      </View>
      <View>
        <Text style={infoStyles.questionText}>
          Can I book venues and areas for activities?
        </Text>
        <Text style={sharedStyles.text}>
          Timeslots at the venues can be booked at the “Venues” page and
          teambuilding sessions and guided tours can be booked via
          legocampusevents@lego.com.
        </Text>
        <Text style={infoStyles.questionText}>
          How can I see all events and activities happening in the People house?
        </Text>
        <Text style={sharedStyles.text}>
          All of our great events can be found in the “Events” page.
        </Text>
        <Text style={infoStyles.questionText}>Can I use the LEGO® Arena?</Text>
        <Text style={sharedStyles.text}>
          In the Arena, you are of course welcome to change the floors and use
          the basketball hoop, but all nets and goals will not be available for
          use until we have a proper scheduling system in place.
        </Text>
      </View>
    </View>
  );
};



export default QuestionSection;
