import "react-native-gesture-handler";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import React from "react";

import AddCrewScreen from "./src/screens/AddCrewScreen.tsx";

Amplify.configure(awsconfig);

export default function App() {
  return <AddCrewScreen />;
  // return (
  //   <NavigationContainer>
  //     <DrawerNavigation />
  //   </NavigationContainer>
  // );
}
