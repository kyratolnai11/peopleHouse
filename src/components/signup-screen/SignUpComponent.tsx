import { Auth } from "aws-amplify";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
import { addUser } from "../../database/UserDBConnection";
import { CreateUserInput, UserType } from "../../API";
import CustomButton from "../event-screen/CustomButton";

//REMOVE - once system is finished. It is only for our use

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(UserType.NORMAL);

  const clearFields = () => {
    // Clear input fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setSelectedUserType(UserType.NORMAL);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSignUp = async () => {
    try {
      const signUpResponse = await Auth.signUp({
        username: email,
        password,
        attributes: {
          "custom:firstName": firstName,
          "custom:lastName": lastName,
          email: email,
        },
      });

      const userId = signUpResponse.userSub;

      const userToAdd: CreateUserInput = {
        id: userId,
        firstname: firstName,
        lastname: lastName,
        userType: selectedUserType,
        email: email,
      };

      await addUser(userToAdd);

      Alert.alert(
        "Success",
        "Sign-up successful, please verify account in Amplify",
        [{ text: "OK", onPress: clearFields }]
      );
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creat an account for People House</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Press here to select User Type" onPress={toggleModal} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {Object.values(UserType).map((type) => (
              <TouchableHighlight
                key={type}
                onPress={() => {
                  setSelectedUserType(type);
                  toggleModal();
                }}
              >
                <Text style={styles.modalText}>{type}</Text>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      </Modal>
      <TextInput
        style={[
          styles.input,
          { color: "black", fontWeight: "bold", fontSize: 17 },
        ]}
        placeholder={UserType[selectedUserType]}
        editable={false}
      />
      <CustomButton name="Sign Up" action={() => handleSignUp()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    padding: 10,
  },
  selectedUserType: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SignUpScreen;
