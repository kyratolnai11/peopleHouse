import React from "react";
import { Auth } from 'aws-amplify';
import {View, Image, Text, Linking} from 'react-native';
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

const FooterComponent = () => {
    const emailAddress = 'support@peoplehouse.lego.com';
  
    const handleEmailLinkPress = () => {
      Linking.openURL(`mailto:${emailAddress}`);
    };
  
    return (
      <View style={SignInStyles.footer}>
        <Text style={SignInStyles.footerParagraphText}>
          In case of questions or issues, please contact{' '}
          <Text style={{ textDecorationLine: 'underline', color: 'white' }} onPress={handleEmailLinkPress}>
            {emailAddress}
          </Text>
          .
        </Text>
      </View>
    );
  };

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