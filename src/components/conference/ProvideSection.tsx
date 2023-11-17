import React from "react";
import { View, Text, Image } from "react-native";
import { conferenceStyles } from "./ConferenceStyles";
import Colors from "../../../utils/theme";

const ProvideSection: React.FC = () => {
  return (
    <View
      style={[
        conferenceStyles.sectionContainer,
        { backgroundColor: Colors.light.mediumGrey },
      ]}
    >
      <Text
        style={[
          conferenceStyles.title,
          { paddingTop: 40, color: Colors.light.white },
        ]}
      >
        We will provide you with
      </Text>
      <View style={conferenceStyles.yellowCircle}>
        <Image source={require("../../../assets/conference/package.png")} />
      </View>
      <Text style={conferenceStyles.providerText}>
        Meeting- or conference package designed to your needs
      </Text>
      <View style={conferenceStyles.yellowCircle}>
        <Image source={require("../../../assets/conference/catering.png")} />
      </View>
      <Text style={conferenceStyles.providerText}>
        Delicious catering as per your wishes
      </Text>
      <View style={conferenceStyles.yellowCircle}>
        <Image source={require("../../../assets/conference/faq.png")} />
      </View>
      <Text style={conferenceStyles.providerText}>
        Technical assistance during your meeting if necessary
      </Text>
      <View style={conferenceStyles.yellowCircle}>
        <Image source={require("../../../assets/conference/laptop.png")} />
      </View>
      <Text style={conferenceStyles.providerText}>
        Cisco AV-equipment including big screens, audio system, projector,
        meeting phone etc.
      </Text>
      <View style={conferenceStyles.yellowCircle}>
        <Image
          source={require("../../../assets/conference/small_white_bed.png")}
        />
      </View>
      <Text style={conferenceStyles.providerText}>
        The possibility to stay at LEGO® Homestay
      </Text>
    </View>
  );
};
export default ProvideSection;
