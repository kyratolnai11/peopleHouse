import { createStackNavigator } from "@react-navigation/stack";
import EventScreen from "../../screens/SpecificEventScreen";
import EventsScreen from "../../screens/EventsScreen";

const EventStack = createStackNavigator();

const EventStackNavigator = () => {
  return (
    <EventStack.Navigator initialRouteName="Events">
      <EventStack.Screen
        name="Event"
        component={EventScreen as React.FC}
        initialParams={{ eventId: "yourEventId" }}
      />
      <EventStack.Screen
        name="Events"
        component={EventsScreen}
        options={{ title: "Events" }}
      />
    </EventStack.Navigator>
  );
};

export default EventStackNavigator;
