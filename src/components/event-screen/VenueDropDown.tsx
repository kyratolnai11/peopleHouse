import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { venueDropDownStyles } from "./VenueDropDownStyles";

const data = [
    { label: 'LEGO Arena', value: '1' },
    { label: 'Chefs Corner', value: '2' },
    { label: 'The Heart', value: '3' },
    { label: 'LEGO Gym', value: '4' },
    { label: 'Club House', value: '5' },
    { label: 'Cinema', value: '6' },
    { label: 'Creative Studio', value: '7' },
    { label: 'Music Room', value: '8' },
    { label: 'Fireplace Lounge', value: '9'},
    { label: 'Health + Wellbeing Center', value: '10'},
    { label: 'Maker Space', value: '11'}
];

type VenueDropDownProps = {
    filterByVenueId: Function;
};

const VenueDropDown: React.FC<VenueDropDownProps> = ({ filterByVenueId }) => {
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    return (
        <ScrollView>
            <View style={venueDropDownStyles.sectionContainer}>
                <Dropdown
                    style={[venueDropDownStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={venueDropDownStyles.placeholderStyle}
                    selectedTextStyle={venueDropDownStyles.selectedTextStyle}
                    inputSearchStyle={venueDropDownStyles.inputSearchStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={"Select venue"}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        console.log("Venue selected: ", item.label, item.value);
                        setIsFocus(false);
                        filterByVenueId(item.value);
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default VenueDropDown;