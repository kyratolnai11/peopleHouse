import React from "react";
import { View } from "react-native";
import SignInComponent from "../components/signin-screen/SignInComponent";
import SignInStyles from "../components/signin-screen/SignInStyles";
import FooterComponent from "../components/signin-screen/FooterComponent";
import HeaderComponent from "../components/signin-screen/HeaderComponent";

const SignInScreen: React.FC = () => {
  return (
    <View style={SignInStyles.container}>
      <HeaderComponent />
      <View style={SignInStyles.content}>
        <SignInComponent />
      </View>
      <FooterComponent />
    </View>
  );
};

export default SignInScreen;
