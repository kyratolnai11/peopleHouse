/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { UseFormSetValue } from "react-hook-form";
import { AddCrewForm } from "./CrewDropDown";
import { sharedStyles } from "../../../utils/SharedStyles";
import { addCrewStyles } from "./StyleSheet";

type DatePickerProps = {
  setValueCrew?: UseFormSetValue<AddCrewForm>;
  setEventStartDate?: React.Dispatch<React.SetStateAction<Date>>;
  setEventStartTime?: React.Dispatch<React.SetStateAction<Date>>;
  setEventEndTime?: React.Dispatch<React.SetStateAction<Date>>;
  type?: "Time" | "Date";
  name: string;
};

const DatePicker: React.FC<DatePickerProps> = ({
  setValueCrew,
  setEventEndTime,
  setEventStartDate,
  setEventStartTime,
  name,
  type,
}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    //setting values for crew birthday
    setValueCrew && setValueCrew("dateOfBirth", date);

    //Setting values for event creation
    setEventStartDate && setEventStartDate(date);
    setEventStartTime && setEventStartTime(date);
    setEventEndTime && setEventEndTime(date);

    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={showDatepicker}
        style={addCrewStyles.dateButton}
      >
        <Text style={addCrewStyles.dateButtonText}>{name}</Text>
      </TouchableOpacity>

      {show && (
        <View style={{ alignItems: "flex-start" }}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={type === "Time" ? "time" : "date"}
            is24Hour={true}
            onChange={onChange}
          />
        </View>
      )}
      {date && (
        <Text style={sharedStyles.text}>Selected: {date.toISOString()}</Text>
      )}
    </View>
  );
};

export default DatePicker;
