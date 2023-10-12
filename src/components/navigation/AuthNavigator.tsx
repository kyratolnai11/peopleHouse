// AuthNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../screens/SignInScreen';
import HomeScreen from '../../screens/HomeScreen';
import InfoScreen from '../../screens/InfoScreen';
const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }} // Optional: Hide header for SignInScreen
      />
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}/>

<Stack.Screen
            name="InfoScreen"
            component={InfoScreen}
            options={{ headerShown: false }}/>

    </Stack.Navigator>
    
  );
};

export default AuthStackNavigator;
