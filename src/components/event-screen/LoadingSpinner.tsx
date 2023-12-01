import React from "react";
import { ActivityIndicator, View } from "react-native";
import { specificEventStyles } from "./SpecificEventStyles";
import Colors from "../../../utils/theme";

const LoadingSpinner: React.FC = () => {
  return (
    <View style={specificEventStyles.spinnerContainer}>
      <ActivityIndicator size="large" color={Colors.light.secondary} />
    </View>
  );
};

export default LoadingSpinner;
