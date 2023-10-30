import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { getEventHeaderImages } from "../../constants";
import Colors from "../../../utils/theme";

type EventHeaderProps = {
  venueId: string;
  title: string;
  venueName: string;
  time: string;
  brief: string;
};

const EventHeader: React.FC<EventHeaderProps> = ({
  brief,
  time,
  title,
  venueId,
  venueName,
}) => {
  const imageFile = getEventHeaderImages(venueId);
  return (
    <View style={styles.imageContainer}>
      <Image source={imageFile} style={styles.image} />
      <Text style={styles.eventName}>{title}</Text>
      <Text style={styles.venueName}>@ {venueName}</Text>
      <Text style={styles.date}>{time}</Text>
      <Text style={styles.brief}>{brief}</Text>
      <View style={styles.overlay}></View>
    </View>
  );
};

export default EventHeader;

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 200,
    resizeMode: "cover",
    marginTop: -37,
    zIndex: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginTop: -60,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
  },
  eventName: {
    color: Colors.light.textSecondary,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    zIndex: 2,
    marginTop: -20,
  },
  venueName: {
    color: Colors.light.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 55,
    zIndex: 2,
  },
  date: {
    color: Colors.light.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 90,
    zIndex: 2,
  },
  brief: {
    color: Colors.light.textSecondary,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    paddingTop: 125,
    zIndex: 2,
  },
});
