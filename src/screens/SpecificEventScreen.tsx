import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { getFormattedDate, getVenueLogos, getVenueName } from "../constants";
import Colors from "../../utils/theme";
import ShowMore from "../components/event-screen/ShowMore";
import CustomButton from "../components/event-screen/CustomButton";
import { StackNavigationProp } from "@react-navigation/stack";
import EventHeader from "../components/event-screen/EventHeader";
import { fetchEventById } from "../database/EventDBConnection";
import { Event } from "../API";

type RootStackParamList = {
  Event: { eventId: string };
  Availibility: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    ticketsLeft: number;
    venueId: string;
    eventBrief: string;
  };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "Event">;
type navProp = StackNavigationProp<RootStackParamList, "Availibility">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const EventScreen: React.FC<EventScreenProps> = ({ route }) => {
  const { eventId } = route.params;
  const [event, setEventData] = useState<Event>();

  useEffect(() => {
    fetchEventById(eventId)
      .then((eventsdata) => {
        console.log("EventsData: " + eventsdata);
        if (eventsdata && eventsdata.getEvent) {
          console.log("Get event hahahaa: " + eventsdata.getEvent);
          setEventData(eventsdata.getEvent);
          console.log("The specific event is set");
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  if (event === undefined) {
    return (
      <View>
        <Text>Event is undefined</Text>
      </View>
    );
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
    navigation.navigate("Availibility", {
      eventName: event.title,
      eventLocation: venueName,
      eventTime: formattedDateTime,
      ticketsLeft: 0,
      venueId: event.venueId,
      eventBrief: event.brief,
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
          <View style={styles.row}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.rowContainer}>
              <Text style={[sharedStyles.text, styles.communityText]}>
                <Text style={styles.byText}>By: </Text>
                {event.host}
              </Text>
            </View>
          </View>

          <Text style={styles.headerText}>Event details</Text>
          <ShowMore text={event.description} />
          <Text style={styles.headerText}>Event agenda</Text>
          <ShowMore text={event.agenda} />

          <CustomButton
            name="Check availability"
            action={() => handlePress()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    alignItems: "center",
  },
  communityText: { textAlign: "center", marginTop: -20, marginLeft: 20 },
  byText: {
    color: Colors.dark.secondary,
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
    textAlign: "center",
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginTop: -37,
    zIndex: 0,
    alignSelf: "center",
  },

  headerText: {
    color: Colors.dark.secondary,
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 15,
  },
  row: {
    flexDirection: "row", // Display the Image and Text components in a row
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    marginBottom: 30,
  },
});
