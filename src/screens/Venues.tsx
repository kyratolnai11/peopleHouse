import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { fetchVenues } from "../database/Venue";
import { ModelVenueConnection } from "../API";
import VenueCard from "../components/VenueCard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 0,
    padding: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "left",
    paddingBottom: 0,
    padding: 10,
  },
});

const Venues = () => {
  const [venues, setVenues] = useState<ModelVenueConnection>();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    fetchVenues()
      .then((venuesdata) => {
        console.log("I set the venues");
        setVenues(venuesdata);
        setDataFetched(true);
      })
      .catch((error) => {
        console.error("Error fetching venues:", error);
      });
  }, []);

  const title = "We provide the place – you bring the fun!";

  const description =
    "Here at the LEGO People House you have your pick of fun venues to visit. Get crafty in the Creative Studio, hang with your Crew in the Heart, feel the burn in the LEGO Gym, or have a cozy time in the Fireplace Lounge. Come, explore, and enjoy. We can’t wait to see you in People House.";

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
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

export default Venues;
