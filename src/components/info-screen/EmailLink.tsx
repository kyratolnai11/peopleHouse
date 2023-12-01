import React from "react";
import { Linking, Text } from "react-native";
import { infoStyles } from "./InfoScreenStyleSheet";
import { TouchableOpacity } from "react-native-gesture-handler";

type EmailLinkProp = {
  name: string;
  color?: string;
};

const EmailLink: React.FC<EmailLinkProp> = ({ name, color }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL("mailto:" + name)}>
      <Text style={[infoStyles.link, { color: color }]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default EmailLink;
