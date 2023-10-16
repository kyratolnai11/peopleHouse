import React from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { sharedStyles } from "../../utils/SharedStyles";
import CrewDropDown from "../components/add-crew/CrewDropDown";

const AddCrewScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ width: "100%" }}>
        <View style={sharedStyles.mainContainer}>
          <Text style={sharedStyles.screenTitle}>
            Add new member to your Crew
          </Text>
          <CrewDropDown />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCrewScreen;
