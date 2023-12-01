import { View, Image } from "react-native";
import SignInStyles from "./SignInStyles";

const HeaderComponent: React.FC = () => (
  <View style={SignInStyles.header}>
    <Image
      source={require("../../../assets/logo192.png")}
      style={SignInStyles.headerImage}
    />
  </View>
);

export default HeaderComponent;
