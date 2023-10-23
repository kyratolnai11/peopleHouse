import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { GetVenueQuery } from '../../API';
import { fetchVenueById } from '../../database/VenueDBConnection';
import { venueDetailsStyles } from './VenueDetailsStyles';


type VenueDetailsRouteProps = {
    route: RouteProp<any, 'SpecificVenue'>;

  };

  const VenueDetailsScreen: React.FC<VenueDetailsRouteProps> = ({ route }) => {
    const venueId = route?.params?.venueId;
    const [venue, setVenue] = useState<GetVenueQuery['getVenue'] | undefined>();
  
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
    
        getVenueInfo();
      }, [venueId]);
  
  
      return (
        <SafeAreaView style={venueDetailsStyles.scrollView}>
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
            {/* Add the list of upcoming events here */}
            <Text style={venueDetailsStyles.thirdSectionText}>Currently there is no event to be shown</Text>
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
      );
    };

export default VenueDetailsScreen;