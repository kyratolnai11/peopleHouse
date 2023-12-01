import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AccordionWithInfoSection from "../components/info-screen/AccordionWithInfoSection";
import CrewSection from "../components/info-screen/CrewSection";
import QuestionSection from "../components/info-screen/QuestionSection";
import OpeningHoursSection from "../components/info-screen/OpeningHoursSection";
import StillHaveQuestionSection from "../components/info-screen/StillHaveQuestionsSection";

const InfoScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ width: "100%" }}>
        <QuestionSection />
        <CrewSection />
        <AccordionWithInfoSection />
        <OpeningHoursSection />
        <StillHaveQuestionSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
