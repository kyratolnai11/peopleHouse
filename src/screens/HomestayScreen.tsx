import React from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import WelcomeSection from "../components/homestay/WelcomeSection";
import AccordionSection from "../components/homestay/AccordionSection";
import FacilitiesSection from "../components/homestay/FacilitiesSection";
import UponArrivalSection from "../components/homestay/UponArrivalSection";

const HomestayScreen: React.FC = () => {
  return (
    <SafeAreaView style={sharedStyles.safeArea}>
      <ScrollView>
        <View>
          <WelcomeSection />
          <AccordionSection />
          <FacilitiesSection />
          <UponArrivalSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomestayScreen;
