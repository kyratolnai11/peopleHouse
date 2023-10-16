import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";
import CustomDrawer from "./CustomDrawer";
import { Appearance } from "react-native";
import { ActionBarImage } from "./ActionBarImage";
import HomeScreen from "../../screens/HomeScreen";
import InfoScreen from "../../screens/InfoScreen";
import SignUpScreen from "../signup-screen/SignUpComponent";
import SignInScreen from "../../screens/SignInScreen"
import AuthNavigator from "./AuthNavigator";
import Colors from "../../../utils/theme";
import MyInfoScreen from "../../screens/MyInfoScreen";


const DrawerNavigation: React.FC = () => {
  const colorScheme = Appearance.getColorScheme();
  const Drawer = createDrawerNavigator();

  return (
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
      <Drawer.Screen name="SignUp" component={SignUpScreen} />
      <Drawer.Screen
        name="MyInfo"
        component={MyInfoScreen}
        options={{
          // Hide the label for Settings screen
          drawerLabel: () => null, // or drawerLabel: '',
          drawerItemStyle: { display: "none" }, // or other styling as needed
        }}
      />      
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
