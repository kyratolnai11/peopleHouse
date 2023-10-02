import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Important: Remember to import Auth when we get to the authentication part

Amplify.configure(awsconfig);

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
