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
import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme";
import CustomButton from "./CustomButton";

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
        <TouchableOpacity style={[styles.button]} disabled={true}>
          <Text style={styles.buttonText}>+ Sign up</Text>
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
            <View style={styles.ticketContainer}>
              <View style={styles.ticketsHeader}>
                <Text style={styles.ticketHeaderText}>Tickets</Text>
              </View>
              <Text style={styles.ticketText}>{ticketText}</Text>
              {button()}
              <Image
                source={require("../../../assets/event-screen/chair.png")}
                style={styles.chairImage}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ticketsHeader: {
    backgroundColor: Colors.light.tertiary,
    transform: "rotate(-1deg)",
    width: 180,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    marginTop: -20,
  },
  ticketHeaderText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  ticketContainer: {
    borderWidth: 1,
    borderColor: Colors.light.textPrimary,
    width: 350,
    height: 350,
    borderRadius: 20,
    position: "relative",
    alignItems: "center",
    marginTop: 60,
    justifyContent: "space-between",
  },
  ticketText: {
    marginTop: 100,
    fontSize: 20,
  },
  chairImage: {
    width: 100,
    resizeMode: "cover",
  },
  button: {
    backgroundColor: Colors.dark.lightGrey,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
    alignSelf: "center",
  },
  buttonText: {
    color: Colors.dark.grey,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default EventAvailibityScreen;
