import { createStackNavigator } from "@react-navigation/stack";
import EventScreen from "../../screens/SpecificEventScreen";
import EventsScreen from "../../screens/EventsScreen";
import Colors from "../../../utils/theme";
import { View, Image } from "react-native";

const EventStack = createStackNavigator();

const CustomBackImage = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/event-screen/back.png")}
        style={{ width: 20, height: 20, marginHorizontal: 10 }}
      />
    </View>
  );
};

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
    </EventStack.Navigator>
  );
};

export default EventStackNavigator;
