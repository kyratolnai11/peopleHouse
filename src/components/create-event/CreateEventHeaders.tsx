/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Control, Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { sharedStyles } from "../../../utils/SharedStyles";
import Colors from "../../../utils/theme";
import { CreateEventForm } from "../../screens/CreateEventScreen";

type CreateEventHeaderProps = {
  control: Control<CreateEventForm, any>;
};

const CreateEventHeader: React.FC<CreateEventHeaderProps> = ({ control }) => {
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
              style={[
                sharedStyles.input,
                {
                  backgroundColor: Colors.light.textSecondary,
                  textAlignVertical: "top",
                },
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
                {
                  backgroundColor: Colors.light.textSecondary,
                  height: 100,
                  textAlignVertical: "top",
                },
              ]}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CreateEventHeader;
