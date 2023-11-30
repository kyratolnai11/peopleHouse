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
import { fetchEventById, deleteEventById } from "../database/EventDBConnection";
import { Event, User } from "../API";
import { specificEventStyles } from "../components/event-screen/SpecificEventStyles";
import LoadingSpinner from "../components/event-screen/LoadingSpinner";
import { fetchUserById } from "../database/UserDBConnection";
import { Auth } from "aws-amplify";

type RootStackParamList = {
  Event: { eventId: string; sourceScreen?: string };
  Availibility: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    numOfTickets: number;
    venueId: string;
    eventBrief: string;
    eventId: string;
  };
  MyBookings: { eventId: string; sourceScreen?: string };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "Event">;
type MyBookingsScreenRouteProp = RouteProp<RootStackParamList, "MyBookings">;
type navProp = StackNavigationProp<RootStackParamList, "Availibility">;

type EventScreenProps = {
  route: EventScreenRouteProp | MyBookingsScreenRouteProp;
};

const EventScreen: React.FC<EventScreenProps> = ({ route }) => {
  const { eventId } = route.params;
  const [event, setEventData] = useState<Event>();
  const [userInfo, setUserInfo] = useState<User | undefined>();

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
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });

      const databaseUser = await fetchUserById(user.attributes.sub);
      setUserInfo(databaseUser);
    } catch (error) {
      console.log(error);
    }
  };

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
    navigation.navigate("Availibility", {
      eventName: event.title,
      eventLocation: venueName,
      eventTime: formattedDateTime,
      numOfTickets: event.numOfTickets,
      venueId: event.venueId,
      eventBrief: event.brief,
      eventId: event.id,
    });
  };

  const handleDelete = () => {
    Alert.alert("Confirmation", "Are you sure you want to delete this event?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          deleteEventById(eventId); // Dummy data
          navigation.goBack();
        },
      },
    ]);
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
                Comunity Builder Team
              </Text>
            </View>
          </View>

          <Text style={specificEventStyles.headerText}>Event details</Text>
          <ShowMore text={event.description} />
          <Text style={specificEventStyles.headerText}>Event agenda</Text>
          <ShowMore text={event.agenda} />

          <CustomButton
            name="Check availability"
            action={() => handlePress()}
          />
          {userInfo?.userType === "COMMUNITY_BUILDER" && (
            <CustomButton name="Delete Event" action={() => handleDelete()} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;
