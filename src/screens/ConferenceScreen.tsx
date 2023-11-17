import React from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import DescriptionSection from "../components/conference/DescriptionSection";
import ProvideSection from "../components/conference/ProvideSection";
import ForMeetingsSection from "../components/conference/ForMeetingsSection";

const ConferenceScreen: React.FC = () => {
  return (
    <SafeAreaView style={sharedStyles.safeArea}>
      <ScrollView>
        <View>
          <DescriptionSection />
          <ProvideSection />
          <ForMeetingsSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConferenceScreen;
