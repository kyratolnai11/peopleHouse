import React from "react";
import { Auth } from 'aws-amplify';
import {View, Image} from 'react-native';
import SignInComponent from '../components/signin-screen/SignInComponent'


const SignInScreen: React.FC =() => {
    return(
            <SignInComponent/>
        
    )
}

export default SignInScreen;