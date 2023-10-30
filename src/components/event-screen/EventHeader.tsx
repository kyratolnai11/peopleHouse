import React from "react";
import { View, Image, Text } from "react-native";
import { getEventHeaderImages } from "../../constants";
import { specificEventStyles } from "./SpecificEventStyles";

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
    <View style={specificEventStyles.imageContainer}>
      <Image source={imageFile} style={specificEventStyles.image} />
      <Text style={specificEventStyles.eventName}>{title}</Text>
      <Text style={specificEventStyles.venueName}>@ {venueName}</Text>
      <Text style={specificEventStyles.date}>{time}</Text>
      <Text style={specificEventStyles.brief}>{brief}</Text>
      <View style={specificEventStyles.overlay}></View>
    </View>
  );
};

export default EventHeader;
