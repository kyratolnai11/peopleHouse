/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { sharedStyles } from "../../../utils/SharedStyles";
import { format } from "date-fns-tz";
import { datePickerStyles } from "./DatePickerStyles";

type DatePickerProps = {
    filterByDate: Function;
};

const DatePicker: React.FC<DatePickerProps> = ({ filterByDate }) => {
    const [date, setDate] = useState(new Date());

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        filterByDate(date);
        console.log("Selected date (date picker): ", date)
    };

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
