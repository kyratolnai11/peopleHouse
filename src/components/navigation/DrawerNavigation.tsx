import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import { Appearance } from "react-native";
import { ActionBarImage } from "./ActionBarImage";
import HomeScreen from "../../screens/HomeScreen";
import InfoScreen from "../../screens/InfoScreen";
import SignUpScreen from "../signup-screen/SignUpComponent";
import Colors from "../../../utils/theme";
import VenuesScreen from "../../screens/VenuesScreen";
import AddCrewScreen from "../../screens/AddCrewScreen";
import EventsScreen from "../../screens/EventsScreen";

const DrawerNavigation: React.FC = () => {
  const colorScheme = Appearance.getColorScheme();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawer}
      screenOptions={{
        headerStyle: { backgroundColor: Colors.dark.primary, height: 120 },
        headerTintColor: Colors.dark.primaryBackground,
        drawerActiveBackgroundColor:
          colorScheme === "dark"
            ? Colors.dark.secondaryBackground
            : Colors.light.secondaryBackground,
        drawerActiveTintColor:
          colorScheme === "dark"
            ? Colors.dark.textPrimary
            : Colors.light.textPrimary,
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          fontSize: 15,
        },
        headerRight: () => <ActionBarImage />,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Info" component={InfoScreen} />
      <Drawer.Screen name="Venues" component={VenuesScreen} />
      <Drawer.Screen name="Add Crew" component={AddCrewScreen} />
      <Drawer.Screen name="Events" component={EventsScreen} />
      <Drawer.Screen name="SignUp" component={SignUpScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
