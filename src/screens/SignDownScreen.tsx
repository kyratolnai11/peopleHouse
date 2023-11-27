import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AttendeeCrew, AttendeeUser, Crew, User } from "../API";
import { Auth } from "aws-amplify";
import { fetchUserById } from "../database/UserDBConnection";
import { fetchCrewsByUser } from "../database/CrewDBConnection";
import EventHeader from "../components/event-screen/EventHeader";
import { sharedStyles } from "../../utils/SharedStyles";
import signDownFromEventStyles from "../components/event-screen/SignDownFromEventStyles";

import LoadingSpinner from "../components/event-screen/LoadingSpinner";
import { getAttendeeUsersByUserID } from "../database/AttendeeUserDBConnection";
import SignDownButton from "../components/event-screen/SignDownButton";
import CustomButton from "../components/event-screen/CustomButton";

type RootStackParamList = {
  EventSignDown: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    ticketsLeft: number;
    venueId: string;
    eventBrief: string;
    eventId: string;
  };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "EventSignDown">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const SignDownFromEventScreen: React.FC<EventScreenProps> = ({ route }) => {
  const {
    eventLocation,
    eventName,
    eventTime,
    ticketsLeft,
    venueId,
    eventBrief,
    eventId,
  } = route.params;

  const [userInfo, setUserInfo] = useState<User | undefined>();
  const [attendeeUsers, setAttendeeUsers] = useState<AttendeeUser[]>();

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

  const handleUnRegisterUser = async () => {
    if (userInfo && userInfo.id) {
      const databaseAttendeeUsers = await getAttendeeUsersByUserID(userInfo.id);
      if (databaseAttendeeUsers) {
        if (databaseAttendeeUsers.items) {
          const userItems: AttendeeUser[] = databaseAttendeeUsers.items.filter(
            (item) => item !== null
          ) as AttendeeUser[];
          setAttendeeUsers(userItems);
        } else {
          console.log(
            "Invalid data format for userCrewsData: Missing 'items' field"
          );
        }
      }
      //   if (attendeeUsers && attendeeUsers.length > 0) {
      //     // Check if the current user's ID is in the list of attendees
      //     const isRegistered = attendeeUsers.some(
      //       (user) => user.eventId === eventId
      //     );
      //     console.log("Is user registered?: ", isRegistered);

      //     if (isRegistered) {
      //       const attendeeUserId = attendeeUsers.find(
      //         (user) => user.eventId === eventId
      //       )?.id;
      //       if (attendeeUserId) {
      //         deleteUserAttendee(attendeeUserId);
      //         setIsUserRegistered(false);
      //       }
      //     }
      //   }
    }
  };

  useEffect(() => {
    fetchUserInfo().then(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("Is loading change");
    console.log(isLoading);
  }, [isLoading]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={sharedStyles.mainContainer}>
          <EventHeader
            venueId={venueId}
            title={eventName}
            venueName={eventLocation}
            time={eventTime}
            brief={eventBrief}
          />
          {isLoading === false ? (
            <View style={signDownFromEventStyles.container}>
              <View style={signDownFromEventStyles.userImageContainer}></View>

              <View style={signDownFromEventStyles.userNameContainer}>
                <Text style={signDownFromEventStyles.infoItem}>
                  {userInfo?.firstname} {userInfo?.lastname}
                </Text>
                <View style={signDownFromEventStyles.userImageContainer}>
                  <Image
                    source={require("../../assets/my-infomration-sceen/lego-figure.png")}
                    style={signDownFromEventStyles.userImage}
                  />
                  <CustomButton
                    name={"Unregister"}
                    action={() => handleUnRegisterUser()}
                  />
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
