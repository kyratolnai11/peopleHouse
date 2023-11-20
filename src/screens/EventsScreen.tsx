import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView, Text, Image } from "react-native";
import {
  fetchAllEvents,
  fetchEventsByVenueId,
} from "../database/EventDBConnection";
import { ModelEventConnection, UserType } from "../API";
import EventCard from "../components/event-screen/EventCard";
import VenueDropDown from "../components/event-screen/VenueDropDown";
import { sharedStyles } from "../../utils/SharedStyles";
import LoadingSpinner from "../components/event-screen/LoadingSpinner";
import { fetchUserType } from "../components/cognito/UserCognito";
import CustomButton from "../components/event-screen/CustomButton";
import { eventStyles } from "../components/event-screen/EventStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useIsFocused, useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
  CreateEvent: undefined;
};

type navProp = StackNavigationProp<RootStackParamList, "CreateEvent">;
import DatePicker from "../components/event-screen/DatePicker";
import Colors from "../../utils/theme";

const EventsScreen = () => {
  const [events, setEvents] = useState<ModelEventConnection>();
  const [dataFetched, setDataFetched] = useState(false);
  const [userType, setUserType] = useState();
  const isFocused = useIsFocused(); // Get the screen focus state

  const navigation = useNavigation<navProp>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserType();
        setUserType(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

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
    } else {
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
    if (venueID !== "0") {
      setFilteredByVenueID(true);
      setVenueId(venueID);
    } else {
      setFilteredByVenueID(false);
      setVenueId("-1");
    }
  }

  const handleButtonpress = () => {
    console.log("Cards pressed");
    navigation.navigate("CreateEvent");
  };

  useEffect(() => {
    console.log("////////////////////////////filtering by date here", date)
    if (filteredByDate && dataFetched) {
      if (events && events.items) {
        fetchAllEvents().then((eventsdata) => {
          if (eventsdata && eventsdata.items) {
            console.log("//////////////////////////old events:", eventsdata.items.length);

            const startOfDay = new Date(date)
            console.log("//////////////////////////startOfDay 1:", startOfDay);
            startOfDay.setHours(1, 0, 0, 0);
            console.log("//////////////////////////startOfDay:", startOfDay);

            const endOfDay = new Date(date)
            console.log("//////////////////////////endOfDay 1:", endOfDay);
            endOfDay.setHours(23, 59, 59, 59);
            console.log("//////////////////////////endOfDay:", endOfDay);

            const newevents = eventsdata.items.filter((item) => {
              let eventDate = new Date();
              if (item && item.startDateTime) {
                eventDate = new Date(item.startDateTime);
              }
              console.log("//////////////////////////item:", eventDate, eventDate > startOfDay && eventDate < endOfDay);

              return eventDate > startOfDay && eventDate < endOfDay;
            });

            events.items = newevents;
          }
        })
      }
    }
  }, [date]);

  function filterByDate(newDate: Date) {
    if (newDate.getFullYear() !== date.getFullYear()
      || newDate.getMonth() !== date.getMonth()
      || newDate.getDate() !== date.getDate()
    ) {
      setDate(newDate);
      setFilteredByDate(true);
      console.log("Selected date (events screen): ", newDate)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            sharedStyles.mainContainer,
            { backgroundColor: Colors.light.primaryBackground },
          ]}
        >
          <Text style={sharedStyles.screenTitle}>Come have fun with us!</Text>
          {userType === UserType.COMMUNITY_BUILDER && (
            <View style={eventStyles.cmContainer}>
              <Text style={eventStyles.cmText}>For Community Builders</Text>
              <Image
                style={eventStyles.cmImage}
                source={require("../../assets/event-screen/pencil.png")}
              />
              <CustomButton name="Create event" action={handleButtonpress} />
            </View>
          )}

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
