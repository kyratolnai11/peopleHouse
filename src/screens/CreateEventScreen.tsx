/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, Alert } from "react-native";
import Colors from "../../utils/theme";
import { useForm } from "react-hook-form";
import CustomButton from "../components/event-screen/CustomButton";
import CreateEventHeader from "../components/create-event/CreateEventHeaders";
import { formatDateForEvent } from "../constants";
import PlannerSection from "../components/create-event/CreateEventDateSection";
import EventDetailsSection from "../components/create-event/EventDetailsSection";
import { fetchLoggedInUserID } from "../components/cognito/UserCognito";
import { addEvent } from "../database/EventDBConnection";
import { useNavigation } from "@react-navigation/native";

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
      const id = await fetchLoggedInUserID(); // Replace with your actual fetch logic
      setUserId(id);
    };

    if (!userId) {
      fetchUserId();
    }
  }, [userId]);

  const { handleSubmit, control, reset, setValue } = useForm<CreateEventForm>();

  const onSubmit = async (data: CreateEventForm) => {
    console.log(data);

    await addEvent(data);
    reset();
    Alert.alert("Event added", "You have successfully added a new event!", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          navigation.goBack();
          console.log("OK Pressed");
        },
      },
    ]);
    console.log("Form submitted");
  };

  const submitDate = () => {
    const formattedStartDate = formatDateForEvent(startDate, startTime);
    const formattedEndDate = formatDateForEvent(startDate, endTime);

    console.log("Startime: ", formattedStartDate);
    console.log("EndTime: ", formattedEndDate);

    setValue("startTime", formattedStartDate);
    setValue("endTime", formattedEndDate);
    setValue("host", userId);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.light.primaryBackground,
        height: "100%",
      }}
    >
      <ScrollView style={{ width: "100%" }}>
        <CreateEventHeader control={control} />
        <PlannerSection
          setValue={setValue}
          setEndTime={setEndTime}
          setStartDate={setStartDate}
          setStartTime={setStartTime}
          submitDate={submitDate}
        />
        <EventDetailsSection control={control} />
        <View style={{ padding: 20 }}>
          <CustomButton action={handleSubmit(onSubmit)} name="Add event" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEventScreen;
