import React from "react";
import { View, Text } from "react-native";
import { homestayStyles } from "./HomestayStyles";
import { sharedStyles } from "../../../utils/SharedStyles";
import Colors from "../../../utils/theme";

const UponArrivalSection: React.FC = () => {
  return (
    <View
      style={[
        homestayStyles.sectionContainer,
        { backgroundColor: Colors.light.lightGrey },
      ]}
    >
      <Text style={[homestayStyles.title, { color: Colors.light.black }]}>
        Upon arrival
      </Text>
      <Text
        style={[sharedStyles.text, { textAlign: "center", fontWeight: "bold" }]}
      >
        Reception
      </Text>
      <Text style={[sharedStyles.text, { textAlign: "center" }]}>
        The LEGO Homestay reception is open Monday-Friday from 8:00-15:30 and
        can be found next to the Heart Café in People House. The staff in the
        café can also help you until 21:30.
      </Text>
      <Text style={[sharedStyles.text, { textAlign: "center" }]}>
        The staff in the café can also help you until 21:30.
      </Text>
      <Text
        style={[
          sharedStyles.text,
          { textAlign: "center", fontWeight: "bold", marginTop: 20 },
        ]}
      >
        Outside of opening hours
      </Text>
      <Text style={[sharedStyles.text, { textAlign: "center" }]}>
        If arriving outside of opening hours, you must contact the Global
        Command Center at +45 7950 5762 upon arrival at LEGO Campus.
      </Text>
      <Text style={[sharedStyles.text, { textAlign: "center" }]}>
        They will then assist you with check-in and assist you to LEGO Homestay.
      </Text>
    </View>
  );
};

export default UponArrivalSection;
