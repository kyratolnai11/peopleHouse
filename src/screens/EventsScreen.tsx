import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { fetchAllEvents } from "../database/EventDBConnection";
import { ModelEventConnection } from "../API";
import EventCard from "../components/event-screen/EventCard";
import { sharedStyles } from "../../utils/SharedStyles";
import Colors from "../../utils/theme";

const EventsScreen = () => {
  const [events, setEvents] = useState<ModelEventConnection>();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    fetchAllEvents()
      .then((eventsdata) => {
        console.log("Events are set");

        //sort events in chronological order
        if (eventsdata && eventsdata.items) {
          eventsdata.items.sort((a, b) => {
            if (a && a.startDateTime && b && b.startDateTime) {
              const date1 = new Date(a.startDateTime);
              const date2 = new Date(b.startDateTime);
              return date1.getTime() - date2.getTime();
            }
            return 0;
          });
        }

        setEvents(eventsdata);
        setDataFetched(true);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            sharedStyles.mainContainer,
            { backgroundColor: Colors.light.primaryBackground },
          ]}
        >
          {/* <Text style={sharedStyles.screenTitle}>
            All events
          </Text> */}
          {events &&
            events.items &&
            dataFetched &&
            events.items.map((item) => {
              if (item) {
                return <EventCard key={item.id} event={item} />;
              }
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsScreen;
