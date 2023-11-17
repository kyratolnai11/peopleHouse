import React from "react";
import { View, Text, Image } from "react-native";
import { homestayStyles } from "./HomestayStyles";
import Colors from "../../../utils/theme";

const GallerySection: React.FC = () => {
  return (
    <View
      style={[
        homestayStyles.sectionContainer,
        {
          backgroundColor: Colors.light.mediumGrey,
          alignItems: "center",
          paddingBottom: 40,
        },
      ]}
    >
      <Text style={[homestayStyles.title, { color: Colors.light.white }]}>
        Catch a good night's sleep
      </Text>
      <Image
        source={require("../../../assets/homestay/homestay_1.png")}
        style={homestayStyles.galleryImage}
      />
      <Image
        source={require("../../../assets/homestay/homestay_2.png")}
        style={homestayStyles.galleryImage}
      />
      <Image
        source={require("../../../assets/homestay/homestay_3.png")}
        style={homestayStyles.galleryImage}
      />
      <Image
        source={require("../../../assets/homestay/homestay_4.png")}
        style={homestayStyles.galleryImage}
      />
    </View>
  );
};

export default GallerySection;
