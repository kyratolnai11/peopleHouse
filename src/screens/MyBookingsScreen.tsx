import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import Colors from "../../utils/theme";
import { sharedStyles } from "../../utils/SharedStyles";
import { Event, GetEventQuery } from "../API";
import {
  fetchEventById,
  getEventFromAttendeeUser,
} from "../database/EventDBConnection";
import { Auth } from "aws-amplify";
import EventCard from "../components/event-screen/EventCard";
import LoadingSpinner from "../components/event-screen/LoadingSpinner";

const MyBookingsScreen: React.FC = () => {
  const [events, setEvents] = useState<Event[] | undefined>(undefined);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchEvents = async () => {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: false,
    });

    const attendeeUsers = await getEventFromAttendeeUser(user.attributes.sub);
    console.log("I am in the fetch", attendeeUsers);

    const eventIds = attendeeUsers?.items.map((item) => item?.eventId);
    console.log("These are the eventIds: ", eventIds);

    const eventsReturned = await eventIds?.map((id) => {
      if (id) {
        const event = fetchEventById(id);
        console.log("This is ONE event: ", event);
      }
      return Promise.resolve(null);
    });

    console.log("these are the events return")

    const resolvedEvents = await Promise.all<GetEventQuery | null | undefined>(
      eventsReturned as Array<Promise<GetEventQuery | null | undefined>>
    );

    setEvents(resolvedEvents.filter((event) => event !== null) as Event[]);
    console.log("The events are: ", events);
    setDataFetched(true);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.light.primaryBackground,
        height: "100%",
      }}
    >
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <Text>Hello</Text>
          {events ? (
            events.length === 0 ? (
              <Text style={sharedStyles.centeredText}>
                {" "}
                No events for this venue.{" "}
              </Text>
            ) : (
              dataFetched &&
              events.map((item) => {
                if (item) {
                  return <EventCard key={item.id} event={item} />;
                }
              })
            )
          ) : (
            <LoadingSpinner />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyBookingsScreen;
