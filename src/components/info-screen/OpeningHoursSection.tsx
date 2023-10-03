import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../utils/theme";

const OpeningHoursSection: React.FC = () => {
  return (
    <View style={styles.sectionOne}>
      <Text style={styles.sectionTitle}>We have answered some questions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionOne: {
    alignItems: "center",
    backgroundColor: Colors.light.primary,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 8,
    color: "#730012",
    textAlign: "center",
  },
});

export default OpeningHoursSection;
