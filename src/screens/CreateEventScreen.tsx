import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { sharedStyles } from "../../utils/SharedStyles";
import Colors from "../../utils/theme";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../components/event-screen/CustomButton";
import { createEventStyles } from "../components/create-event/CreateEventStyles";

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
  const { handleSubmit, control, reset } = useForm<CreateEventForm>();

  const onSubmit = async (data: CreateEventForm) => {
    console.log(data);
    // await addEvent(data);
    reset();
    Alert.alert("Event added", "You have successfully added a new event!", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
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
        <Text style={sharedStyles.screenTitle}>Create event</Text>
        <View
          style={{
            width: "100%",
            padding: 20,
            backgroundColor: Colors.light.secondary,
          }}
        >
          <Text
            style={[sharedStyles.text, { color: Colors.light.textSecondary }]}
          >
            Event title
          </Text>
          <Controller
            name="eventTitle"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Enter title"
                value={field.value}
                onChangeText={field.onChange}
                style={[
                  sharedStyles.input,
                  { backgroundColor: Colors.light.textSecondary },
                ]}
              />
            )}
          />
          <Text
            style={[sharedStyles.text, { color: Colors.light.textSecondary }]}
          >
            Brief
          </Text>
          <Controller
            name="brief"
            control={control}
            render={({ field }) => (
              <TextInput
                value={field.value}
                onChangeText={field.onChange}
                numberOfLines={4}
                multiline={true}
                style={[
                  sharedStyles.input,
                  { backgroundColor: Colors.light.textSecondary, height: 100 },
                ]}
              />
            )}
          />

          <View style={createEventStyles.ticketContainer}>
            <View style={createEventStyles.ticketsHeader}>
              <Text style={createEventStyles.ticketHeaderText}>Tickets</Text>
            </View>
            <Text style={[sharedStyles.text, { marginTop: 60 }]}>
              Number of tickets
            </Text>
            <Controller
              name="nuOfTickets"
              control={control}
              render={({ field }) => (
                <TextInput
                  placeholder="1"
                  returnKeyType="done"
                  value={field.value ? field.value.toString() : ""}
                  keyboardType="numeric"
                  onChangeText={field.onChange}
                  style={[sharedStyles.input, { width: 150 }]}
                />
              )}
            />
            <Image
              source={require("../../assets/event-screen/chair.png")}
              style={createEventStyles.chairImage}
            />
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Text style={[sharedStyles.text]}>Description</Text>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextInput
                value={field.value}
                onChangeText={field.onChange}
                numberOfLines={70}
                multiline={true}
                style={[
                  sharedStyles.input,
                  { backgroundColor: Colors.light.textSecondary, height: 200 },
                ]}
              />
            )}
          />
          <Text style={[sharedStyles.text]}>Agenda (optional)</Text>
          <Controller
            name="agenda"
            control={control}
            render={({ field }) => (
              <TextInput
                value={field.value}
                onChangeText={field.onChange}
                numberOfLines={70}
                multiline={true}
                style={[
                  sharedStyles.input,
                  { backgroundColor: Colors.light.textSecondary, height: 200 },
                ]}
              />
            )}
          />

          <CustomButton action={handleSubmit(onSubmit)} name="Add event" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEventScreen;
