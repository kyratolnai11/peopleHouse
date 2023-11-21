import React, { useEffect, useState } from 'react';
import { fetchCrewById, deleteCrewById } from '../database/CrewDBConnection';
import { Crew } from '../API';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Alert, TextInput, Image } from 'react-native';
import { specificCrewStyles } from '../components/specific-crew/SpecificCrewStyle';
import { RouteProp } from '@react-navigation/native';
import LoadingSpinner from '../components/event-screen/LoadingSpinner';
import { useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
  SpecificCrew: { crewId: string };
}

type CrewScreenRouteProp = RouteProp<RootStackParamList, "SpecificCrew">;

type CrewProps = {
  route: CrewScreenRouteProp;
}

const SpecificCrewScreen: React.FC<CrewProps> = ({ route }) => {
  const [specificCrew, setSpecificCrew] = useState<Crew | null>();
  const [loading, setLoading] = useState(true);
  const { crewId } = route.params;
  const navigation = useNavigation(); // Use this to get the navigation prop

  useEffect(() => {
    const fetchCrew = async () => {
      try {
        setLoading(true);
        const crew = await fetchCrewById(crewId);
        if (crew) {
          setSpecificCrew(crew);
        }
      } catch (error) {
        console.error('Error fetching crew:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrew();
  }, []);

  const handleDelete = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this crew?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            deleteCrewById(crewId); // Dummy data
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={specificCrewStyles.container}>
      <ScrollView>
        <View style={specificCrewStyles.container}>
          {loading ? (
            <LoadingSpinner />
          ) : specificCrew ? (
            <View>
              <View style={specificCrewStyles.userInfoContainer}>
                <View style={specificCrewStyles.userImageContainer}>
                  <Image
                    source={require("../../assets/my-infomration-sceen/crewImage.png")} // Replace 'your-image-path' with the actual image path
                    style={specificCrewStyles.userImage}
                  />
                </View>
                <View style={specificCrewStyles.userNameContainer}>
                  <Text style={specificCrewStyles.infoItem}>
                    {specificCrew.firstname} {specificCrew.lastname}
                  </Text>
                </View>
              </View>
              {specificCrew.email && specificCrew.email.trim() !== '' && (
                <View style={specificCrewStyles.emailContainer}>
                  <Text>Email address:</Text>
                  <TextInput
                    style={specificCrewStyles.emailInput}
                    value={specificCrew.email}
                    autoCapitalize="none"
                    editable={false}
                  />
                </View>
              )}
              {specificCrew.dateOfBirth && specificCrew.dateOfBirth.trim() !== '' && (
                <View style={specificCrewStyles.emailContainer}>
                  <Text>Date of Birth:</Text>
                  <TextInput
                    style={specificCrewStyles.emailInput}
                    value={specificCrew.dateOfBirth ? new Date(specificCrew.dateOfBirth).toISOString().split('T')[0] : 'No birthday added'}
                    editable={false}
                  />
                </View>
              )}
              {specificCrew.familyRole && specificCrew.familyRole.trim() !== '' && (
                <View style={specificCrewStyles.emailContainer}>
                  <Text>User Type:</Text>
                  <TextInput
                    style={specificCrewStyles.userTypeInput}
                    value={specificCrew.familyRole}
                    editable={false}
                  />
                </View>
              )}
            </View>
          ) : (
            <LoadingSpinner />
          )}
          <TouchableOpacity onPress={handleDelete} style={specificCrewStyles.addCrewButton}>
            <Text style={specificCrewStyles.addCrewButtonText}>Delete Crew</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecificCrewScreen;
