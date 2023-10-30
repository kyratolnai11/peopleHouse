import React, { useEffect, useState } from 'react';
import { fetchCrewByUser } from '../../database/CrewDBConnection'; // Import the function to fetch crew data
import { Crew } from '../../API';
import { SafeAreaView, ScrollView, View, Text } from 'react-native'; // Import Text from 'react-native'

const SpecificCrewComponent: React.FC = () => {
  const [specificCrew, setSpecificCrew] = useState<Crew | null>();
  const [loading, setLoading] = useState(true); // Added loading state
  const userId: string = "b3e8b56a-eb86-4aff-824d-dafe7677419a"; // Hardcoded user ID for testing

  useEffect(() => {
    // Fetch the specific crew data when the component mounts
    const fetchCrew = async () => {
      try {
        setLoading(true); // Set loading to true when fetching
        const crew = await fetchCrewByUser(userId);

        if (crew) {
          setSpecificCrew(crew);
        }
      } catch (error) {
        console.error('Error fetching crew:', error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchCrew();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {loading ? (
            <Text>Getting crew from database...</Text>
          ) : specificCrew ? (
            <View>
              <View>
                <Text>{specificCrew.firstname} {specificCrew.lastname}</Text>
              </View>
              <Text>{specificCrew.email}</Text>
            </View>
          ) : (
            <Text>No crews</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecificCrewComponent;
