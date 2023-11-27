import React from "react";
import { View, Text, Image } from "react-native";
import { homestayStyles } from "./HomestayStyles";
import Colors from "../../../utils/theme";
import YellowContainer from "./YellowConteiner";

const FacilitiesSection: React.FC = () => {
  return (
    <View
      style={[
        homestayStyles.sectionContainer,
        { backgroundColor: Colors.light.white, alignItems: "center" },
      ]}
    >
      <Text style={[homestayStyles.title, { paddingTop: 40 }]}>
        Facilities of LEGO Homestay
      </Text>
      <Image
        source={require("../../../assets/homestay/airplane.png")}
        style={homestayStyles.airplane}
      />
      <YellowContainer
        title="Room"
        subTitle="All rooms are equipped"
        description={[
          "Own bathroom",
          "Nespresso machine",
          "Blowdryer",
          "Chromecast",
          "Safe",
        ]}
      />
      <YellowContainer
        title="Kitchen"
        subTitle="On all floors"
        description={["Fully equipped"]}
      />
      <YellowContainer
        title="Laundry room"
        subTitle="Free to use for guests"
        description={[
          "Washing machine",
          "Dryer",
          "Steamer",
          "Irons",
          "Ironing boards",
        ]}
      />
      <YellowContainer
        title="Vending machine"
        subTitle="Forgot something?"
        description={["Variety of snacks and amenities"]}
      />
      <YellowContainer
        title="Activities"
        subTitle="Free access for guests"
        description={["People House", "Lego® Gym"]}
      />
    </View>
  );
};

export default FacilitiesSection;
