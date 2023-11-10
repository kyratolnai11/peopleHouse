import React from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import WelcomeSection from "../components/homestay/WelcomeSection";
import AccordionSection from "../components/homestay/AccordionSection";

const HomestayScreen: React.FC = () => {
  return (
    <SafeAreaView style={sharedStyles.safeArea}>
      <ScrollView>
        <View>
          <WelcomeSection />
          <AccordionSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomestayScreen;
