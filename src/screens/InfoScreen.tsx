// SectionsScreen.tsx
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AccordionWithInfo from "../components/hamburger-menu/AccordionWithInfo";
import CrewSection from "../components/hamburger-menu/CrewSection";
import QuestionSection from "../components/hamburger-menu/QuestionSection";
import OpeningHoursSection from "../components/hamburger-menu/OpeningHoursSection";

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
