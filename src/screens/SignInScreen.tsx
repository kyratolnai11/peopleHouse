import React from "react";
import { Auth } from 'aws-amplify';
import {View, Image} from 'react-native';
import SignInComponent from '../components/signin-screen/SignInComponent'
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from "./InfoScreen";
import SignInStyles from '../components/signin-screen/SignInStyles'
import AuthStackNavigator from '../components/navigation/AuthNavigator';

const HeaderComponent = () => (
    <View style={SignInStyles.header}>
        <Image 
        source={require('../../assets/logo192.png')}
        style={SignInStyles.headerImage} />
    </View>
);

const FooterComponent = () => (
    <View style={SignInStyles.footer}>
    </View>
  );

const SignInScreen: React.FC =() => {
    return (
        <View style={SignInStyles.container}>
          <HeaderComponent />
          <View style={SignInStyles.content}>
            <SignInComponent />
          </View>
          <FooterComponent />
        </View>
      );
}

export default SignInScreen;