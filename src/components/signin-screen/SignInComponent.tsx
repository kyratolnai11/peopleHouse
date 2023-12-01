import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Auth } from "aws-amplify";
import { useNavigation, CommonActions } from "@react-navigation/native";
import SignInStyles from "./SignInStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { sharedStyles } from "../../../utils/SharedStyles";
import LoadingSpinner from "../event-screen/LoadingSpinner";

export type RootStackParamList = {
  SignIn: undefined;
  HomeScreen: undefined;
  SignUp: undefined;
};

type navProp = StackNavigationProp<RootStackParamList, "SignIn">;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation<navProp>();
  const [loading, isLoading] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const clearFields = () => {
    // Clear input fields
    setEmail("");
    setPassword("");
  };

  async function currentAuthenticatedUser() {
    try {
      await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });
      isLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleLogin = async () => {
    try {
      isLoading(true);
      await Auth.signIn(email, password);
      currentAuthenticatedUser();
      return true;
    } catch (error) {
      isLoading(false);
      Alert.alert(
        "Error",
        "Email address or password is incorrect. Please try again",
        [{ text: "OK", onPress: clearFields }]
      );
      return false;
    }
  };

  const checkFields = async () => {
    if (
      email === null ||
      email === "" ||
      password === null ||
      password === ""
    ) {
      Alert.alert(
        "Error",
        "One or more fields are empty, please fill in all the information",
        [{ text: "OK", onPress: clearFields }]
      );
    } else {
      const loginSuccess = await handleLogin();

      if (loginSuccess) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "HomeScreen" }],
          })
        );

        clearFields();
      }
    }
  };

  return (
    <View style={SignInStyles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={SignInStyles.headerText}>Who are you?</Text>
          <View style={SignInStyles.inputContainer}>
            <Text style={SignInStyles.inputTitle}>Email</Text>
            <TextInput
              style={sharedStyles.input}
              keyboardType="email-address"
              placeholder="Please enter your email address"
              value={email}
              onChangeText={(text) => setEmail(text.toLowerCase())}
            />
          </View>
          <View style={SignInStyles.inputContainer}>
            <Text style={SignInStyles.inputTitle}>Password</Text>
            <View style={SignInStyles.passwordInput}>
              <TextInput
                style={SignInStyles.passwordTextInput}
                placeholder="Please enter your password"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Ionicons
                  name={passwordVisible ? "eye" : "eye-off"}
                  size={24}
                  color="gray"
                  style={SignInStyles.eye}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={checkFields}
            style={SignInStyles.loginButton}
          >
            <Text style={SignInStyles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
