import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../../utils/theme";
import CustomBackImage from "./CustomBackButton";
import VenuesScreen from "../../screens/VenuesScreen";
import VenueDetailsScreen from "../see-specific-venue/VenueDetailsComponent";

const VenueStack = createStackNavigator();

const VenueStackNavigation: React.FC = () => {
  return (
    <VenueStack.Navigator>
      <VenueStack.Screen
        name="VenuesScreen"
        component={VenuesScreen}
        options={{ title: "" }}
      />
      <VenueStack.Screen
        name="SpecificVenue"
        component={VenueDetailsScreen as React.FC}
        options={{
          title: "",
          headerBackTitleStyle: { color: Colors.light.textPrimary },
          headerBackImage: () => <CustomBackImage />,
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
        }}
      />
    </VenueStack.Navigator>
  );
};

export default VenueStackNavigation;
