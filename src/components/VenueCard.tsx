import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import { Venue } from "../API";
import { getVenueImages } from "../constants";

type IVenueCardProps = {
  venue: Venue;
};

const VenueCard: React.FC<IVenueCardProps> = ({ venue }) => {
  const id = venue.id;
  const description = venue.description;
  const shortDescription = venue.shortDescription;
  const imageFile = getVenueImages(id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card>
          <Image source={imageFile} style={styles.image} />
          <Text style={styles.shortDescription}>{shortDescription}</Text>
          <Text style={styles.description}>{description}</Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default VenueCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  shortDescription: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    paddingBottom: 0,
    padding: 10,
  },
  description: {
    fontSize: 10,
    textAlign: "left",
    padding: 10,
  },
  image: {
    width: 390,
    borderRadius: 12.5,
    overflow: "hidden",
    resizeMode: "contain"
  },
});
