import React from "react";
import { View, Text } from "react-native";
import { conferenceStyles } from "./ConferenceStyles";
import { sharedStyles } from "../../../utils/SharedStyles";

type GreyTextSection = {
  title: string;
  subTitle: string;
  description: string[];
};

const GreyTextSection: React.FC<GreyTextSection> = ({
  title,
  subTitle,
  description,
}) => {
  
  return (
    <View style={conferenceStyles.greyContainer}>
      <Text
        style={[sharedStyles.text, { textAlign: "center", fontWeight: "bold" }]}
      >
        {title}
      </Text>
      <Text
        style={[sharedStyles.text, { textAlign: "center", paddingBottom: 15 }]}
      >
        {subTitle}
      </Text>

      {description.map((i) => (
        <Text style={conferenceStyles.greyText}>- {i}</Text>
      ))}
    </View>
  );
};
export default GreyTextSection;
