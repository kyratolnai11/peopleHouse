import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../../utils/theme";
import CustomBackImage from "./CustomBackButton";
import HomestayScreen from "../../screens/HomestayScreen";
import ConferenceScreen from "../../screens/ConferenceScreen";

const HomestayStack = createStackNavigator();

const HomeStayNavigation: React.FC = () => {
  return (
    <HomestayStack.Navigator>
      <HomestayStack.Screen
        name="HomestayScreen"
        component={HomestayScreen}
        options={{ headerShown: false }}
      />
      <HomestayStack.Screen
        name="Conference"
        component={ConferenceScreen}
        options={{
          title: "Conference",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
    </HomestayStack.Navigator>
  );
};

export default HomeStayNavigation;
