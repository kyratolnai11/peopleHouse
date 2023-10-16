import React from "react";
import { Auth } from 'aws-amplify';
import {View, Image, Text, Linking} from 'react-native';
import SignInStyles from '../components/signin-screen/SignInStyles'
import MyInfoComponent from '../components/see-my-information/MyInfoComponent';

const MyInfoScreen: React.FC =() => {
    return (
        <View style={SignInStyles.container}>
            <MyInfoComponent/>
        </View>
      );
}

export default MyInfoScreen;