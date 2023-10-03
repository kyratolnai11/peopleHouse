import React from "react";
import { View, Text } from "react-native";
import { infoStyles } from "./StyleSheet";
import Colors from "../../../utils/theme";

const OpeningHoursSection: React.FC = () => {
  return (
    <View
      style={[infoStyles.sectionOne, { backgroundColor: Colors.dark.primary }]}
    >
      <Text style={infoStyles.sectionTitle}>
        We have answered some questions
      </Text>
    </View>
  );
};

export default OpeningHoursSection;
