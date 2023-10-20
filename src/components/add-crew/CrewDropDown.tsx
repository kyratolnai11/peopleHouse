import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { sharedStyles } from "../../../utils/SharedStyles";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../../../utils/theme";

type AddCrewForm = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
};

const CrewDropDown: React.FC = () => {
  const [option, setOption] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: "+ONE", value: "+ONE" },
    { label: "Child ((16+)", value: "Child ((16+)" },
    { label: "Child", value: "Child" },
  ];

  const { handleSubmit, control } = useForm<AddCrewForm>();

  const onSubmit = (data: AddCrewForm) => {
    console.log("Form submitted" + data);
  };

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
        value={option}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setOption(item.value);
          setIsFocus(false);
        }}
      />
      {option && (
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
          <Text>First Name:</Text>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Enter your first name"
                value={field.value}
                onChangeText={field.onChange}
                style={styles.input}
              />
            )}
          />

          <Text>Last Name:</Text>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Enter your last name"
                value={field.value}
                onChangeText={field.onChange}
                style={styles.input}
              />
            )}
          />

          <Text>Date of Birth:</Text>
          {/* Add a date picker component here */}

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Add Crew</Text>
          </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  loginButton: {
    backgroundColor: Colors.dark.primary, // Set your desired background color
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
    alignSelf: "center",
    // Adjust as needed to provide separation from other elements
  },
  loginButtonText: {
    color: "black", // Set the text color for the button
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
