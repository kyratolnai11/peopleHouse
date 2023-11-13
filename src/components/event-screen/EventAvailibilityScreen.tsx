import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EventHeader from "./EventHeader";
import { sharedStyles } from "../../../utils/SharedStyles";
import CustomButton from "./CustomButton";
import { specificEventStyles } from "./SpecificEventStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { fetchAttendeeUserByEventId } from "../../database/AttendeeUserDBConnection";
import { fetchAttendeeCrewByEventId } from "../../database/AttendeeCrewDBConnection";

type RootStackParamList = {
  Availibility: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    ticketsAvailable: number;
    venueId: string;
    eventBrief: string;
    eventId: string;
  };

  EventSignUp: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    ticketsAvailable: number;
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
    ticketsAvailable,
    venueId,
    eventBrief,
    eventId,
  } = route.params;

  let numberOfTicketsLeft = ticketsAvailable;
  useEffect(() => {
    const calculateNumberOfTicketsLeft = async () => {
      const attendeeUsers = await fetchAttendeeUserByEventId(eventId);
      const attendeeCrews = await fetchAttendeeCrewByEventId(eventId);

      let totalAttendees = 0;

      if (attendeeUsers && attendeeUsers.items && attendeeCrews && attendeeCrews.items) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!attendeeCrews.items.length: ", attendeeCrews.items.length)
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!attendeeUsers.items.length: ", attendeeUsers.items.length)
        totalAttendees = attendeeCrews.items.length + attendeeUsers.items.length;
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!totalAttendees: ", totalAttendees)
      }

      numberOfTicketsLeft = ticketsAvailable - totalAttendees;
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!numberOfTicketsLeft: ", numberOfTicketsLeft)
    }

    calculateNumberOfTicketsLeft();
  }, []);

  const ticketText =
    numberOfTicketsLeft > 10
      ? "Tickets avaliable: " + numberOfTicketsLeft
      : numberOfTicketsLeft.toString() + " tickets left";

  const navigation = useNavigation<navProp>();

  const handlePress = () => {
    console.log("Event button pressed");
    navigation.navigate("EventSignUp", {
      eventName: eventName,
      eventLocation: eventLocation,
      eventTime: eventTime,
      ticketsAvailable: ticketsAvailable,
      venueId: venueId,
      eventBrief: eventBrief,
      eventId: eventId,
    });
  };

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
              <Text>
                {numberOfTicketsLeft > 10 ? (
                  <Text style={specificEventStyles.ticketText}>
                    Tickets avaliable: {numberOfTicketsLeft}
                  </Text>
                ) : (
                  <Text style={specificEventStyles.ticketText}>
                    {numberOfTicketsLeft} tickets left
                  </Text>
                )
                }
              </Text>
              <CustomButton
                name="Sign up"
                action={() => handlePress()} />
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
