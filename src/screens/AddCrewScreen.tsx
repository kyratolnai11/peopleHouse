import React from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { sharedStyles } from "../../utils/SharedStyles";

const AddCrewScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ width: "100%" }}>
        <View style={sharedStyles.mainContainer}>
          <Text style={sharedStyles.screenTitle}>
            Add new member to your Crew
          </Text>
          <Text> hiiiiii</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCrewScreen;
