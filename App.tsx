import "react-native-gesture-handler";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen.tsx";
import InfoScreen from "./src/screens/InfoScreen.tsx";

//Important: Remember to import Auth when we get to the authentication part

Amplify.configure(awsconfig);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={InfoScreen} />
        <Drawer.Screen name="Info" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
