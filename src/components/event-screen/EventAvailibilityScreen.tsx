import { RouteProp } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EventHeader from "./EventHeader";
import { sharedStyles } from "../../../utils/SharedStyles";

type RootStackParamList = {
  Availibility: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    numberOfTickets: number;
    ticketsLeft: number;
    venueId: string;
    eventBrief: string;
  };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "Availibility">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const EventAvailibityScreen: React.FC<EventScreenProps> = ({ route }) => {
  const {
    eventLocation,
    eventName,
    eventTime,
    ticketsLeft,
    numberOfTickets,
    venueId,
    eventBrief,
  } = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <EventHeader
            venueId={venueId}
            title={eventName}
            venueName={eventLocation}
            time={eventTime}
            brief={eventBrief}
          />
          <Text>{ticketsLeft}</Text>
          <Text>{numberOfTickets}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventAvailibityScreen;
