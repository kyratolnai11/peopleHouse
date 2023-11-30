import React from "react";
import { Text, View } from "react-native";
import { eventStyles } from "./EventStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

type CustomButtonProp = {
  name: string;
  action?: () => void;
  isDisabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProp> = ({
  name,
  action,
  isDisabled,
}) => {
  const handlePress = () => {
    if (action) action();
  };
  return (
    <View>
      {isDisabled ? (
        <View style={[eventStyles.disabledButton]}>
          <Text style={eventStyles.buttonText}>{name}</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={[eventStyles.button]}
          onPress={() => handlePress()}
        >
          <Text style={eventStyles.buttonText}>{name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomButton;
