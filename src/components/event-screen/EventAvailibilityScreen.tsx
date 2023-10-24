import { RouteProp } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type RootStackParamList = {
  Availibility: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    numberOfTickets: number;
    ticketsLeft: number;
  };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "Availibility">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const EventAvailibityScreen: React.FC<EventScreenProps> = ({ route }) => {
  const { eventLocation, eventName, eventTime, ticketsLeft, numberOfTickets } =
    route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hiiiiii{eventLocation}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventAvailibityScreen;
