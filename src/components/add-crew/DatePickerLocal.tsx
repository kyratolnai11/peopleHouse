/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../../../utils/theme";
import { UseFormSetValue } from "react-hook-form";
import { AddCrewForm } from "./CrewDropDown";
import { sharedStyles } from "../../../utils/SharedStyles";
import { format } from "date-fns-tz";

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
      <TouchableOpacity onPress={showDatepicker} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>{name}</Text>
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

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: Colors.dark.secondary, // Set your desired background color
    padding: 10,
    borderRadius: 10,
    width: 120,
    marginBottom: 10,
    // Adjust as needed to provide separation from other elements
  },
  loginButtonText: {
    color: Colors.dark.textPrimary, // Set the text color for the button
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DatePicker;
