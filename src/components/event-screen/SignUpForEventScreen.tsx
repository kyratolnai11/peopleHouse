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
import { AttendeeCrew, AttendeeUser, Crew, User } from "../../API";
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
  getAttendeeUsersByUserID,
  getAttendeeCrewsByEventID,
} from "../../database/EventDBConnection";

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
  const [attendeeUsers, setAttendeeUsers] = useState<AttendeeUser[]>();
  const [attendeeCrews, setAttendeeCrews] = useState<AttendeeCrew[]>();

  const isFocused = useIsFocused();
  const [isUserRegistered, setIsUserRegistered] = useState<boolean>(false);
  const [isCrewRegistered, setIsCrewRegistered] = useState<{
[key: string]: boolean;
  }>({});

  const [isLoading, setIsLoading] = useState(true);



  const fetchUserInfo = async () => {
    if (isFocused) {
      try {
        console.log("Start fetching user info...");
  
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: false,
        });
  
        console.log("User authenticated:", user);
  
        const databaseUser = await fetchUserById(user.attributes.sub);
  
        console.log("Database user:", databaseUser);
  
        const databaseCrews = await fetchCrewsByUser(user.attributes.sub);
  
        console.log("Database crews:", databaseCrews);
  
        setUserInfo(databaseUser);
  
        if (databaseCrews) {
          if (databaseCrews.items) {
            const crewItems: Crew[] = databaseCrews.items.filter(
              (item) => item !== null
            ) as Crew[];
            setUserCrews(crewItems);
          } else {
            console.log("Invalid data format for userCrewsData: Missing 'items' field");
          }
        } else {
          console.log("No crews data received or data format is invalid.");
        }
  
        console.log("User info fetch successful.");
      } catch (error) {
        console.log("Error during fetchUserInfo:", error);
      }
    }
  };
  

  const checkUserRegistrationStatus = async () => {
    if(isFocused){

    console.log("Checking user registration status");

      if (userInfo && userInfo.id) {

        const databaseAttendeeUsers = await getAttendeeUsersByUserID(userInfo.id);
        if (databaseAttendeeUsers){
          console.log("Checking user registration status - IN THE 1ST IF ");
          if(databaseAttendeeUsers.items){
            console.log("Checking user registration status - IN THE 2ND IF");

            const userItems: AttendeeUser[] = databaseAttendeeUsers.items.filter(
              (item) => item !== null
            ) as AttendeeUser[];
            await setAttendeeUsers(userItems);
          } else {
            console.log(
              "Invalid data format for userCrewsData: Missing 'items' field"
            );
          }
        }

        if (attendeeUsers && attendeeUsers.length > 0) {
          console.log("Checking user registration status - IN THE 3RD IF");
          // Check if the current user's ID is in the list of attendees
          const isRegistered = attendeeUsers.some(user => user.eventId === eventId);  
          console.log("Is user registered?: ", isRegistered);
          setIsUserRegistered(isRegistered);
        }
        else{
          setIsUserRegistered(false);
        }
        
      }
    }
  };

  const handleRegisterUser = async () => {
    if (userInfo && userInfo.id) {
      addUserAttendee(eventId, userInfo.id);
      setIsUserRegistered(true);
    }
  };

  const handleUnRegisterUser = async () => {
    if (userInfo && userInfo.id) {

      const databaseAttendeeUsers = await getAttendeeUsersByUserID(userInfo.id);
      if (databaseAttendeeUsers){
        if(databaseAttendeeUsers.items){

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
      if (attendeeUsers && attendeeUsers.length > 0) {
        // Check if the current user's ID is in the list of attendees
        const isRegistered = attendeeUsers.some(user => user.eventId === eventId);  
        console.log("Is user registered?: ", isRegistered);

        if (isRegistered) {
          const attendeeUserId = attendeeUsers.find((user) => user.eventId === eventId)?.id;
          if (attendeeUserId) {
            deleteUserAttendee(attendeeUserId);
            setIsUserRegistered(false);
          }
        }
      }
    }
  };

  const checkCrewRegistrationStatus = async (crewId: string) => {
    if(isFocused){

    console.log("Checking crew registration status for crewId:", crewId);

  
      const databaseAttendeeCrew = await getAttendeeCrewsByEventID(eventId);
  
      if (databaseAttendeeCrew) {
        console.log("Checking crew registration status - IN THE 1ND IF");
        if (databaseAttendeeCrew.items) {
          console.log("Checking crew registration status - IN THE 2ND IF");
          const crewItems: AttendeeCrew[] = databaseAttendeeCrew.items.filter(
            (item) => item !== null
          ) as AttendeeCrew[];
          await  setAttendeeCrews(crewItems);
        } else {
          console.log(
            "Invalid data format for userCrewsData: Missing 'items' field"
          );
        }
  
        if (attendeeCrews && attendeeCrews.length > 0) {
          console.log("Checking crew registration status - IN THE 3RD IF");
          // Check if the current crew's ID is in the list of attendees
          const isCrewRegistered = attendeeCrews.some((crew) => crew.crewId === crewId);
          console.log("Is crew registered?:  ", isCrewRegistered);
          setIsCrewRegistered((prevState) => ({
            ...prevState,
            [crewId]: isCrewRegistered,
          }));
        }else {
          // If attendeeCrews is falsy or has length 0, set false for all crewIds
          setIsCrewRegistered((prevState) => ({
            ...prevState,
            [crewId]: false,
          }));
        }
      }
    }
  };
  

  const handleRegisterCrew = async (crewId: string) => {
    addCrewAttendee(eventId, crewId);
    setIsCrewRegistered((prevState) => ({ ...prevState, [crewId]: true }));
    console.log("Adding crew attendee: " + crewId);
  };

  const handleUnRegisterCrew = async (crewID: string) => {

    const databaseAttendeeCrew = await getAttendeeCrewsByEventID(eventId);
  
      if (databaseAttendeeCrew) {
        if (databaseAttendeeCrew.items) {
          const crewItems: AttendeeCrew[] = databaseAttendeeCrew.items.filter(
            (item) => item !== null
          ) as AttendeeCrew[];
          setAttendeeCrews(crewItems);
        } else {
          console.log(
            "Invalid data format for userCrewsData: Missing 'items' field"
          );
        }
  
        if (attendeeCrews && attendeeCrews.length > 0) {
          // Check if the current crew's ID is in the list of attendees
          const isCrewRegistered = attendeeCrews.some((crew) => crew.crewId === crewID);
          console.log("Is crew registered?: ", isCrewRegistered);

          if(isCrewRegistered){
            const attendeeCrewID = attendeeCrews.find((crew) => crew.crewId === crewID)?.id;
            if(attendeeCrewID){
              deleteCrewAttendee(attendeeCrewID);
    setIsCrewRegistered((prevState) => ({ ...prevState, [crewID]: false }));
    console.log("Deleting crew attendee: " + crewID);
            }
          }
        }
      }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch 
        console.log("Start fetching user info...");
        await fetchUserInfo();

        // Proceed with checks only if user info is available
        if (userInfo) {
          await checkUserRegistrationStatus();

          if (userCrews && userCrews.length > 0) {
            // Use a recursive function to iterate over crews one at a time
            const processCrews = async (index: number) => {
              if (index < userCrews.length) {
                await checkCrewRegistrationStatus(userCrews[index].id);
                await processCrews(index + 1);
              }
            };

            // Start the recursive processing
            await processCrews(0);
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error during data fetching:", error);
        // Handle errors as needed
      }
    };
    fetchData();
  }, [isFocused]);

  // ... (existing code)


  if (isLoading) {
    return <LoadingSpinner />;
  }

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
