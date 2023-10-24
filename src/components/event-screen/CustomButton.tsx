import React from "react";
import { Text } from "react-native";
import { eventStyles } from "./EventStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

type CustomButtonProp = {
  name: string;
  action?: () => void;
};

const CustomButton: React.FC<CustomButtonProp> = ({ name, action }) => {
  const handlePress = () => {
    console.log("Button is pressed");
    if (action) action();
  };
  return (
    <TouchableOpacity
      style={[eventStyles.button]}
      onPress={() => handlePress()}
    >
      <Text style={eventStyles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

//I think we should place this component in a more general place and use it everywhere we need a button (used styling from Milan's button)
