/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { Text, TextInput, View, Image } from "react-native";
import { sharedStyles } from "../../../utils/SharedStyles";
import Colors from "../../../utils/theme";
import { CreateEventForm } from "../../screens/CreateEventScreen";
import { createEventStyles } from "./CreateEventStyles";

type CreateEventHeaderProps = {
  control: Control<CreateEventForm, any>;
  setValue: UseFormSetValue<CreateEventForm>;
};

const CreateEventHeader: React.FC<CreateEventHeaderProps> = ({
  control,
  setValue,
}) => {
  setValue("nuOfTickets", 10);
  return (
    <View>
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
              value={field.value}
              onChangeText={field.onChange}
              style={createEventStyles.title}
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
              style={createEventStyles.brief}
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
                placeholder="10"
                returnKeyType="done"
                value={field.value ? field.value.toString() : "10"}
                keyboardType="numeric"
                inputMode="numeric"
                onChangeText={field.onChange}
                style={[sharedStyles.input, { width: 150 }]}
              />
            )}
          />
          <Image
            source={require("../../../assets/event-screen/chair.png")}
            style={createEventStyles.chairImage}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateEventHeader;
