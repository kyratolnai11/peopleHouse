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
import { useIsFocused } from "@react-navigation/native";

const MyBookingsScreen: React.FC = () => {
  const [events, setEvents] = useState<
    {
      event: Event;
      attendeeUserId: string;
    }[]
  >();
  const [dataFetched, setDataFetched] = useState(false);
  const isFocused = useIsFocused();

  const fetchEvents = async () => {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: false,
    });

    const attendeeUsers = await getEventFromAttendeeUser(user.attributes.sub);

    const eventIdsWithAttendeeUserId =
      attendeeUsers?.items.map((item) => {
        return {
          eventId: item?.eventId || "",
          attendeeUserId: item?.id || "",
        };
      }) || [];

    const eventsReturned = eventIdsWithAttendeeUserId?.map(async (item) => {
      if (item) {
        const event = await fetchEventById(item.eventId);
        return { event: event, attendeeUserId: item.attendeeUserId };
      }
      return Promise.resolve(null);
    });

    const resolvedEvents = await Promise.all(
      eventsReturned as Array<
        Promise<{
          event: GetEventQuery | undefined;
          attendeeUserId: string;
        } | null>
      >
    );

    const filteredEvents: { event: Event; attendeeUserId: string }[] =
      resolvedEvents
        .map((item) => {
          if (
            item &&
            item.event &&
            Object.keys(item.event).length > 0 &&
            item.attendeeUserId
          ) {
            return {
              event: item.event.getEvent as Event,
              attendeeUserId: item.attendeeUserId,
            };
          }
        })
        .filter(
          (item): item is { event: Event; attendeeUserId: string } => !!item
        );

    const sortedEvents = filteredEvents
      .filter((item) => item && item.event && item.event.startDateTime)
      .sort((a, b) => {
        const date1 = new Date(a?.event?.startDateTime || 0);
        const date2 = new Date(b?.event?.startDateTime || 0);

        return date1.getTime() - date2.getTime();
      });

    setEvents(sortedEvents);
    setDataFetched(true);
  };

  useEffect(() => {
    if (isFocused) {
      fetchEvents();
    }
  }, [isFocused]);

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
                    <EventCard
                      key={item.event.id}
                      event={item.event}
                      type="Booking"
                      attendeeUserId={item.attendeeUserId}
                    />
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
