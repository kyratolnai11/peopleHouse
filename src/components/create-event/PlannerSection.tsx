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
    <View style={createEventStyles.contWithPadding}>
      <Text style={createEventStyles.secondaryTitle}>Planner</Text>
      <VenueDropDown setValueForCreateEvent={setValue} />
      <View style={createEventStyles.datePickerContainer}>
        <View>
          <Text style={createEventStyles.labelText}>Date</Text>
          <DatePicker
            name="Date"
            type="Date"
            setEventStartDate={setStartDate}
          />
        </View>
        <View>
          <Text style={createEventStyles.labelText}>From</Text>
          <DatePicker
            setEventStartTime={setStartTime}
            name="From"
            type="Time"
          />
        </View>
        <View>
          <Text style={createEventStyles.labelText}>To</Text>
          <DatePicker setEventEndTime={setEndTime} name="to" type="Time" />
        </View>
      </View>

      <CustomButton name="Submit date" action={submitDate} />
    </View>
  );
};

export default PlannerSection;
