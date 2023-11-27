import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AttendeeCrew, AttendeeUser, Crew, User } from "../API";
import { Auth } from "aws-amplify";
import { fetchUserById } from "../database/UserDBConnection";
import { fetchCrewsByUser } from "../database/CrewDBConnection";
import EventHeader from "../components/event-screen/EventHeader";
import { sharedStyles } from "../../utils/SharedStyles";
import signDownFromEventStyles from "../components/event-screen/SignDownFromEventStyles";

import LoadingSpinner from "../components/event-screen/LoadingSpinner";
import CrewCard from "../components/see-my-information/CrewCard";
import {
  getAttendeeCrewsByEventID,
  getAttendeeUsersByUserID,
} from "../database/AttendeeUserDBConnection";
import SignDownButton from "../components/event-screen/SignDownButton";

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
  const [userCrews, setUserCrews] = useState<Crew[]>();
  const [attendeeUsers, setAttendeeUsers] = useState<AttendeeUser[]>();
  const [attendeeCrews, setAttendeeCrews] = useState<AttendeeCrew[]>();

  const [isUserRegistered, setIsUserRegistered] = useState<boolean>(false);
  const [isCrewRegistered, setIsCrewRegistered] = useState<{
    [key: string]: boolean;
  }>({});

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

          fetchCrewsByUser(user.attributes.sub).then((databaseCrews) => {
            console.log("Database crews:", databaseCrews);

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

            console.log("User info fetch successful.");
          });
        });
      });
    } catch (error) {
      console.log("Error during fetchUserInfo:", error);
    }
  };

  const checkUserRegistrationStatus = async () => {
    console.log("Checking user registration status");

    if (userInfo && userInfo.id) {
      getAttendeeUsersByUserID(userInfo.id).then((user) => {
        if (user) {
          const userItems: AttendeeUser[] = user.items.filter(
            (item) => item !== null
          ) as AttendeeUser[];
          setAttendeeUsers(userItems);
        }

        if (attendeeUsers && attendeeUsers.length > 0) {
          console.log("Checking user registration status - IN THE 3RD IF");
          // Check if the current user's ID is in the list of attendees
          const isRegistered = attendeeUsers.some(
            (user) => user.eventId === eventId
          );
          console.log("Is user registered?: ", isRegistered);
          setIsUserRegistered(isRegistered);
        } else {
          setIsUserRegistered(false);
        }
      });
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

  const checkCrewRegistrationStatus = async (crewId: string) => {
    console.log("Checking crew registration status for crewId:", crewId);

    getAttendeeCrewsByEventID(eventId).then((crews) => {
      if (crews) {
        console.log("Checking crew registration status - IN THE 2ND IF");
        const crewItems: AttendeeCrew[] = crews.items.filter(
          (item) => item !== null
        ) as AttendeeCrew[];
        setAttendeeCrews(crewItems);
      } else {
        console.log(
          "Invalid data format for userCrewsData: Missing 'items' field"
        );
      }

      if (attendeeCrews && attendeeCrews.length > 0) {
        console.log("Checking crew registration status - IN THE 3RD IF");
        // Check if the current crew's ID is in the list of attendees
        const isCrewRegistered = attendeeCrews.some(
          (crew) => crew.crewId === crewId
        );
        console.log("Is crew registered?:  ", isCrewRegistered);
        setIsCrewRegistered((prevState) => ({
          ...prevState,
          [crewId]: isCrewRegistered,
        }));
      } else {
        // If attendeeCrews is falsy or has length 0, set false for all crewIds
        setIsCrewRegistered((prevState) => ({
          ...prevState,
          [crewId]: false,
        }));
      }
    });
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
        const isCrewRegistered = attendeeCrews.some(
          (crew) => crew.crewId === crewID
        );
        console.log("Is crew registered?: ", isCrewRegistered);

        // if (isCrewRegistered) {
        //   const attendeeCrewID = attendeeCrews.find(
        //     (crew) => crew.crewId === crewID
        //   )?.id;
        //   if (attendeeCrewID) {
        //     deleteCrewAttendee(attendeeCrewID);
        //     setIsCrewRegistered((prevState) => ({
        //       ...prevState,
        //       [crewID]: false,
        //     }));
        //     console.log("Deleting crew attendee: " + crewID);
        //   }
        // }
      }
    }
  };

  useEffect(() => {
    fetchUserInfo().then((response) => {
      setIsLoading(false);

      checkUserRegistrationStatus().then(() => {
        if (userCrews && userCrews.length > 0) {
          for (const crew of userCrews) {
            checkCrewRegistrationStatus(crew.id).then(() => {
              setIsLoading(false);
            });
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    console.log("Is loading change");
    console.log(isLoading);
  }, [isLoading]);

  const [signedUpCrewMembers, setSignedUpCrewMembers] = useState<Crew[]>([]);

  useEffect(() => {
    const fetchSignedUpCrewMembers = async () => {
      try {
        if (!userInfo?.id || !userCrews) {
          return [];
        }

        const signedUpCrewMembers: Crew[] = [];

        if (attendeeCrews) {
          console.log("I am in the lopp");
          for (const userAttendee of attendeeCrews) {
            if (userAttendee && userAttendee.eventId === eventId) {
              console.log("I added user ha");
              const crew = userCrews.find(
                (crew) => crew.id === userAttendee.crewId
              );
              if (crew) {
                console.log("I added user NOW");
                signedUpCrewMembers.push(crew);
              }
            }
          }
        }

        setSignedUpCrewMembers(signedUpCrewMembers);
      } catch (error) {
        console.error("Error fetching signed-up crew members:", error);
      }
    };

    fetchSignedUpCrewMembers();
  }, [userInfo?.id, userCrews, eventId]);

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
                <SignDownButton
                  name={"Select"}
                  action={() => handleUnRegisterUser()}
                  changeLook={true}
                  changeToText="Selected"
                />
              </View>
              <Text style={signDownFromEventStyles.crewsection}>My crew:</Text>
              {userCrews && userCrews ? (
                userCrews.length === 0 ? (
                  <Text style={signDownFromEventStyles.noCrewText}>
                    Currently, you have no crew.
                  </Text>
                ) : (
                  <View style={signDownFromEventStyles.crewGrid}>
                    {signedUpCrewMembers.map(
                      (item) =>
                        item && (
                          <View key={item.id}>
                            <CrewCard crew={item} />

                            <SignDownButton
                              name={"Select"}
                              action={() => handleUnRegisterCrew(item.id)}
                              changeLook={true}
                              changeToText="Selected"
                            />
                          </View>
                        )
                    )}
                  </View>
                )
              ) : (
                <LoadingSpinner />
              )}
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
