import React from "react";
import { Linking, Text } from "react-native";
import { infoStyles } from "./StyleSheet";
import { TouchableOpacity } from "react-native-gesture-handler";

type EmailLinkProp = {
  name: string;
};

const EmailLink: React.FC<EmailLinkProp> = ({ name }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL("mailto:" + name)}>
      <Text style={infoStyles.link}>{name}</Text>
    </TouchableOpacity>
  );
};

export default EmailLink;
