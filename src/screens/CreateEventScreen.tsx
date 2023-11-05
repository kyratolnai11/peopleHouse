import React from "react";
import { View, ScrollView, SafeAreaView, Text, Alert } from "react-native";
import { sharedStyles } from "../../utils/SharedStyles";
import Colors from "../../utils/theme";
import { useForm } from "react-hook-form";
import { addEvent } from "../database/EventDBConnection";

export type CreateEventForm = {
  eventTitle: string;
  brief: string;
  nuOfTickets: number;
  venueId: string;
  startTime: Date;
  endTime: Date;
  description: string;
  host: string;
  agenda?: string;
};

const CreateEventScreen: React.FC = () => {
  const { handleSubmit, control, setValue, reset } = useForm<CreateEventForm>();

  const onSubmit = async (data: CreateEventForm) => {
    await addEvent(data);
    reset();
    Alert.alert(
      "Event added",
      "You have successfully added a new event!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
    console.log("Form submitted");
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.light.primaryBackground,
        height: "100%",
      }}
    >
      <ScrollView style={{ width: "100%" }}>
        <View style={sharedStyles.mainContainer}>
          <Text style={sharedStyles.screenTitle}>Create event</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEventScreen;
