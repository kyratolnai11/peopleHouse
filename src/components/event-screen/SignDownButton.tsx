import React, { useState } from "react";
import { Text } from "react-native";
import { eventStyles } from "./EventStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

type CustomButtonProp = {
  name: string;
  action?: () => void;
  changeLook?: boolean;
  changeToText?: string;
};

const SignDownButton: React.FC<CustomButtonProp> = ({
  name,
  action,
  changeLook,
  changeToText,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
    setIsClicked(!isClicked);
    console.log("Button is pressed");
    if (action) action();
  };
  return (
    <TouchableOpacity
      style={[
        eventStyles.signDownButton,
        changeLook && isClicked && eventStyles.buttonClicked,
      ]}
      onPress={() => handlePress()}
    >
      <Text style={eventStyles.buttonText}>
        {isClicked && changeToText ? changeToText : name}
      </Text>
    </TouchableOpacity>
  );
};

export default SignDownButton;

//I think we should place this component in a more general place and use it everywhere we need a button (used styling from Milan's button)
