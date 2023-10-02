import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

const VenueCard = () => {
    const title = 'LEGO Arena'
    const shortDescription = 'Ready'
    const description = 'Ready Set GO'
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card>
            <Text style={styles.paragraph}>{title}</Text>
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
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});