import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { fetchVenues } from "../database/VenueDBConnection";
import { ModelVenueConnection } from "../API";
import VenueCard from "../components/venue-screen/VenueCard";
import { sharedStyles } from "../../utils/SharedStyles";
import Colors from "../../utils/theme";

const VenuesScreen = () => {
  const [venues, setVenues] = useState<ModelVenueConnection>();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    fetchVenues()
      .then((venuesdata) => {
        console.log("Venues are set");
        setVenues(venuesdata);
        setDataFetched(true);
      })
      .catch((error) => {
        console.error("Error fetching venues:", error);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            sharedStyles.mainContainer,
            { backgroundColor: Colors.light.primaryBackground },
          ]}
        >
          <Text style={sharedStyles.screenTitle}>
            We provide the place – you bring the fun!
          </Text>
          <Text style={[sharedStyles.text, { marginBottom: 20 }]}>
            Here at the LEGO People House you have your pick of fun venues to
            visit. Get crafty in the Creative Studio, hang with your Crew in the
            Heart, feel the burn in the LEGO Gym, or have a cozy time in the
            Fireplace Lounge. Come, explore, and enjoy. We can’t wait to see you
            in People House.
          </Text>
          {venues &&
            venues.items &&
            dataFetched &&
            venues.items.map((item) => {
              if (item) {
                return <VenueCard key={item.id} venue={item} />;
              }
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VenuesScreen;
