/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { UseFormSetValue } from "react-hook-form";
import { AddCrewForm } from "./CrewDropDown";
import { sharedStyles } from "../../../utils/SharedStyles";
import { format } from "date-fns-tz";
import { addCrewStyles } from "./StyleSheet";

type DatePickerProps = {
  setValue: UseFormSetValue<AddCrewForm>;
  name: string;
};

const DatePicker: React.FC<DatePickerProps> = ({ setValue, name }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setValue("dateOfBirth", date);
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
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        </View>
      )}
      {date && (
        <Text style={sharedStyles.text}>
          Selected: {format(date, "yyyy-MM-dd")}
        </Text>
      )}
    </View>
  );
};

export default DatePicker;
