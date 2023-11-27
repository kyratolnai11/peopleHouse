import { createStackNavigator } from "@react-navigation/stack";
import EventScreen from "../../screens/SpecificEventScreen";
import Colors from "../../../utils/theme";
import EventAvailibityScreen from "../event-screen/EventAvailibilityScreen";
import CustomBackImage from "./CustomBackButton";
import MyBookingsScreen from "../../screens/MyBookingsScreen";
import SignDownFromEventScreen from "../../screens/SignDownScreen";

const MyBookingsStack = createStackNavigator();

const MyBookingsNavigation: React.FC = () => {
  return (
    <MyBookingsStack.Navigator initialRouteName="MyBookings">
      <MyBookingsStack.Screen
        name="Event"
        component={EventScreen as React.FC}
        initialParams={{ eventId: "yourEventId", sourceScreen: "" }}
        options={{
          title: "",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
      <MyBookingsStack.Screen
        name="MyBookings"
        component={MyBookingsScreen}
        options={{
          headerShown: false,
        }}
      />
      <MyBookingsStack.Screen
        name="Availibility"
        component={EventAvailibityScreen as React.FC}
        options={{
          title: "Availibility",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
      <MyBookingsStack.Screen
        name="EventSignDown"
        component={SignDownFromEventScreen as React.FC}
        options={{
          title: "Sign up for event",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
    </MyBookingsStack.Navigator>
  );
};

export default MyBookingsNavigation;
