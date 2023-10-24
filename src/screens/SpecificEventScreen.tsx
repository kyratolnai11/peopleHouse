import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
    Event: { eventId: string };
  };

type EventScreenRouteProp = RouteProp<RootStackParamList, "Event">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const EventScreen: React.FC<EventScreenProps> = ({ route }) => {
  const { eventId } = route.params;
  console.log(route)
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <Text style={sharedStyles.screenTitle}>Name of the event</Text>
          <Text>Id:{JSON.stringify(eventId)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;
