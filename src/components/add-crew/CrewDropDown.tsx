import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { sharedStyles } from "../../../utils/SharedStyles";

const CrewDropDown: React.FC = () => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: "+ONE", value: "+ONE" },
    { label: "Child ((16+)", value: "Child ((16+)" },
    { label: "Child", value: "Child" },
  ];

  console.log(value);

  return (
    <View style={styles.sectionContainer}>
      <Text style={sharedStyles.secondaryTitle}>Relation:</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Select Crew member type"}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      {value && (
        <View>
          <Image
            source={require("../../../assets/add-crew/love-figure.png")}
            style={styles.image}
          />
          <Text style={[sharedStyles.text, { textAlign: "justify" }]}>
            Children are your own responsibility and MUST always be accompanied
            by you or your +ONE at all times inside People House. You also
            consent that the data you have entered is correct, and agree on
            using these data according to our privacy policy and terms of use.
          </Text>
        </View>
      )}
    </View>
  );
};

export default CrewDropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 300,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
    alignSelf: "center",
  },
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
