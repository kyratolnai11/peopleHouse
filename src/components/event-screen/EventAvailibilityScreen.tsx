import { RouteProp } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EventHeader from "./EventHeader";
import { sharedStyles } from "../../../utils/SharedStyles";
import CustomButton from "./CustomButton";
import { specificEventStyles } from "./SpecificEventStyles";

type RootStackParamList = {
  Availibility: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    ticketsLeft: number;
    venueId: string;
    eventBrief: string;
  };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "Availibility">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const EventAvailibityScreen: React.FC<EventScreenProps> = ({ route }) => {
  const {
    eventLocation,
    eventName,
    eventTime,
    ticketsLeft,
    venueId,
    eventBrief,
  } = route.params;

  const ticketText =
    ticketsLeft > 10
      ? "Tickets avaliable"
      : ticketsLeft.toString() + " tickets left";

  const button = () => {
    if (ticketsLeft === 0) {
      return (
        <TouchableOpacity style={[specificEventStyles.button]} disabled={true}>
          <Text style={specificEventStyles.buttonText}>+ Sign up</Text>
        </TouchableOpacity>
      );
    }
    return <CustomButton name="+ Sing up" />;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <EventHeader
            venueId={venueId}
            title={eventName}
            venueName={eventLocation}
            time={eventTime}
            brief={eventBrief}
          />
          <View style={{ flex: 1, height: 500 }}>
            <View style={specificEventStyles.ticketContainer}>
              <View style={specificEventStyles.ticketsHeader}>
                <Text style={specificEventStyles.ticketHeaderText}>
                  Tickets
                </Text>
              </View>
              <Text style={specificEventStyles.ticketText}>{ticketText}</Text>
              {button()}
              <Image
                source={require("../../../assets/event-screen/chair.png")}
                style={specificEventStyles.chairImage}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventAvailibityScreen;
