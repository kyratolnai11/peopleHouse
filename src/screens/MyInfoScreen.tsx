import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Auth } from "aws-amplify";
import { Crew, User } from "../API";
import { fetchUserById } from "../database/UserDBConnection";
import myInfoStyles from "../components/see-my-information/MyInfoStyles";
import CrewCard from "../components/see-my-information/CrewCard";
import { fetchCrewsByUser } from "../database/CrewDBConnection";
import { useNavigation } from "@react-navigation/native";
import LoadingSpinner from "../components/event-screen/LoadingSpinner";
import { StackNavigationProp } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native"; // Import useIsFocused

export type RootStackParamList = {
  AddCrew: undefined;
};

type navProp = StackNavigationProp<RootStackParamList, "AddCrew">;

const MyInfoScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | undefined>();
  const [userCrews, setUserCrews] = useState<Crew[]>();
  const navigation = useNavigation<navProp>();
  const isFocused = useIsFocused();

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
          // Filter out null values and cast the result to Crew[]
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

  useEffect(() => {
    if (isFocused) {
      fetchUserInfo();
    }
  }, [isFocused]);

  const handleAddCrew = async () => {
    console.log("Add crew pressed");
    navigation.navigate("AddCrew");
  };

  return (
    <SafeAreaView style={myInfoStyles.container}>
      <ScrollView>
        <View style={myInfoStyles.container}>
          {userInfo ? (
            <View style={myInfoStyles.userInfoContainer}>
              <View style={myInfoStyles.userImageContainer}>
                <Image
                  source={require("../../assets/my-infomration-sceen/lego-figure.png")}
                  style={myInfoStyles.userImage}
                />
              </View>
              <View style={myInfoStyles.userNameContainer}>
                <Text style={myInfoStyles.infoItem}>
                  {userInfo.firstname} {userInfo.lastname}
                </Text>
              </View>

              <View style={myInfoStyles.emailContainer}>
                <Text style={myInfoStyles.emailLabel}>Email address:</Text>
                <TextInput
                  style={myInfoStyles.emailInput}
                  value={userInfo.email}
                  editable={false}
                />
              </View>
              <Text style={myInfoStyles.crewsection}>My crew:</Text>
              {userCrews && userCrews ? (
                userCrews.length === 0 ? (
                  <Text style={myInfoStyles.noCrewText}>
                    Currently you have no crew.
                  </Text>
                ) : (
                  <View style={myInfoStyles.crewGrid}>
                    {userCrews.map((item) =>
                      // Add a null/undefined check for 'item'
                      item ? (
                        <View style={myInfoStyles.crewCards} key={item.id}>
                          <CrewCard crew={item} />
                        </View>
                      ) : null
                    )}
                  </View>
                )
              ) : (
                <LoadingSpinner />
              )}

              <TouchableOpacity
                onPress={handleAddCrew}
                style={myInfoStyles.addCrewButton}
              >
                <Text style={myInfoStyles.addCrewButtonText}>Add Crew</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <LoadingSpinner />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyInfoScreen;
