import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { fetchAllEvents, fetchEventsByVenueId } from "../database/EventDBConnection";
import { ModelEventConnection } from "../API";
import EventCard from "../components/event-screen/EventCard";
import VenueDropDown from "../components/event-screen/VenueDropDown";
import { sharedStyles } from "../../utils/SharedStyles";
import LoadingSpinner from "../components/event-screen/LoadingSpinner";
import DatePicker from "../components/event-screen/DatePicker";

const EventsScreen = () => {
  const [events, setEvents] = useState<ModelEventConnection>();
  const [dataFetched, setDataFetched] = useState(false);
  const [venueId, setVenueId] = useState("");
  const [filteredByVenueId, setFilteredByVenueID] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [filteredByDate, setFilteredByDate] = useState(false);

  useEffect(() => {
    if (filteredByVenueId !== true) {
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
    if (venueID !== '0') {
      setFilteredByVenueID(true);
      setVenueId(venueID);
    } else {
      setFilteredByVenueID(false);
      setVenueId('-1');
    }
  }

  useEffect(() => {
    console.log("////////////////////////////filtering by date here")
    if (filteredByDate && dataFetched) {
      if (events && events.items) {
        let sortedEvents = events;
        //sortedEvents.items = [];
        console.log("//////////////////////////old events:", events);
        console.log("//////////////////////////new events:", sortedEvents);
        events.items.forEach(event => {
          console.log("////////////////////checking event:", event)
          if (event && event.startDateTime) {
            console.log("////////////////////checking event:", event)
            const eventDate = new Date(event.startDateTime);
            console.log("////////////////////date:", eventDate);
            if (eventDate.getFullYear() === date.getFullYear() &&
              eventDate.getMonth() === date.getMonth() &&
              eventDate.getDay() === date.getDay()) {
                console.log("//////////////////////////////datematch:",eventDate, date);
              sortedEvents.items.filter(obj => {return obj !== event});
            }
          }
        });

        console.log("//////////////////////sorted events:", sortedEvents);
        setEvents(sortedEvents);
      }
    }
  }, [date]);

  function filterByDate(date: Date) {
    setFilteredByDate(true);
    setDate(date);
    console.log("Selected date (events screen): ", date)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <Text style={sharedStyles.screenTitle}>
            Come have fun with us!
          </Text>
          <VenueDropDown filterByVenueId={filterByVenueId} />
          <DatePicker filterByDate={filterByDate} />
          {events && events.items ? (
            events.items.length === 0 && filteredByVenueId ? (
              <Text style={sharedStyles.centeredText}> No events for this venue. </Text>
            ) : (events.items.length === 0 && filteredByDate ? (
              <Text style={sharedStyles.centeredText}> No events for this date. </Text>
            ) : (
              dataFetched &&
              events.items.map((item) => {
                if (item) {
                  return <EventCard key={item.id} event={item} />;
                }
              })
            )
            )) : (
            <LoadingSpinner />
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsScreen;
