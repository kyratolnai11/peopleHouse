import React from "react";
import { Text } from "react-native";
import { eventStyles } from "./EventStyles"
import { TouchableOpacity } from "react-native-gesture-handler";

type CustomButtonProp = {
  name: string;
};

const CustomButton: React.FC<CustomButtonProp> = ({ name }) => {
  return (
    <TouchableOpacity style={eventStyles.button}>
      <Text style={eventStyles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;


//I think we should place this component in a more general place and use it everywhere we need a button (used styling from Milan's button)