// AuthNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../screens/SignInScreen';
import DrawerNavigation from './DrawerNavigation';
import SignUpScreen from '../signup-screen/SignUpComponent';

const AuthStackNavigator: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
            name="HomeScreen"
            component={DrawerNavigation}
            options={{ headerShown: false }}/>

      <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}/>

    </Stack.Navigator>
    
    
  );
};

export default AuthStackNavigator;
