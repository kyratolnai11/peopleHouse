import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { sharedStyles } from "../../utils/SharedStyles";

type EventScreenProps = {
  route: EventScreenProps;
};

const EventScreen: React.FC<EventScreenProps> = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <Text style={sharedStyles.screenTitle}>Name of the event</Text>
          <Text>Id:</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;
