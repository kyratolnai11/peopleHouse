import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Auth } from 'aws-amplify';
import { UserType } from '../../API';
import { Crew } from '../../API';

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  crew: Crew[];
  userType: UserType;
}

const MyInfoComponent: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: false
        });

        console.log(user);
        const firstName = user.attributes['custom:firstName'];
        const lastName = user.attributes['custom:lastName'];
        

        setUserInfo({
          firstName,
          lastName,
          email: user.attributes.email,
          crew: [], // Replace with actual crew information
          userType: UserType.NORMAL // Replace with actual user type information
        });

      } catch (error) {
        console.log(error);
      }
    }

    fetchUserInfo();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>User Information:</Text>
      {userInfo ? (
        <>
          <Text>First Name: {userInfo.firstName}</Text>
          <Text>Last Name: {userInfo.lastName}</Text>
          <Text>Email: {userInfo.email}</Text>
          <Text>User Type: {userInfo.userType}</Text>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>My Crew:</Text>
        <Text>{userInfo.crew.length > 0 ? userInfo.crew.map(crew => crew.firstname).join(', ') : 'No crew to show'}</Text>
        </>
      ) : (
        <Text>Loading user information...</Text>


        
      )}
    </View>
  );
};

export default MyInfoComponent;
