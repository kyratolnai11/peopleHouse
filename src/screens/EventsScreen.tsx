import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { fetchAllEvents, fetchEventsByVenueId } from "../database/EventDBConnection";
import { ModelEventConnection } from "../API";
import EventCard from "../components/event-screen/EventCard";
import VenueDropDown from "../components/event-screen/VenueDropDown";
import { sharedStyles } from "../../utils/SharedStyles";
import Colors from "../../utils/theme";
import LoadingSpinner from "../components/event-screen/LoadingSpinner";

const EventsScreen = () => {
  const [events, setEvents] = useState<ModelEventConnection>();
  const [dataFetched, setDataFetched] = useState(false);
  const [venueId, setVenueId] = useState("");
  const [filteredByVenueID, setFilteredByVenueID] = useState(false);

  useEffect(() => {
    if (filteredByVenueID !== true) {
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
    }
    else {
      fetchEventsByVenueId(venueId)
        .then((eventsdata) => {
          console.log("Events are set and filtered by venue: ", venueId);

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

          console.log(eventsdata);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
        });
    }
  }, [venueId]);

  function filterByVenueId(venueID: string) {
    setDataFetched(false);
    setEvents(undefined);
    setFilteredByVenueID(true);
    setVenueId(venueID);
    console.log("================", venueId);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            sharedStyles.mainContainer,
            { backgroundColor: Colors.light.primaryBackground },
          ]}>
          <VenueDropDown filterByVenueId={filterByVenueId} />
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
