import "react-native-gesture-handler";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import Venues from './src/screens/Venues.tsx';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/components/navigation/DrawerNavigation.tsx";
import { getVenues } from "./src/GetVenues.ts";

//Important: Remember to import Auth when we get to the authentication part

Amplify.configure(awsconfig);

export default function App() {
  getVenues()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  /*return (
    <Venues/>
  );*/

  
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
