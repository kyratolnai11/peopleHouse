import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import { Crew, ModelCrewConnection, User } from '../../API';
import { fetchUserById } from '../../database/UserDBConnection';
import myInfoStyles from './MyInfoStyles';
import CrewCard from './CrewCard';
import { fetchCrewsByUser } from '../../database/CrewDBConnection';
import { CommonActions, useNavigation } from '@react-navigation/native';

const MyInfoComponent: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined);
  const [userCrews, setUserCrews] = useState<Crew[]>();
  const navigation = useNavigation<any>();



  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: false
        });

        console.log(user.attributes.sub);

        const databaseUser = await fetchUserById(user.attributes.sub);
        const databaseCrews = await fetchCrewsByUser(user.attributes.sub);

        setUserInfo(databaseUser);

        if (databaseCrews) {
          if (databaseCrews.items) {
            // Filter out null values and cast the result to Crew[]
            const crewItems: Crew[] = databaseCrews.items.filter(item => item !== null) as Crew[];
            setUserCrews(crewItems);
          } else {
            console.log("Invalid data format for userCrewsData: Missing 'items' field");
          }
        } else {
          console.log("No crews data received or data format is invalid.");
        }
        

      } catch (error) {
        console.log(error);
      }
    }
    fetchUserInfo();
  }, []);




  const handleAddCrew = async () => {
    console.log('Add crew pressed');
    navigation.dispatch(
      CommonActions.reset({
        routes: [{ name: 'Add Crew' }],
      })
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={myInfoStyles.container}>
          {userInfo ? (
            <View style={myInfoStyles.userInfoContainer}>
              <View style={myInfoStyles.userImageContainer}>
                <Image
                  source={require("../../../assets/lego-figure.png")}
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
                  <Text style={myInfoStyles.noCrewText}>Currently you have no crew.</Text>
                ) : (
                  <View style={myInfoStyles.crewGrid}>
                    {userCrews.map((item) => (
                      // Add a null/undefined check for 'item'
                      item ? (
                        <View style={myInfoStyles.crewCards} key={item.id}>
                          <CrewCard crew={item} />
                        </View>
                      ) : null
                    ))}
                  </View>
                )
              ) : (
                <Text style={myInfoStyles.noCrewText}>Loading...</Text>
              )}

              <TouchableOpacity onPress={handleAddCrew} style={myInfoStyles.addCrewButton}>
                <Text style={myInfoStyles.addCrewButtonText}>Add Crew</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={myInfoStyles.loadMessage}>Loading user information...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyInfoComponent;