import React from "react";
import { View, Text, Image } from "react-native";
import { conferenceStyles } from "./ConferenceStyles";
import { sharedStyles } from "../../../utils/SharedStyles";

const DescriptionSection: React.FC = () => {
  return (
    <View style={conferenceStyles.sectionContainer}>
      <Text style={[conferenceStyles.title, { paddingTop: 40 }]}>
        Welcome to LEGO® Homestay!
      </Text>
      <Image
        source={require("../../../assets/conference/sofas.png")}
        style={conferenceStyles.sofaImage}
      />
      <Text style={[sharedStyles.text, { textAlign: "center" }]}>
        Don't know where to hold your next conference? LEGO® campus has the
        perfect setting for your meetings and conferences. In our amazing
        conference center, we will find the best suited room for your needs. Our
        meeting rooms can fit anything from 6 to 500 people.
      </Text>
    </View>
  );
};
export default DescriptionSection;
