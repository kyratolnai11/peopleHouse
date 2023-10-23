/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../../../utils/theme";

const DatePicker: React.FC = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={showDatepicker} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Date o Birth</Text>
      </TouchableOpacity>
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
          textColor="#FFD400"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: Colors.dark.primary, // Set your desired background color
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 120,
    // Adjust as needed to provide separation from other elements
  },
  loginButtonText: {
    color: "black", // Set the text color for the button
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DatePicker;
