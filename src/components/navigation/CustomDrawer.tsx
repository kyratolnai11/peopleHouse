/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { CommonActions } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Appearance } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Colors from "../../../utils/theme";
import { Auth } from "aws-amplify";
import SignIn from "../../screens/SignInScreen"
import AuthNavigator from "./AuthNavigator";

const CustomDrawer: React.FC<{
  state: any;
  navigation: any;
  descriptors: any;
}> = ({ state, navigation, descriptors }) => {
  const colorScheme = Appearance.getColorScheme();
  const [userName, setUserName] = useState(''); // State to hold the user's name

  useEffect(() => {
    // Function to fetch the logged-in user's attributes
    const fetchUserData = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        const { attributes } = userInfo;
        const firstName = attributes['custom:firstName'] || '';
        const lastName = attributes['custom:lastName'] || '';
        setUserName(`${firstName} ${lastName}`);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); // Fetch user data when the component mounts
  }, []);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      console.log('Sign out successful.');
  
      // Navigate to SignInScreen using AuthStackNavigator
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleUserNameClick = () => {
    // Navigate to the desired page here
    // Replace 'YourProfileScreen' with the actual screen you want to navigate to
    navigation.navigate('MyInfo');
  };


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: Colors.dark.secondary }}
      >
        <View style={{ padding: 20 }}>
          <Image
            source={require("../../../assets/lego-figure.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginBottom: 5,
            }}
            onPress={handleUserNameClick}
          >
            {userName} {/* Display the user's name */}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor:
              colorScheme === "dark"
                ? Colors.dark.primaryBackground
                : Colors.light.primaryBackground,
            paddingTop: 10,
          }}
        >
          <DrawerItemList
            state={state}
            navigation={navigation}
            descriptors={descriptors}
          />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={handleSignOut} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
