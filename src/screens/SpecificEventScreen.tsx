import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import { RouteProp, useNavigation } from "@react-navigation/native";
import {
  getEventHeaderImages,
  getFormattedDate,
  getVenueLogos,
} from "../constants";
import Colors from "../../utils/theme";
import ShowMore from "../components/event-screen/ShowMore";
import CustomButton from "../components/event-screen/CustomButton";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Event: { eventId: string };
  Availibility: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    numberOfTickets: number;
    ticketsLeft: number;
  };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "Event">;
type navProp = StackNavigationProp<RootStackParamList, "Availibility">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const EventScreen: React.FC<EventScreenProps> = ({ route }) => {
  const { eventId } = route.params;

  const eventToAdd = {
    id: "e9f6b2b7-64b8-4586-9db5-9946891fa703",
    title: "Music and Rhythm for Littles",
    brief: "Join our family friendly musical playroom!",
    description:
      "At this family workshop you will sing and play together with our talented facilitator Jannie. Jannie works with children and music every day, so she knows exactly how to get 'the whole team' to sing and play together. When you have sung a few songs, you will discover the foundation of music (pulse of music) - the four magic '1,2,3,4'. You will build up rhythms with some simple notes and then of course you will play on your own body (body percussion) and on instruments. Come and join in making music the fun way. Cost: 10 DKK The workshop fee can be paid at the Heart Café prior to the start of the class and the receipt will serve as your ticket. På denne Family workshop skal I synge, spille og lege sammen med Jannie. Begge arbejder de med børn og musik hver dag, så de ved helt præcist hvordan de skal få ”hele holdet” til at synge og spille sammen. Når I har sunget et par sange, skal I på opdagelse i Musikkens fundament (Musikkens puls) – de magiske fire ”1,2,3,4”. I skal opbygge rytmer med nogle enkle noder og så skal der selvfølgelig spilles på din egen krop(bodypercussion) samt på instrumenter. Kom og vær med til at lave musik på den sjove måde. Pris: 10 DKK Betaling for holdet skal ske i Heart Café inden holdets start, og kvitteringen vil fungere som din billet. ",
    agenda:
      "Minimum participant age: 3 *Please note, parents must stay with children under 16 while they are in People House* Aldersbegrænsning: 3 år *Vær venligst opmærksom på, at børn under 16 år skal være under forældres opsyn hele tiden, mens de opholder sig i People House*",
    startDateTime: "2023-10-28T12:00:00Z",
    endDateTime: "2023-10-28T12:30:00Z",
    numOfTickets: 100,
    host: "Community Builder Team",
    venueId: "8",
    venueName: "The Makers Space",
  };

  //functionality of "Show more"

  const imageFile = getEventHeaderImages(eventToAdd.venueId);

  const logo = getVenueLogos(eventToAdd.venueId);

  const formattedDateTime = getFormattedDate(
    eventToAdd.startDateTime,
    eventToAdd.endDateTime
  );

  //navigation to Availability screen
  const navigation = useNavigation<navProp>();

  const handlePress = () => {
    console.log("Event button pressed");
    navigation.navigate("Availibility", {
      eventName: eventToAdd.title,
      eventLocation: eventToAdd.venueName,
      eventTime: formattedDateTime,
      numberOfTickets: eventToAdd.numOfTickets,
      ticketsLeft: 5,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image source={imageFile} style={styles.image} />
            <Text style={styles.eventName}>{eventToAdd.title}</Text>
            <Text style={styles.venueName}>@ {eventToAdd.venueName}</Text>
            <Text style={styles.date}>{formattedDateTime}</Text>
            <Text style={styles.brief}>{eventToAdd.brief}</Text>
            <View style={styles.overlay}></View>
          </View>
          <View style={styles.row}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.rowContainer}>
              <Text style={[sharedStyles.text, styles.communityText]}>
                <Text style={styles.byText}>By: </Text>
                {eventToAdd.host}
              </Text>
            </View>
          </View>

          <Text style={styles.headerText}>Event details</Text>
          <ShowMore text={eventToAdd.description} />
          <Text style={styles.headerText}>Event agenda</Text>
          <ShowMore text={eventToAdd.agenda} />

          <CustomButton
            name="Check availability"
            action={() => handlePress()}
          />

          <Text>Id:{JSON.stringify(eventId)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    alignItems: "center",
  },
  communityText: { textAlign: "center", marginTop: -20, marginLeft: 20 },
  byText: {
    color: Colors.dark.secondary,
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 500,
    height: 200,
    resizeMode: "cover",
    marginTop: -37,
    zIndex: 0,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "cover",
    marginTop: -37,
    zIndex: 0,
    alignSelf: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginTop: -60,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
  },
  eventName: {
    color: Colors.light.textSecondary,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    zIndex: 2,
  },
  venueName: {
    color: Colors.light.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 45,
    zIndex: 2,
  },
  date: {
    color: Colors.light.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 80,
    zIndex: 2,
  },
  brief: {
    color: Colors.light.textSecondary,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 120,
    zIndex: 2,
  },
  headerText: {
    color: Colors.dark.secondary,
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 20,
  },
  showMoreText: {
    fontSize: 18,
    color: Colors.dark.secondary,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row", // Display the Image and Text components in a row
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 10,
  },
});
