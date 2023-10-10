import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { homeStyles } from "../components/home-screen/Stylesheet";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ width: "100%" }}>
        <View style={homeStyles.container}>
          <Image
            source={require("../../assets/home-screen/phouse.png")}
            style={homeStyles.image}
          />
          <Text style={homeStyles.title}>Welcome to LEGO® People House</Text>
          <Text style={homeStyles.content}>
            People House is a home from home for colleagues, friends and family
            to connect, create and collaborate. People House is an inclusive
            space where diversity of thought, background, and experience are
            central to the community. No single person is more or less valued
            than another.
          </Text>
          <Text style={homeStyles.content}>
            Here you can expect events, team building, playful happenings, and
            more ping-pong than you thought humanly possible! We, the People
            House team, are excited to be open, to see what emerges and begin
            the journey of this community driven space.
          </Text>
          <View style={homeStyles.divider} />
          <Text style={{ fontSize: 25, fontWeight: "bold", paddingBottom: 20 }}>
            Opening hours
          </Text>
          <Text style={homeStyles.openingHours}>00:00 - 24:00 Every day</Text>
          <Image
            source={require("../../assets/home-screen/snooker.png")}
            style={homeStyles.image}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
