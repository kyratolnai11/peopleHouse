import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Auth } from 'aws-amplify';
import { User, UserType } from '../../API';
import { fetchUserById } from '../../database/UserDBConnection';
import myInfoStyles from './MyInfoStyles';
const MyInfoComponent: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: false
        });

        console.log(user.attributes.sub);

        const firstName = user.attributes['custom:firstName'];
        const lastName = user.attributes['custom:lastName'];

        const databaseUser = await fetchUserById(user.attributes.sub);

        setUserInfo({
          __typename: "User",
          id: user.attributes.sub, 
          firstname: firstName,
          lastname: lastName,
          email: user.attributes.email,
          userType: UserType.COMMUNITY_BUILDER, 
          crews: null, 
          events: null, 
          createdAt: '', 
          updatedAt: '', 
          eventUserAttendeesId: null, 
        });

      } catch (error) {
        console.log(error);
      }

      async function getCrews() {
        
      }
    }

    fetchUserInfo();
  }, []);

  return (
    <View style={myInfoStyles.container}>
      {userInfo ? (
        <View style={myInfoStyles.userInfoContainer}>
          {/* User Image and Name Section (Centered) */}
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
  
          {/* Email Address Section (Not Centered) */}
          <View style={myInfoStyles.emailContainer}>
            <Text style={myInfoStyles.emailLabel}>Email address:</Text>
            <TextInput
              style={myInfoStyles.emailInput}
              value={userInfo.email}
              editable={false}
            />
          </View>
          <View style={myInfoStyles.userTypeContainer}>
            <Text style={myInfoStyles.userTypeLabel}>User type:</Text>
            <TextInput
              style={myInfoStyles.userTypeInput}
              value={userInfo.userType}
              editable={false}
            />
          </View>
          <Text style={myInfoStyles.crewsection}>My crew:</Text>
          <Text style={myInfoStyles.crews}>No crew to load...</Text>
        </View>
      ) : (
        <Text>Loading user information...</Text>
      )}
    </View>
  );
  
  
  
  
 };  

export default MyInfoComponent;
