/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { datePickerStyles } from "./DatePickerStyles";

type DatePickerProps = {
  filterByDate: (newDate: Date) => void;
  datePickerKey: number;
};

const DatePicker: React.FC<DatePickerProps> = ({
  filterByDate,
  datePickerKey,
}) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    filterByDate(date);
  };

  useEffect(() => {
    setDate(new Date());
  }, [datePickerKey]);

  return (
    <SafeAreaView>
      <View style={datePickerStyles.datePickerView}>
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default DatePicker;
