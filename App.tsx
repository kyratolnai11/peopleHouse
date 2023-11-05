import "react-native-gesture-handler";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import React, { useEffect, useState } from "react";
import { Auth } from 'aws-amplify';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/components/navigation/DrawerNavigation";
import AuthNavigator from './src/components/navigation/AuthNavigator'; // Import AuthStackNavigator

Amplify.configure(awsconfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };
  
  useEffect(() => {
    checkAuth();
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigation /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
