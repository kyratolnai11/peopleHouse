/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, Alert } from "react-native";
import { useForm } from "react-hook-form";
import CustomButton from "../components/event-screen/CustomButton";
import CreateEventHeader from "../components/create-event/HeaderSection";
import { formatDateForEvent } from "../constants";
import PlannerSection from "../components/create-event/PlannerSection";
import EventDetailsSection from "../components/create-event/DetailsSection";
import { fetchLoggedInUserID } from "../components/cognito/UserCognito";
import { addEvent } from "../database/EventDBConnection";
import { useNavigation } from "@react-navigation/native";
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
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [userId, setUserId] = useState<string>("");

  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await fetchLoggedInUserID();
      setUserId(id);
    };

    if (!userId) {
      fetchUserId();
    }
  }, [userId]);

  const { handleSubmit, control, reset, setValue } = useForm<CreateEventForm>();

  const onSubmit = async (data: CreateEventForm) => {
    try {
      await addEvent(data);
      Alert.alert("Event added", "You have successfully added a new event!", [
        {
          text: "OK",
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
      reset();
    } catch (error: any) {
      if (error.message.includes("toISOString")) {
        Alert.alert(
          "Error",
          "Please remember to set the date and time by clicking the 'Submit date' button!",
          [{ text: "OK" }]
        );
      } else if (error.message.includes("Venue ID is required.")) {
        Alert.alert("Error", "Please remember to select the venue!", [
          { text: "OK" },
        ]);
      } else {
        Alert.alert("Error", "Some of the fields are empty!", [{ text: "OK" }]);
      }
    }
  };

  const submitDate = () => {
    const formattedStartDate = formatDateForEvent(startDate, startTime);
    const formattedEndDate = formatDateForEvent(startDate, endTime);

    //Setting the fields for dates and host
    setValue("startTime", formattedStartDate);
    setValue("endTime", formattedEndDate);
    setValue("host", userId);
  };

  return (
    <SafeAreaView style={createEventStyles.whiteBackground}>
      <ScrollView>
        <CreateEventHeader control={control} setValue={setValue} />
        <PlannerSection
          setValue={setValue}
          setEndTime={setEndTime}
          setStartDate={setStartDate}
          setStartTime={setStartTime}
          submitDate={submitDate}
        />
        <EventDetailsSection control={control} />
        <View style={createEventStyles.contWithPadding}>
          <CustomButton action={handleSubmit(onSubmit)} name="Add event" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEventScreen;
