import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import { RouteProp } from "@react-navigation/native";
import { getEventHeaderImages, getFormattedDate } from "../constants";
import Colors from "../../utils/theme";

type RootStackParamList = {
  Event: { eventId: string };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "Event">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const EventScreen: React.FC<EventScreenProps> = ({ route }) => {
  const { eventId } = route.params;
  //   const [image, setImage] = useState();

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
    venueId: "5",
    venueName: "The Makers Space",
  };

  const imageFile = getEventHeaderImages(eventToAdd.venueId);

  const formattedDateTime = getFormattedDate(
    eventToAdd.startDateTime,
    eventToAdd.endDateTime
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <View>
            <Image source={imageFile} style={styles.image} />
          </View>
          <Text style={styles.eventName}>{eventToAdd.title}</Text>
          <Text style={styles.venueName}>@ {eventToAdd.venueName}</Text>
          <Text style={styles.date}>{formattedDateTime}</Text>
          <Text>Id:{JSON.stringify(eventId)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 200,
    resizeMode: "cover",
    marginTop: -37,
  },
  imageContainer: {
    position: "relative",
  },
  eventName: {
    color: Colors.light.textSecondary,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingBottom: 110,
  },
  venueName: {
    color: Colors.light.textSecondary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingBottom: 30,
  },
  date: {
    color: Colors.light.textSecondary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 50,
  },
});
