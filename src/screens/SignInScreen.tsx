import React from "react";
import { Auth } from 'aws-amplify';
import {View, Image} from 'react-native';
import SignInComponent from '../components/signin-screen/SignInComponent'
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from "./InfoScreen";
import AuthStackNavigator from '../components/navigation/AuthNavigator';



const SignInScreen: React.FC =() => {
    return(
            <SignInComponent/>
        
    )
}

export default SignInScreen;