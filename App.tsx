import "react-native-gesture-handler";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import React from "react";
import { Auth } from 'aws-amplify';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/components/navigation/DrawerNavigation";
import SignUpScreen from "./src/screens/SignUpScreen";

//Important: Remember to import Auth when we get to the authentication part

Amplify.configure(awsconfig);

export default function App() {
  return (
    <SignUpScreen/>
  );
}