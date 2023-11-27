import { createStackNavigator } from "@react-navigation/stack";
import EventScreen from "../../screens/SpecificEventScreen";
import EventsScreen from "../../screens/EventsScreen";
import Colors from "../../../utils/theme";
import EventAvailibityScreen from "../event-screen/EventAvailibilityScreen";
import CustomBackImage from "./CustomBackButton";
import CreateEventScreen from "../../screens/CreateEventScreen";
import MyBookingsScreen from "../../screens/MyBookingsScreen";
import SignUpForEventScreen from "../event-screen/SignUpForEventScreen";

const EventStack = createStackNavigator();

const EventStackNavigator: React.FC = () => {
  return (
    <EventStack.Navigator initialRouteName="EventScreen">
      <EventStack.Screen
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
      <EventStack.Screen
        name="MyBookings"
        component={MyBookingsScreen as React.FC}
        initialParams={{ eventId: "yourEventId", sourceScreen: "" }}
        options={{
          title: "",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
      <EventStack.Screen
        name="EventScreen"
        component={EventsScreen}
        options={{ headerShown: false }}
      />
      <EventStack.Screen
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
      <EventStack.Screen
        name="CreateEvent"
        component={CreateEventScreen}
        options={{
          title: "Create event",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
      <EventStack.Screen
        name="EventSignUp"
        component={SignUpForEventScreen as React.FC}
        options={{
          title: "Sign up for event",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
    </EventStack.Navigator>
  );
};

export default EventStackNavigator;
