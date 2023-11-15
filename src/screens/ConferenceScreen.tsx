import React from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import DescriptionSection from "../components/conference/DescriptionSection";
import ProvideSection from "../components/conference/ProvideSection";

const ConferenceScreen: React.FC = () => {
  return (
    <SafeAreaView style={sharedStyles.safeArea}>
      <ScrollView>
        <View>
          <DescriptionSection />
          <ProvideSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConferenceScreen;
