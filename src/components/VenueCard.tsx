import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { Venue } from "../API";

const VenueCard: React.FC<{props: Venue}> = ({props}) => {
  const id = props.id;
  const name = props.name;
  const shortDescription = props.shortDescription;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card>
            <Image 
                source={require(`../../assets/venue-images/${id}.png`)}
                style={styles.image}
            />
            <Text style={styles.shortDescription}>{shortDescription}</Text>
            <Text style={styles.description}>{name}</Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default VenueCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
    padding: 20,
    backgroundColor: '#ecf0f1'
  },
  shortDescription: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 0,
    padding: 10,
  },
  description: {
    fontSize: 10,
    textAlign: 'left',
    padding: 10
  },
  image: {
    width: 200, 
    height: 100,
    borderRadius: 12.5,
    overflow: 'hidden'
  }
});