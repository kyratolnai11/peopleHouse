import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../../utils/theme";
import CustomBackImage from "./CustomBackButton";
import AddCrewScreen from "../../screens/AddCrewScreen";
import MyInfoScreen from "../../screens/MyInfoScreen";

const MyInfoStack = createStackNavigator();

const MyInfoStackNavigation: React.FC = () => {
  return (
    <MyInfoStack.Navigator>
      <MyInfoStack.Screen
        name="My Info"
        component={MyInfoScreen}
        options={{ title: "" }}
      />
      <MyInfoStack.Screen
        name="AddCrew"
        component={AddCrewScreen}
        options={{
          title: "",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
    </MyInfoStack.Navigator>
  );
};

export default MyInfoStackNavigation;
