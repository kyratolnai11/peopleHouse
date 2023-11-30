import {
  RouteProp,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EventHeader from "./EventHeader";
import { sharedStyles } from "../../../utils/SharedStyles";
import CustomButton from "./CustomButton";
import { specificEventStyles } from "./SpecificEventStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { getAttendeeUserByEventID } from "../../database/AttendeeUserDBConnection";

type RootStackParamList = {
  Availibility: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    numOfTickets: number;
    venueId: string;
    eventBrief: string;
    eventId: string;
  };
  EventSignUp: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    numOfTickets: number;
    venueId: string;
    eventBrief: string;
    eventId: string;
  };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "Availibility">;
type navProp = StackNavigationProp<RootStackParamList, "EventSignUp">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const EventAvailibityScreen: React.FC<EventScreenProps> = ({ route }) => {
  const {
    eventLocation,
    eventName,
    eventTime,
    numOfTickets,
    venueId,
    eventBrief,
    eventId,
  } = route.params;

  const isFocused = useIsFocused();
  const [ticketsLeft, setTicketsLeft] = useState(0);

  const navigation = useNavigation<navProp>();

  const handlePress = () => {
    navigation.navigate("EventSignUp", {
      eventName: eventName,
      eventLocation: eventLocation,
      eventTime: eventTime,
      numOfTickets: numOfTickets,
      venueId: venueId,
      eventBrief: eventBrief,
      eventId: eventId,
    });
  };

  useEffect(() => {
    if (isFocused) {
      getAttendeeUserByEventID(eventId).then((attendees) => {
        if (attendees && attendees.attendeeUsersByEventId) {
          setTicketsLeft(
            numOfTickets - attendees.attendeeUsersByEventId?.items.length
          );
        }
      });
    }
  }, [isFocused]);

  const ticketTextCalculator = () => {
    if (ticketsLeft >= 10) {
      return "Tickets avaliable";
    } else if (ticketsLeft < 1) {
      return "SOLD OUT";
    } else if (ticketsLeft < 10) {
      return ticketsLeft.toString() + " tickets left";
    }
  };

  const ticketText = ticketTextCalculator();

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
          <View style={{ flex: 1, height: 500 }}>
            <View style={specificEventStyles.ticketContainer}>
              <View style={specificEventStyles.ticketsHeader}>
                <Text style={specificEventStyles.ticketHeaderText}>
                  Tickets
                </Text>
              </View>
              <Text style={specificEventStyles.ticketText}>{ticketText}</Text>
              <CustomButton
                name="Sign up"
                action={() => handlePress()}
                isDisabled={ticketText === "SOLD OUT"}
              />
              <Image
                source={require("../../../assets/event-screen/chair.png")}
                style={specificEventStyles.chairImage}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventAvailibityScreen;
