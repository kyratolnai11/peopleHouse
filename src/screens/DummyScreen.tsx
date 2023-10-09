import React from "react";
import { View, Text } from "react-native";
import { sharedStyles } from "../../utils/SharedStyles";

const DummyPage = () => {
  return (
    <View style={sharedStyles.mainContainer}>
      <Text style={sharedStyles.screenTitle}>This is a Dummy Page</Text>
      <Text style={sharedStyles.centeredText}>
        You can customize it with your content
      </Text>
    </View>
  );
};

export default DummyPage;
