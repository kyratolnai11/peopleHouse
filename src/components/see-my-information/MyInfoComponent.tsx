import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import { Crew, User} from '../../API';
import { fetchUserById } from '../../database/UserDBConnection';
import myInfoStyles from './MyInfoStyles';
import CrewCard from './CrewCard';

const MyInfoComponent: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined);
  //const [userCrews, setUserCrews] = useState<Crew[]>([]); // Store the user's crews


  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: false
        });

        console.log(user.attributes.sub);

        const databaseUser = await fetchUserById(user.attributes.sub);
        //const userCrews = await getCrewsByUser(user);


        setUserInfo(databaseUser);
        //setUserCrews(userCrews);

      } catch (error) {
        console.log(error);
      }    
    }
    fetchUserInfo();
  }, []);

  const mockCrewData: Crew[] = [
    { id: "1", firstname: "Crew", lastname: 'A', __typename: 'Crew', familyRole: 'test', createdAt: '', updatedAt:'' },
    { id: "2", firstname: "Crew", lastname: 'B', __typename: 'Crew', familyRole: 'test', createdAt: '', updatedAt:''},
    { id: "3", firstname: "Crew", lastname: 'C', __typename: 'Crew', familyRole: 'test', createdAt: '', updatedAt:''},
  ];

  const handleAddCrew = async() => {
    console.log('Add crew pressed');
    
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
              {mockCrewData.length === 0 ? (
                <Text style={myInfoStyles.noCrewText}>Currently you have no crew.</Text>
              ) : (
                <View style={myInfoStyles.crewGrid}>
                  {mockCrewData.map((item) => (
                    <View style={myInfoStyles.crewCards} key={item.id}>
                      <CrewCard crew={item} />
                    </View>
                  ))}
                </View>
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