import React from "react";
import { View, Text } from "react-native";
import { homestayStyles } from "./HomestayStyles";
import { sharedStyles } from "../../../utils/SharedStyles";
import CustomButton from "../event-screen/CustomButton";

const WelcomeSection: React.FC = () => {
  return (
    <View style={homestayStyles.sectionContainer}>
      <Text style={[homestayStyles.title, { paddingTop: 40 }]}>
        Welcome to LEGO® Homestay!
      </Text>
      <Text style={sharedStyles.text}>
        LEGO® Homestay is your home away from home! Here you will find 59 modern
        rooms with Chromecast, Nespresso machines and much more, all for you to
        enjoy. The rooms can be booked through the official LEGO® channels in
        the Travel Management System; NEO, OBT, AMEX etc. The price of a room is
        975DKK and includes breakfast. It is not allowed to have guests staying
        overnight in your room. We look forward to welcoming you in LEGO® Campus
        and LEGO Homestay!
      </Text>
      <View style={homestayStyles.buttonSection}>
        <CustomButton name="Book room" />
        <CustomButton name="Book conference" />
      </View>
      <Text style={homestayStyles.infoText}>LEGO® employees only</Text>
    </View>
  );
};

export default WelcomeSection;
