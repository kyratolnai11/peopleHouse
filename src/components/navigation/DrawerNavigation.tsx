import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import { ActionBarImage } from "./ActionBarImage";
import HomeScreen from "../../screens/HomeScreen";
import InfoScreen from "../../screens/InfoScreen";
import SignUpScreen from "../signup-screen/SignUpComponent";
import Colors from "../../../utils/theme";
import EventStackNavigator from "./EventStackNavigator";
import VenueStackNavigation from "./VenueStackNavigation";
import AuthStackNavigator from "./AuthNavigator";
import MyInfoStackNavigation from "./MyInfoStackNavigation";
import HomeStayNavigation from "./HomestayNavigation";
import MyBookingsNavigation from "./MyBookingsNavigation";

const DrawerNavigation: React.FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawer}
      screenOptions={{
        headerStyle: { backgroundColor: Colors.light.primary, height: 120 },
        headerTintColor: Colors.light.black,
        drawerActiveBackgroundColor: Colors.light.secondaryBackground,
        drawerActiveTintColor: Colors.light.textPrimary,
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          fontSize: 15,
        },
        headerRight: () => <ActionBarImage />,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Help" component={InfoScreen} />
      <Drawer.Screen name="Events" component={EventStackNavigator} />
      <Drawer.Screen name="My bookings" component={MyBookingsNavigation} />
      <Drawer.Screen name="Venues" component={VenueStackNavigation} />
      <Drawer.Screen name="Homestay" component={HomeStayNavigation} />

      <Drawer.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerTitle: "Sign up",
          drawerLabel: "Sign up",
        }}
      />
      <Drawer.Screen
        name="AuthNav"
        component={AuthStackNavigator}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { display: "none" },
        }}
      />

      <Drawer.Screen
        name="MyInfo"
        component={MyInfoStackNavigation}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { display: "none" },
          headerTitle: "",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
