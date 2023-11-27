import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { getFormattedDate, getVenueLogos, getVenueName } from "../constants";
import ShowMore from "../components/event-screen/ShowMore";
import CustomButton from "../components/event-screen/CustomButton";
import { StackNavigationProp } from "@react-navigation/stack";
import EventHeader from "../components/event-screen/EventHeader";
import { fetchEventById } from "../database/EventDBConnection";
import { Event } from "../API";
import { specificEventStyles } from "../components/event-screen/SpecificEventStyles";
import LoadingSpinner from "../components/event-screen/LoadingSpinner";

type RootStackParamList = {
  Event: { eventId: string; sourceScreen?: string };
  EventSignDown: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    ticketsLeft: number;
    venueId: string;
    eventBrief: string;
    eventId: string;
    attendeeUserId?: string;
  };
  MyBookings: {
    eventId: string;
    sourceScreen?: string;
    attendeeUserId?: string;
  };
};

type MyBookingsScreenRouteProp = RouteProp<RootStackParamList, "MyBookings">;
type navProp = StackNavigationProp<RootStackParamList, "EventSignDown">;

type EventScreenProps = {
  route: MyBookingsScreenRouteProp;
};

const MyBookingSpecificEvent: React.FC<EventScreenProps> = ({ route }) => {
  const { eventId, attendeeUserId } = route.params;
  const [event, setEventData] = useState<Event>();

  useEffect(() => {
    fetchEventById(eventId)
      .then((eventsdata) => {
        console.log("EventsData: " + eventsdata);
        if (eventsdata && eventsdata.getEvent) {
          console.log("Get event hahahaa: " + eventsdata.getEvent);
          setEventData(eventsdata.getEvent as Event);
          console.log("The specific event is set");
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  if (event === undefined) {
    return <LoadingSpinner />;
  }

  const logo = getVenueLogos(event.venueId);

  const venueName = getVenueName(event.venueId);

  const formattedDateTime = getFormattedDate(
    event.startDateTime,
    event.endDateTime
  );

  //navigation to Availability screen
  const navigation = useNavigation<navProp>();

  const handlePress = () => {
    console.log("Event button pressed");
    navigation.navigate("EventSignDown", {
      eventName: event.title,
      eventLocation: venueName,
      eventTime: formattedDateTime,
      ticketsLeft: event.numOfTickets,
      venueId: event.venueId,
      eventBrief: event.brief,
      eventId: event.id,
      attendeeUserId: attendeeUserId,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <EventHeader
            venueId={event.venueId}
            title={event.title}
            venueName={venueName}
            time={formattedDateTime}
            brief={event.brief}
          />
          <View style={specificEventStyles.row}>
            <Image source={logo} style={specificEventStyles.logo} />
            <View style={specificEventStyles.rowContainer}>
              <Text
                style={[sharedStyles.text, specificEventStyles.communityText]}
              >
                <Text style={specificEventStyles.byText}>By: </Text>
                {event.host}
              </Text>
            </View>
          </View>

          <Text style={specificEventStyles.headerText}>Event details</Text>
          <ShowMore text={event.description} />
          <Text style={specificEventStyles.headerText}>Event agenda</Text>
          <ShowMore text={event.agenda} />

          <CustomButton name="Manage my booking" action={() => handlePress()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyBookingSpecificEvent;
