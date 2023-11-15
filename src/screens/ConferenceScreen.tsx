import React from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import DescriptionSection from "../components/conference/DescriptionSection";

const ConferenceScreen: React.FC = () => {
  return (
    <SafeAreaView style={sharedStyles.safeArea}>
      <ScrollView>
        <View>
          <DescriptionSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConferenceScreen;
