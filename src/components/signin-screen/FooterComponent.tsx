import { View, Text } from "react-native";
import SignInStyles from "./SignInStyles";
import EmailLink from "../info-screen/EmailLink";
import Colors from "../../../utils/theme";

const FooterComponent = () => {
  return (
    <View style={[SignInStyles.footer, { alignItems: "center" }]}>
      <Text
        style={[
          SignInStyles.footerParagraphText,
          { color: Colors.light.white, textAlign: "center" },
        ]}
      >
        In case of questions or issues, please contact{" "}
        <EmailLink
          name="support@peoplehouse.lego.com"
          color={Colors.light.white}
        />
      </Text>
    </View>
  );
};

export default FooterComponent;
