import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../../utils/theme";
import EventAvailibityScreen from "../event-screen/EventAvailibilityScreen";
import CustomBackImage from "./CustomBackButton";
import MyBookingsScreen from "../../screens/MyBookingsScreen";
import SignDownFromEventScreen from "../../screens/SignDownScreen";
import MyBookingSpecificEvent from "../../screens/MyBookingSpecificEventScreen";

const MyBookingsStack = createStackNavigator();

const MyBookingsNavigation: React.FC = () => {
  return (
    <MyBookingsStack.Navigator initialRouteName="MyBookings">
      <MyBookingsStack.Screen
        name="MyBookingEvent"
        component={MyBookingSpecificEvent as React.FC}
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
          title: "Unregister for event",
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
