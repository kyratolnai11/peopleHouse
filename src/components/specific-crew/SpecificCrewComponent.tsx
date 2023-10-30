import React, { useEffect, useState } from 'react';
import { fetchCrewById, deleteCrewById } from '../../database/CrewDBConnection';
import { Crew } from '../../API';
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity, Alert, TextInput, Image } from 'react-native';
import { specificCrewStyles } from './SpecificCrewStyle';

const SpecificCrewComponent: React.FC = () => {
  const [specificCrew, setSpecificCrew] = useState<Crew | null>();
  const [loading, setLoading] = useState(true);
  const userId: string = "129d6758-352a-40be-80a0-efed9b740c3b";

  useEffect(() => {
    const fetchCrew = async () => {
      try {
        setLoading(true);
        const crew = await fetchCrewById(userId);
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
            deleteCrewById("2c530025-8abb-495a-958a-0b6035cfc24c"); //Dummy data
          },
        },
      ]
    );
  };


  const handleNewCrew = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this crew?',
      [
        {
          text: 'Yes',
          onPress: () => {
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {loading ? (
            <Text>Getting crew from the database...</Text>
          ) : specificCrew ? (
            <View>
              <View style={specificCrewStyles.userInfoContainer}>
                <View style={specificCrewStyles.userImageContainer}>
                  <Image
                    source={require('../../../assets/crewImage.png')} // Replace 'your-image-path' with the actual image path
                    style={specificCrewStyles.userImage}
                  />
                </View>
                <View style={specificCrewStyles.userNameContainer}>
                  <Text style={specificCrewStyles.infoItem}>
                    {specificCrew.firstname} {specificCrew.lastname}
                  </Text>
                </View>
              </View>
              {specificCrew?.email !== null && (
                <>
                  <Text>Email address:</Text>
                  <TextInput
                    style={specificCrewStyles.emailInput}
                    value={specificCrew.email}
                    editable={false}
                  />
                </>
              )}
              <Text>User Type:</Text>
              <TextInput
                style={specificCrewStyles.userTypeInput}
                value={specificCrew.familyRole}
                editable={false}
              />
            </View>
          ) : (
            <Text>No crews</Text>
          )}
          <TouchableOpacity onPress={handleDelete} style={specificCrewStyles.addCrewButton}>
            <Text style={specificCrewStyles.addCrewButtonText}>Delete Crew</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNewCrew} style={specificCrewStyles.addCrewButton}>
            <Text style={specificCrewStyles.addCrewButtonText}>Add New Crew</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecificCrewComponent;
