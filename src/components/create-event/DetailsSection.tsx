/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { View, Text, TextInput } from "react-native";
import { sharedStyles } from "../../../utils/SharedStyles";
import { Control, Controller } from "react-hook-form";
import { createEventStyles } from "./CreateEventStyles";
import { CreateEventForm } from "../../screens/CreateEventScreen";

type EventDetailsSectionProps = {
  control: Control<CreateEventForm, any>;
};

const EventDetailsSection: React.FC<EventDetailsSectionProps> = ({
  control,
}) => {
  return (
    <View style={createEventStyles.contWithPadding}>
      <Text style={createEventStyles.secondaryTitle}>Event Details</Text>
      <Text style={[sharedStyles.text, { paddingTop: 20 }]}>Description</Text>
      <Controller
        name="description"
        control={control}
        rules={{ required: "The description is required!" }}
        render={({ field, fieldState }) => (
          <View>
            <TextInput
              value={field.value}
              onChangeText={field.onChange}
              numberOfLines={70}
              multiline={true}
              style={createEventStyles.textArea}
            />
            {fieldState.error && (
              <Text style={createEventStyles.errorText}>
                {fieldState.error.message}
              </Text>
            )}
          </View>
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
            style={createEventStyles.textArea}
          />
        )}
      />
    </View>
  );
};

export default EventDetailsSection;
