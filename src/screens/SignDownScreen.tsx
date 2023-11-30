/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { User } from "../API";
import { Auth } from "aws-amplify";
import { fetchUserById } from "../database/UserDBConnection";
import EventHeader from "../components/event-screen/EventHeader";
import { sharedStyles } from "../../utils/SharedStyles";
import signDownFromEventStyles from "../components/event-screen/SignDownFromEventStyles";

import LoadingSpinner from "../components/event-screen/LoadingSpinner";
import { deleteUserAttendee } from "../database/AttendeeUserDBConnection";
import CustomButton from "../components/event-screen/CustomButton";
import Colors from "../../utils/theme";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  EventSignDown: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    ticketsLeft: number;
    venueId: string;
    eventBrief: string;
    eventId: string;
    attendeeUserId?: string;
  };
  MyBookings: undefined;
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "EventSignDown">;
type navProp = StackNavigationProp<RootStackParamList, "EventSignDown">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const SignDownFromEventScreen: React.FC<EventScreenProps> = ({ route }) => {
  const {
    eventLocation,
    eventName,
    eventTime,
    venueId,
    eventBrief,
    attendeeUserId,
  } = route.params;

  const [userInfo, setUserInfo] = useState<User | undefined>();

  const [isLoading, setIsLoading] = useState(true);

  const fetchUserInfo = async () => {
    try {
      console.log("Start fetching user info...");

      Auth.currentAuthenticatedUser({
        bypassCache: false,
      }).then((user) => {
        console.log("User authenticated:", user);

        fetchUserById(user.attributes.sub).then((dataBaseUser) => {
          console.log("Database user:", dataBaseUser);
          setUserInfo(dataBaseUser);
        });
      });
    } catch (error) {
      console.log("Error during fetchUserInfo:", error);
    }
  };

  const navigation = useNavigation<navProp>();

  const unregisterUser = async () => {
    if (attendeeUserId) {
      await deleteUserAttendee(attendeeUserId);
      Alert.alert(
        "Successfully Unregistered",
        "You are always welcome to come back!",
        [
          {
            text: "OK",
            onPress: () => {
              console.log("OK Pressed");
              navigation.navigate("MyBookings");
            },
          },
        ]
      );
    }
  };

  const buttonClicked =async () => {

    Alert.alert('Confirmation', 'Are you sure you want to unregister from this event?', [
      { text: 'Yes', onPress: unregisterUser  },
      { text: 'No', }
    ]);

    
  }

  useEffect(() => {
    fetchUserInfo().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        style={{ height: "100%", backgroundColor: Colors.light.white }}
      >
        <View style={[sharedStyles.mainContainer]}>
          <EventHeader
            venueId={venueId}
            title={eventName}
            venueName={eventLocation}
            time={eventTime}
            brief={eventBrief}
          />
          {isLoading === false ? (
            <View style={signDownFromEventStyles.container}>
              <View style={signDownFromEventStyles.userNameContainer}>
                <Text style={signDownFromEventStyles.infoItem}>
                  {userInfo?.firstname} {userInfo?.lastname}
                </Text>
                <View style={signDownFromEventStyles.userImageContainer}>
                  <Image
                    source={require("../../assets/my-infomration-sceen/lego-figure.png")}
                    style={signDownFromEventStyles.userImage}
                  />
                  <CustomButton name={"Unregister"} action={buttonClicked} />
                </View>
              </View>
            </View>
          ) : (
            <LoadingSpinner />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignDownFromEventScreen;
