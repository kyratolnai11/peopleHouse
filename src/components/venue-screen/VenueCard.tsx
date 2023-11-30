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
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  SpecificVenue: { venueId: string };
  Venues: undefined;
};

type navProp = StackNavigationProp<RootStackParamList, "SpecificVenue">;

type VenueCardProps = {
  venue: Venue;
};

const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  const id = venue.id;
  const description = venue.description;
  const shortDescription = venue.shortDescription;
  const imageFile = getVenueImages(id);
  const navigation = useNavigation<navProp>(); // Initialize navigation

  const handleOpenURL = () => {
    navigation.navigate("SpecificVenue", { venueId: id });
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
