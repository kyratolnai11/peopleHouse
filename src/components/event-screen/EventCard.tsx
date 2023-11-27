/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { Event } from "../../API";
import { getEventHeaderImages, getFormattedDate } from "../../constants";
import { sharedStyles } from "../../../utils/SharedStyles";
import { eventStyles } from "./EventStyles";
import CustomButton from "./CustomButton.tsx";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Event: { eventId: string; sourceScreen?: string };
  MyBookings: { eventId: string; sourceScreen?: string };
};

type EventCardProps = {
  event: Event;
  type?: "Booking" | "Event";
};

type navProp = StackNavigationProp<RootStackParamList, "Event">;
type napPropBooking = StackNavigationProp<RootStackParamList, "MyBookings">;

const EventCard: React.FC<EventCardProps> = ({ event, type }) => {
  const venueID = event.venueId;
  const description = event.title;
  const brief = event.brief;
  const formattedDateTime = getFormattedDate(
    event.startDateTime,
    event.endDateTime
  );
  const imageFile = getEventHeaderImages(venueID);

  const navigation = useNavigation<navProp>();
  const navigationBooking = useNavigation<napPropBooking>();

  const handleOpenURL = () => {
    console.log("Cards pressed");
    if (type === "Booking") {
      navigationBooking.navigate("Event", {
        eventId: event.id,
        sourceScreen: "MyBookings",
      });
    } else {
      navigation.navigate("Event", {
        eventId: event.id,
        sourceScreen: "EventScreen",
      });
    }
  };

  return (
    <SafeAreaView style={eventStyles.container}>
      <View style={eventStyles.container}>
        <TouchableOpacity onPress={handleOpenURL}>
          <Card>
            <Image source={imageFile} style={eventStyles.image} />
            <View style={eventStyles.textContainer}>
              <Text style={[sharedStyles.secondaryTitle, { maxWidth: 320 }]}>
                {description}
              </Text>
              <Text style={[sharedStyles.text, eventStyles.text]}>{brief}</Text>
              <Text style={eventStyles.dateTimeText}>{formattedDateTime}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EventCard;
