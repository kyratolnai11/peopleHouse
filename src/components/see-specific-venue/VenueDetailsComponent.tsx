import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { GetVenueQuery } from '../../API';
import { fetchVenueById } from '../../database/VenueDBConnection';
import { venueDetailsStyles } from './VenueDetailsStyles';
import { Event } from '../../API';
import { fetchEventsByVenueId } from '../../database/EventDBConnection';
import EventCard from '../event-screen/EventCard';


type VenueDetailsRouteProps = {
  route: RouteProp<any, 'SpecificVenue'>;

};

const VenueDetailsScreen: React.FC<VenueDetailsRouteProps> = ({ route }) => {
  const venueId = route?.params?.venueId;
  const [venue, setVenue] = useState<GetVenueQuery['getVenue'] | undefined>();
  const [events, setEvents] = useState<Event[] | undefined>(); // State to store events
  const navigation = useNavigation(); // Access the navigation prop


  if (!venueId) {
    // Handle the case where venueId is not defined
    return (
      <Text>Details for Venue ID not available. Error with venueId</Text>
    );
  }

  useEffect(() => {
    const getVenueInfo = async () => {
      const venueData = await fetchVenueById(venueId);
      setVenue(venueData);
    };

    

    const getEventsData = async () => {
      const eventsFromDB = await fetchEventsByVenueId(venueId);
    
      if (eventsFromDB) {
        if (eventsFromDB.items) {
          // Filter out null values and cast the result to Event[]
          const eventItems: Event[] = eventsFromDB.items.filter(item => item !== null) as Event[];
          setEvents(eventItems);
        } else {
          console.log("Invalid data format for events: Missing 'items' field");
        }
      } else {
        console.log("No events data received or data format is invalid.");
      }
    };
    

    getVenueInfo();
    getEventsData();

  
  }, [venueId]);

  useEffect(() => {
    if (venue) {
      navigation.setOptions({ headerTitle: venue.name });
    }
  }, [venue]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={venueDetailsStyles.container}>
          {/* First Section */}
          <View style={venueDetailsStyles.firstSection}>
            <View style={venueDetailsStyles.venueNameBackground}>
              <Text style={venueDetailsStyles.venueName}>{venue?.name}</Text>
            </View>
            <Text style={venueDetailsStyles.firstSectionText}>{venue?.shortDescription}</Text>
          </View>

          {/* Second Section with Purple Background */}
          <View style={venueDetailsStyles.purpleSection}>
            <Text style={venueDetailsStyles.descriptionText}>{venue?.description}</Text>
            <View style={venueDetailsStyles.decorativeLine}></View>

            <View style={venueDetailsStyles.rowSection}>
              <View style={venueDetailsStyles.openingHoursSection}>
                <Text style={venueDetailsStyles.sectionTitle}>Opening Hours</Text>
                <Text style={venueDetailsStyles.sectionText}>{venue?.openingHours}</Text>
              </View>
              <View>
                <Text style={venueDetailsStyles.sectionTitle}>Capacity</Text>
                <Text style={venueDetailsStyles.sectionText}>{venue?.capacity}</Text>
              </View>
            </View>
          </View>

          {/* Third Section */}
          <View style={venueDetailsStyles.mainSection}>
            <Text style={venueDetailsStyles.thirdSectionTitle}>Upcoming Events</Text>
            {events && events.length > 0 ? (
              <View>
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </View>
            ) : (
              <Text style={venueDetailsStyles.thirdSectionText}>
                Currently there are no events for this venue.
                {'\n'}
                Look back later.
              </Text>)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VenueDetailsScreen;