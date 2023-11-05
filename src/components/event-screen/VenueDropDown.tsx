/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { venueDropDownStyles } from "./VenueDropDownStyles";
import { allVenuesByNameAndId } from "../../constants.ts";
import { sharedStyles } from "../../../utils/SharedStyles.ts";

type VenueDropDownProps = {
  filterByVenueId?: Function;
  setValueForCreateEvent?: Function;
};

const VenueDropDown: React.FC<VenueDropDownProps> = ({
  filterByVenueId,
  setValueForCreateEvent,
}) => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ScrollView>
      <View style={venueDropDownStyles.sectionContainer}>
        <Text style={[sharedStyles.text, { alignSelf: "flex-start" }]}>
          Venue
        </Text>
        <Dropdown
          style={[
            venueDropDownStyles.dropdown,
            isFocus && { borderColor: "blue" },
          ]}
          placeholderStyle={venueDropDownStyles.placeholderStyle}
          selectedTextStyle={venueDropDownStyles.selectedTextStyle}
          inputSearchStyle={venueDropDownStyles.inputSearchStyle}
          data={allVenuesByNameAndId}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"Select venue"}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            console.log("Venue selected: ", item.label, item.value);
            setIsFocus(false);
            filterByVenueId && filterByVenueId(item.value);
            setValueForCreateEvent && setValueForCreateEvent("venueId",item.value);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default VenueDropDown;
