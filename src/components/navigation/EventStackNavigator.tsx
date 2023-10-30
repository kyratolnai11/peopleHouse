import { createStackNavigator } from "@react-navigation/stack";
import EventScreen from "../../screens/SpecificEventScreen";
import EventsScreen from "../../screens/EventsScreen";
import Colors from "../../../utils/theme";
import EventAvailibityScreen from "../event-screen/EventAvailibilityScreen";
import CustomBackImage from "./CustomBackButton";

const EventStack = createStackNavigator();

const EventStackNavigator: React.FC = () => {
  return (
    <EventStack.Navigator initialRouteName="Events">
      <EventStack.Screen
        name="Event"
        component={EventScreen as React.FC}
        initialParams={{ eventId: "yourEventId" }}
        options={{
          title: "",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
      <EventStack.Screen
        name="Events"
        component={EventsScreen}
        options={{ title: "" }}
      />
      <EventStack.Screen
        name="Availibility"
        component={EventAvailibityScreen as React.FC}
        options={{
          title: "",
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
