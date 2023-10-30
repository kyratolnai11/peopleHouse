import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { Crew } from "../../API"; // Import the Crew type if available
import { crewStyles } from "./CrewStyles";

type CrewCardProps = {
  crew: Crew; 
};

const CrewCard: React.FC<CrewCardProps> = ({ crew }) => {
  const id = crew.id; 
  const name = crew.firstname +' '+ crew.lastname; 
  const imageFile = "../../../assets/crewImage.png";

  const handleOpenURL = () => {
    console.log("Crew card pressed");
  };

  return (
    <SafeAreaView style={crewStyles.container}>
      <View style={crewStyles.container}>
        <TouchableOpacity onPress={handleOpenURL}>
          <Card style={crewStyles.card}>
            <Image source={require(imageFile)} style={crewStyles.image} />
            <View style={crewStyles.textContainer}>
              <Text style={crewStyles.secondaryTitle}>
                {name}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CrewCard;