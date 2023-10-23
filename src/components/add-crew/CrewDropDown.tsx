import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { sharedStyles } from "../../../utils/SharedStyles";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../../../utils/theme";
import DatePicker from "./DatePickerLocal";
import { fetchLoggedInUserID } from "../cognito/UserCognito";
import { addCrew } from "../../database/CrewDBConnection";

export type AddCrewForm = {
  firstName: string;
  lastName: string;
  email?: string;
  dateOfBirth?: Date;
  userType: string;
};

const CrewDropDown: React.FC = () => {
  const [option, setOption] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [userId, setUserId] = useState("");

  const data = [
    { label: "+ONE", value: "+ONE" },
    { label: "Child (16+)", value: "Child(16+)" },
    { label: "Child", value: "Child" },
  ];

  const { handleSubmit, control, setValue } = useForm<AddCrewForm>();

  useEffect(() => {
    fetchLoggedInUserID().then((id) => setUserId(id));
  }, []);

  const onSubmit = async (data: AddCrewForm) => {
    console.log("This is the userId", userId);
    await addCrew(userId, data);
    console.log("Form submitted" + data.dateOfBirth);
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
          setValue("userType", option);
          setIsFocus(false);
        }}
      />
      {option === "Child" && (
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
      {option === "Child(16+)" && (
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
      {option === "+ONE" && (
        <View>
          <Image
            source={require("../../../assets/add-crew/love-figure.png")}
            style={styles.image}
          />
          <Text
            style={[
              sharedStyles.text,
              { textAlign: "justify", fontWeight: "bold" },
            ]}
          >
            If your +ONE is LEGO Pensioner or employed by LEGO Group or Kirkbi,
            please use option "Employee/Pensioner +ONE" instead.
          </Text>
          <Text style={[sharedStyles.text, { textAlign: "justify" }]}>
            Who is a +ONE? A lucky person who you choose to share exiting People
            House moments with. You are no longer limited to choosing a partner
            but free to choose whoever feels right for you. For example this
            could be: partner, mother, brother, cousin or a friend.
          </Text>
          <Text style={[sharedStyles.text, { textAlign: "justify" }]}>
            Your +ONE needs to complete their registration following a link that
            you will receive in your email.
          </Text>
          <Text style={[sharedStyles.text, { textAlign: "justify" }]}>
            Until this process is completed, your +ONE will appear on "Home" as
            an inactive member. They will not be able to sign-up and attend
            events nor have any access to People House.
          </Text>
        </View>
      )}
      <View style={{ width: 300, marginTop: 20 }}>
        <Text style={sharedStyles.text}>First Name:</Text>
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

        <Text style={sharedStyles.text}>Last Name:</Text>
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
        {option === "+ONE" && (
          <View>
            <Text style={sharedStyles.text}>Email:</Text>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextInput
                  placeholder="Enter your email"
                  value={field.value}
                  onChangeText={field.onChange}
                  style={styles.input}
                />
              )}
            />
          </View>
        )}
        {option === "Child" && (
          <View>
            <Text style={sharedStyles.text}>Date of Birth:</Text>
            <DatePicker setValue={setValue} name="Date of birth" />
          </View>
        )}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Add Crew</Text>
        </TouchableOpacity>
      </View>
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
