import { CommonActions, RouteProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EventHeader from "./EventHeader";
import { sharedStyles } from "../../../utils/SharedStyles";
import CustomButton from "./CustomButton";
import { Auth } from "aws-amplify";
import {User } from "../../API";
import { fetchUserById } from "../../database/UserDBConnection";
import SignUpForEventStyles from "./SignUpForEventStyles";
import LoadingSpinner from "./LoadingSpinner";
import {
  addUserAttendee,
} from "../../database/EventDBConnection";
import Colors from "../../../utils/theme";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  EventSignUp: {
    eventName: string;
    eventLocation: string;
    eventTime: string;
    numOfTickets: number;
    venueId: string;
    eventBrief: string;
    eventId: string;
  };
};

type EventScreenRouteProp = RouteProp<RootStackParamList, "EventSignUp">;

type EventScreenProps = {
  route: EventScreenRouteProp;
};

export type RootStackParamLis2t = {
  EventScreen: undefined;
};

type navProp = StackNavigationProp<RootStackParamLis2t, "EventScreen">;

const SignUpForEventScreen: React.FC<EventScreenProps> = ({ route }) => {
  const {
    eventLocation,
    eventName,
    eventTime,
    venueId,
    eventBrief,
    eventId,
  } = route.params;

  const [userInfo, setUserInfo] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<navProp>();



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



  const handleRegisterUser = async () => {
    
    if (userInfo && userInfo.id) {
      addUserAttendee(eventId, userInfo.id);
      
    }
  };



  const HandleRegisterAll = async () =>{
    Alert.alert(
      'Success',
      'Selected user successfully registered to this event',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "EventScreen" }],
              })
            );
            handleRegisterUser();
          },
        },
      ],
      { cancelable: false }
    );
  }



  useEffect(() => {

    fetchUserInfo().then(() => {
      setIsLoading(false);
              
      });
          
    
  }, []);



  return (
    <SafeAreaView >
      <ScrollView style={{ height: "100%", backgroundColor: Colors.light.white }}>
        <View style={sharedStyles.mainContainer}>
          <EventHeader
            venueId={venueId}
            title={eventName}
            venueName={eventLocation}
            time={eventTime}
            brief={eventBrief}
          />
          {isLoading === false ? (
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
                
                <CustomButton
                name={"Register"}
                action={() => HandleRegisterAll()}
              />
                
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

export default SignUpForEventScreen;
