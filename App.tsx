import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import Venues from './src/screens/Venues.tsx';

//Important: Remember to import Auth when we get to the authentication part

Amplify.configure(awsconfig);

export default function App() {

  return (
    <Venues/>
  );

  /*
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
