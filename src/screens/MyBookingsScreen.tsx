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

    const eventIds = attendeeUsers?.items.map((item) => item?.eventId);

    const eventsReturned = eventIds?.map(async (id) => {
      if (id) {
        const event = await fetchEventById(id);
        return event?.getEvent;
      }
      return Promise.resolve(null);
    });

    const resolvedEvents = await Promise.all<GetEventQuery | null | undefined>(
      eventsReturned as Array<Promise<GetEventQuery | null | undefined>>
    );

    const filteredEvents = resolvedEvents.filter(
      (event) => event !== null
    ) as Event[];

    const sortedEvents = filteredEvents.sort((a, b) => {
      if (a && a.startDateTime && b && b.startDateTime) {
        const date1 = new Date(a.startDateTime);
        const date2 = new Date(b.startDateTime);
        return date1.getTime() - date2.getTime();
      }
      return 0;
    });
    setEvents(sortedEvents);
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
                  return (
                    <EventCard key={item.id} event={item} type="Booking" />
                  );
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
