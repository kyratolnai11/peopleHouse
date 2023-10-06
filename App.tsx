import "react-native-gesture-handler";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen.tsx";
import InfoScreen from "./src/screens/InfoScreen.tsx";
import CustomDrawer from "./src/components/navigation/CustomDrawer.tsx";
import Colors from "./utils/theme.ts";
import { Appearance } from "react-native";
import { ActionBarImage } from "./src/components/navigation/ActionBarImage.tsx";

//Important: Remember to import Auth when we get to the authentication part

Amplify.configure(awsconfig);

const Drawer = createDrawerNavigator();

export default function App() {
  const colorScheme = Appearance.getColorScheme();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawer}
        screenOptions={{
          headerStyle: { backgroundColor: Colors.dark.primary, height: 120 },
          headerTintColor: Colors.dark.primaryBackground,
          drawerActiveBackgroundColor:
            colorScheme === "dark"
              ? Colors.dark.secondaryBackground
              : Colors.light.secondaryBackground,
          drawerActiveTintColor:
            colorScheme === "dark"
              ? Colors.dark.textPrimary
              : Colors.light.textPrimary,
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            fontSize: 15,
          },
          headerRight: () => <ActionBarImage />,
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Info" component={InfoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
