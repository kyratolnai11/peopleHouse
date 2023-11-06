/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Appearance } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Colors from "../../../utils/theme";
import { Auth } from "aws-amplify";
import { fetchUserData } from "../cognito/UserCognito";
import { RootStackParamList } from "../signin-screen/SignInComponent";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer: React.FC<{
  state: any;
  navigation: any;
  descriptors: any;
}> = ({ state, descriptors, navigation }) => {
  const colorScheme = Appearance.getColorScheme();
  const [userName, setUserName] = useState("");

  type navProp = StackNavigationProp<RootStackParamList, "SignIn">;

  const stackNavigation = useNavigation<navProp>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        setUserName(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      console.log("Sign out successful.");

      // Navigate to SignInScreen using AuthStackNavigator
      stackNavigation.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleUserNameClick = () => {
    // Navigate to the desired page here
    // Replace 'YourProfileScreen' with the actual screen you want to navigate to
    navigation.navigate("MyInfo");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: Colors.dark.secondary }}
      >
        <View style={{ padding: 20 }}>
          <TouchableOpacity onPress={handleUserNameClick}>
            <Image
              source={require("../../../assets/lego-figure.png")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
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
        <TouchableOpacity
          onPress={handleSignOut}
          style={{ paddingVertical: 15 }}
        >
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
