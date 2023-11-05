import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../event-screen/CustomButton";
import DatePicker from "../add-crew/DatePickerLocal";
import VenueDropDown from "../event-screen/VenueDropDown";
import { UseFormSetValue } from "react-hook-form";
import { CreateEventForm } from "../../screens/CreateEventScreen";
import { createEventStyles } from "./CreateEventStyles";

type PlannerSectionProps = {
  setValue: UseFormSetValue<CreateEventForm>;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setStartTime: React.Dispatch<React.SetStateAction<Date>>;
  setEndTime: React.Dispatch<React.SetStateAction<Date>>;
  submitDate: () => void;
};

const PlannerSection: React.FC<PlannerSectionProps> = ({
  setValue,
  setStartDate,
  setStartTime,
  setEndTime,
  submitDate,
}) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={createEventStyles.secondaryTitle}>Planner</Text>
      <VenueDropDown setValueForCreateEvent={setValue} />
      <DatePicker name="Date" type="Date" setEventStartDate={setStartDate} />
      <DatePicker setEventStartTime={setStartTime} name="From" type="Time" />
      <DatePicker setEventEndTime={setEndTime} name="to" type="Time" />
      <CustomButton name="Submit date" action={submitDate} />
    </View>
  );
};

export default PlannerSection;
