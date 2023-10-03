// SectionsScreen.tsx
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AccordionWithInfo from "../components/info-screen/AccordionWithInfo";
import CrewSection from "../components/info-screen/CrewSection";
import QuestionSection from "../components/info-screen/QuestionSection";
import OpeningHoursSection from "../components/info-screen/OpeningHoursSection";

const InfoScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ width: "100%" }}>
        <QuestionSection />
        <CrewSection />
        <AccordionWithInfo />
        <OpeningHoursSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
