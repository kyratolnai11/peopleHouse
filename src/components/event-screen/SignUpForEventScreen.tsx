import { RouteProp, useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EventHeader from "./EventHeader";
import { sharedStyles } from "../../../utils/SharedStyles";
import CustomButton from "./CustomButton";
import { Auth } from "aws-amplify";
import { Crew, User } from "../../API";
import { fetchCrewsByUser } from "../../database/CrewDBConnection";
import { fetchUserById } from "../../database/UserDBConnection";
import CrewCard from "../see-my-information/CrewCard";
import SignUpForEventStyles from "./SignUpForEventStyles";
import LoadingSpinner from "./LoadingSpinner";
import {
  addCrewAttendee,
  addUserAttendee,
  deleteUserAttendee,
  deleteCrewAttendee,
  getAttendeeUserByID,
  getAttendeeCrewrByID,
} from "../../database/EventDBConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../../utils/theme";

type RootStackParamList = {
  EventSignUp: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    ticketsLeft: number;
    venueId: string;
    eventBrief: string;
    eventId: string;
  };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "EventSignUp">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

const SignUpForEventScreen: React.FC<EventScreenProps> = ({ route }) => {
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
  const [userCrews, setUserCrews] = useState<Crew[]>();
  const isFocused = useIsFocused();
  const [isUserRegistered, setIsUserRegistered] = useState<boolean>(false);
  const [isCrewRegistered, setIsCrewRegistered] = useState<{
    [key: string]: boolean;
  }>({});

  const fetchData = async () => {
    if (isFocused) {
      // Fetch user info
      await fetchUserInfo();
      checkUserRegistrationStatus();

      // Check registration status for each crew
      if (userCrews && userCrews.length > 0) {
        userCrews.forEach((crew) => {
          checkCrewRegistrationStatus(crew.id);
        });
      }
    }
  };

  const fetchUserInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });

      const databaseUser = await fetchUserById(user.attributes.sub);
      const databaseCrews = await fetchCrewsByUser(user.attributes.sub);

      setUserInfo(databaseUser);

      if (databaseCrews) {
        if (databaseCrews.items) {
          const crewItems: Crew[] = databaseCrews.items.filter(
            (item) => item !== null
          ) as Crew[];
          setUserCrews(crewItems);
        } else {
          console.log(
            "Invalid data format for userCrewsData: Missing 'items' field"
          );
        }
      } else {
        console.log("No crews data received or data format is invalid.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkUserRegistrationStatus = async () => {
    if (userInfo && userInfo.id) {
      const response = getAttendeeUserByID(userInfo.id);
      if (response == null) {
        setIsUserRegistered(false);
      }
      setIsUserRegistered(true);
    }
  };

  const handleRegisterUser = async () => {
    if (userInfo && userInfo.id) {
      addUserAttendee(eventId, userInfo.id);
      checkUserRegistrationStatus();
    }
  };

  const handleUnRegisterUser = async () => {
    if (userInfo && userInfo.id) {
      console.log(eventId, userInfo.id);

      deleteUserAttendee(userInfo.id);
      setIsUserRegistered(false);
    }
  };

  const checkCrewRegistrationStatus = async (crewId: string) => {
    const response = await getAttendeeCrewrByID(crewId);
    setIsCrewRegistered((prevState) => ({
      ...prevState,
      [crewId]: !!response?.id,
    }));
  };

  const handleRegisterCrew = async (crewId: string) => {
    addCrewAttendee(eventId, crewId);
    setIsCrewRegistered((prevState) => ({ ...prevState, [crewId]: true }));
    console.log("Adding crew attendee: " + crewId);
  };

  const handleUnRegisterCrew = async (crewID: string) => {
    deleteCrewAttendee(crewID);
    setIsCrewRegistered((prevState) => ({ ...prevState, [crewID]: false }));
    console.log("Deleting crew attendee: " + crewID);
  };

  useEffect(() => {
    const fetchData = async () => {
        console.log("Fetching initial data...");
        await fetchUserInfo();
        checkUserRegistrationStatus();
  
        if (userCrews && userCrews.length > 0) {
          userCrews.forEach((crew) => {
            checkCrewRegistrationStatus(crew.id);
          });
        }
      };
  
      fetchData();
  }, []);

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
          <View style={SignUpForEventStyles.container}>
            <View style={SignUpForEventStyles.userImageContainer}>
              <Image
                source={require("../../../assets/my-infomration-sceen/lego-figure.png")}
                style={SignUpForEventStyles.userImage}
              />
            </View>

            <View style={SignUpForEventStyles.userNameContainer}>
              <Text style={SignUpForEventStyles.infoItem}>
                {userInfo?.firstname} {userInfo?.lastname}
              </Text>
              {isUserRegistered ? (
                <CustomButton
                  name={"Unregister"}
                  action={() => handleUnRegisterUser()}
                />
              ) : (
                <CustomButton
                  name={"Register"}
                  action={() => handleRegisterUser()}
                />
              )}
            </View>
            <Text style={SignUpForEventStyles.crewsection}>My crew:</Text>
            {userCrews && userCrews ? (
              userCrews.length === 0 ? (
                <Text style={SignUpForEventStyles.noCrewText}>
                  Currently you have no crew.
                </Text>
              ) : (
                <View style={SignUpForEventStyles.crewGrid}>
                  {userCrews.map((item) =>
                    item ? (
                      <View
                        style={SignUpForEventStyles.crewCards}
                        key={item.id}
                      >
                        <CrewCard crew={item} />

                        {isCrewRegistered[item.id] ? (
                          <TouchableOpacity
                            style={[SignUpForEventStyles.button]}
                            onPress={() => handleUnRegisterCrew(item.id)}
                          >
                            <Text style={SignUpForEventStyles.buttonText}>
                              Unregister
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={[SignUpForEventStyles.button]}
                            onPress={() => handleRegisterCrew(item.id)}
                          >
                            <Text style={SignUpForEventStyles.buttonText}>
                              Register
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    ) : null
                  )}
                </View>
              )
            ) : (
              <LoadingSpinner />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpForEventScreen;
