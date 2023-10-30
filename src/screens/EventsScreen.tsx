import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView, Text, Image } from "react-native";
import { fetchAllEvents } from "../database/EventDBConnection";
import { ModelEventConnection, UserType } from "../API";
import EventCard from "../components/event-screen/EventCard";
import { sharedStyles } from "../../utils/SharedStyles";
import Colors from "../../utils/theme";
import LoadingSpinner from "../components/event-screen/LoadingSpinner";
import { fetchUserType } from "../components/cognito/UserCognito";
import CustomButton from "../components/event-screen/CustomButton";
import { eventStyles } from "../components/event-screen/EventStyles";

const EventsScreen = () => {
  const [events, setEvents] = useState<ModelEventConnection>();
  const [dataFetched, setDataFetched] = useState(false);
  const [userType, setUserType] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserType();
        setUserType(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

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

  if (!events) {
    return <LoadingSpinner />;
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
          {userType === UserType.COMMUNITY_BUILDER && (
            <View style={eventStyles.cmContainer}>
              <Text style={eventStyles.cmText}>For Community Builders</Text>
              <Image
                style={eventStyles.cmImage}
                source={require("../../assets/event-screen/pencil.png")}
              />
              <CustomButton name="Create event" />
            </View>
          )}
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
