import React from "react";
import { View, Image, Text } from "react-native";
import SignInComponent from "../components/signin-screen/SignInComponent";
import SignInStyles from "../components/signin-screen/SignInStyles";
import EmailLink from "../components/info-screen/EmailLink";
import Colors from "../../utils/theme";

const HeaderComponent = () => (
  <View style={SignInStyles.header}>
    <Image
      source={require("../../assets/logo192.png")}
      style={SignInStyles.headerImage}
    />
  </View>
);

const FooterComponent = () => {
  return (
    <View style={[SignInStyles.footer, { alignItems: "center" }]}>
      <Text
        style={
         [SignInStyles.footerParagraphText,{ color: Colors.dark.textPrimary, textAlign: "center" }]
        }
      >
        In case of questions or issues, please contact{" "}
        <EmailLink
          name="support@peoplehouse.lego.com"
          color={Colors.dark.textPrimary}
        />
      </Text>
    </View>
  );
};

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
