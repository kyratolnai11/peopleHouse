import React from "react";
import { View, Text, Image } from "react-native";
import { infoStyles } from "./StyleSheet";
import Colors from "../../../utils/theme";

const OpeningHoursSection: React.FC = () => {
  return (
    <View
      style={[infoStyles.sectionOne, { backgroundColor: Colors.light.primary }]}
    >
      <Text style={infoStyles.sectionTitle}>Opening hours</Text>
      <View style={{ position: "relative", height: 470 }}>
        <View style={infoStyles.hourPicOneCont}>
          <Image
            source={require("./../../../assets/info-screen/heart-cafe.png")}
            style={infoStyles.openingHPicture}
          />
        </View>
        <View style={infoStyles.hourPicTwoCont}>
          <Image
            source={require("./../../../assets/info-screen/gym.png")}
            style={infoStyles.openingHPictureTwo}
          />
        </View>
      </View>
      <View>
        <Text style={infoStyles.titleSection}>People House</Text>
        <Text style={infoStyles.descriptionWithPadding}>
          The House is open 00:00-24:00 every day.
        </Text>
        <Text style={infoStyles.descriptionWithPadding}>
          Cinema, Creative Studios, Music & Wood shop are open 07:00-22:00 every
          day Fireplace Lounge, Club House, LEGO Arena and the Heart are open
          00:00-24:00 every day.
        </Text>
      </View>
      <View>
        <Text style={infoStyles.titleSection}>The Heart Café is open</Text>
        <Text style={infoStyles.descriptionWithPadding}>
          Monday - Thursday: 07:00-22:00{"\n"}Friday: 07:00-21:00{"\n"}Saturday
          and Sunday: 08:00-16:00
        </Text>
        <Text style={infoStyles.descriptionWithPadding}>
          The Heart café is closed Maundy Thursday - Easter Monday, Prayer Day,
          Ascension Day, Whit Monday, and July month
        </Text>
      </View>
      <View>
        <Text style={infoStyles.titleSection}>LEGO Gym</Text>
        <Text style={infoStyles.descriptionWithPadding}>
          LEGO Gym is open 00:00-24:00 every day. The center is manned
          06:00-18:00 on weekdays.
        </Text>
        <Text style={infoStyles.title}>
          Closing days for People House and the activities will be communicated
          on the website and on the screens in People House.
        </Text>
      </View>
    </View>
  );
};

export default OpeningHoursSection;
