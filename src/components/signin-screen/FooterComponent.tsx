import { View, Text } from "react-native";
import SignInStyles from "./SignInStyles";
import EmailLink from "../info-screen/EmailLink";
import { Colors } from "react-native/Libraries/NewAppScreen";

const FooterComponent = () => {
  return (
    <View style={[SignInStyles.footer, { alignItems: "center" }]}>
      <Text
        style={[
          SignInStyles.footerParagraphText,
          { color: Colors.dark.textPrimary, textAlign: "center" },
        ]}
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

export default FooterComponent;
