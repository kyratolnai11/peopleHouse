import React from "react";
import { View, Text, Linking } from "react-native";
import { conferenceStyles } from "./ConferenceStyles";
import { sharedStyles } from "../../../utils/SharedStyles";
import Colors from "../../../utils/theme";
import GreyTextSection from "./GreyTextSection";
import CustomButton from "../event-screen/CustomButton";

const ForMeetingsSection: React.FC = () => {
  return (
    <View style={conferenceStyles.sectionContainer}>
      <Text
        style={[
          conferenceStyles.title,
          { paddingTop: 40, color: Colors.light.black },
        ]}
      >
        For meetings and conferences
      </Text>
      <Text style={[sharedStyles.text, { textAlign: "center" }]}>
        Meetings and conferences can be booked with LEGO Homestay, who will find
        the best suited room for your needs - the meeting rooms fit anything
        from 6 persons and up to 500+. The following can be booked with LEGO
        Homestay:
      </Text>
      <GreyTextSection
        description={[
          "Breakfast",
          "Snacks with two different juices",
          "Lunch with one drink",
          "Afternoon coffee/the with homemade cake",
          "Professional service and assistance during meeting",
        ]}
        title="Day meeting"
        subTitle="From 8:00-17:00 - 625DKK per person"
      />
      <GreyTextSection
        description={[
          "Breakfast",
          "Snacks with two different juices",
          "Lunch with one drink",
          "Afternoon coffee/the with homemade cake",
          "Three course meal - chefs choice",
          "Professional service and assistance during meeting",
        ]}
        title="All-day meeting"
        subTitle="From 8:00-21:00 - 955DKK per person"
      />
      <GreyTextSection
        description={[
          "Breakfast",
          "Snacks with two different juices",
          "Lunch with one drink",
          "Afternoon coffee/the with homemade cake",
          "Three course meal - chefs choice",
          "Overnight stay in the amazing LEGO Homestays' Superior Room",
        ]}
        title="Conference meeting"
        subTitle="1995DKK per person:"
      />
      <CustomButton
        name={"Request booking"}
        action={() => Linking.openURL("mailto:homestaybooking@lego.com")}
      />
    </View>
  );
};
export default ForMeetingsSection;
