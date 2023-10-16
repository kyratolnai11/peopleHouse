import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { Venue } from "../../API";
import { getVenueImages } from "../../constants";
import { sharedStyles } from "../../../utils/SharedStyles";
import { venueStyles } from "./VenueStyles";

type VenueCardProps = {
  venue: Venue;
};

const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  const id = venue.id;
  const description = venue.description;
  const shortDescription = venue.shortDescription;
  const imageFile = getVenueImages(id);

  const handleOpenURL = () => {
    console.log("Cards pressed");
    //This is where we will navigate to the individual venue page
  };

  return (
    <SafeAreaView style={venueStyles.container}>
      <View style={venueStyles.container}>
        <TouchableOpacity onPress={handleOpenURL}>
          <Card>
            <Image source={imageFile} style={venueStyles.image} />
            <View style={venueStyles.textContainer}>
              <Text style={sharedStyles.secondaryTitle}>
                {shortDescription}
              </Text>
              <Text style={[sharedStyles.text, venueStyles.text]}>
                {description}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VenueCard;
