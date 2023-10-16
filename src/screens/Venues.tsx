import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchVenues } from "../database/Venue";
import { ModelVenueConnection } from "../API";

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

  useEffect(() => {
    fetchVenues()
      .then((venuesdata) => {
        setVenues(venuesdata);
        console.log(venues);
      })
      .catch((error) => {
        console.error("Error fetching venues:", error);
      });
  }, []);

  const title = "We provide the place – you bring the fun!";
  const description =
    "Here at the LEGO People House you have your pick of fun venues to visit. Get crafty in the Creative Studio, hang with your Crew in the Heart, feel the burn in the LEGO Gym, or have a cozy time in the Fireplace Lounge. Come, explore, and enjoy. We can’t wait to see you in People House.";

  // if(venues)
  // {
  //   venues.items.map((i) => {
  //     if(i){
  //     <VenueCard props={i} />}
  //   })}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Venues;
