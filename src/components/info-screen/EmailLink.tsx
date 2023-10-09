import React from "react";
import { Linking, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sharedStyles } from "../../../utils/SharedStyles";

type EmailLinkProp = {
  name: string;
};

const EmailLink: React.FC<EmailLinkProp> = ({ name }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL("mailto:" + name)}>
      <Text style={sharedStyles.link}>{name}</Text>
    </TouchableOpacity>
  );
};

export default EmailLink;
