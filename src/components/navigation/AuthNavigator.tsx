// AuthNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../screens/SignInScreen';
import HomeScreen from '../../screens/HomeScreen';
import InfoScreen from '../../screens/InfoScreen';
import DrawerNavigation from './DrawerNavigation';

const AuthStackNavigator: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }} // Optional: Hide header for SignInScreen
      />
            <Stack.Screen
            name="HomeScreen"
            component={DrawerNavigation}
            options={{ headerShown: false }}/>

<Stack.Screen
            name="InfoScreen"
            component={InfoScreen}
            options={{ headerShown: false }}/>

    </Stack.Navigator>
    
  );
};

export default AuthStackNavigator;
