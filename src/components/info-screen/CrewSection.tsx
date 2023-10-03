import React from "react";
import { View, Text, Image } from "react-native";
import { infoStyles } from "./StyleSheet";

const CrewSection: React.FC = () => {
  return (
    <View style={infoStyles.sectionTwo}>
      <Text style={infoStyles.sTwoTitle}>Bring your own Crew</Text>
      <Text style={infoStyles.descriptionSTwo}>
        If you are a LEGO®, Kirkbi or LEGO branded employee, you are welcome to
        bring a +ONE* and/or child(ren) to People house. All you need to do is
        to add them to your Crew under the “Home” page.
      </Text>
      <Text style={infoStyles.descriptionSTwo}>
        After registration, your +ONE will get their own personal permanent
        card, while children will get 1-day access by generating a QR code when
        visiting People House.
      </Text>
      <Text style={infoStyles.descriptionSTwo}>
        You can bring your 0-2 years child with no registration, children aged 3
        and up need to be registered and have a valid QR code to visit the
        house.
      </Text>
      <Text style={infoStyles.descriptionSTwo}>
        Children over 16 years and +ONEs need to give consent for us to store
        personal data. This is mandatory to get access to People House. Until
        the consent has been signed, they will appear under "Home" in your crew
        as an inactive member, and they will not be able to sign-up for events
        neither attend nor have any access to the People House.
      </Text>
      <Text style={infoStyles.descriptionSTwo}>
        Children are your own responsibility and MUST always be accompanied by
        you or your +ONE at all times inside People House. You also consent that
        the data you have entered is correct, and agree on using these data
        according to our privacy policy and terms of use.
      </Text>
      <Text style={infoStyles.descriptionSTwo}>
        As a LEGO® pensioner you also have the possibility to bring your +ONE.
        All you need to do is to add your +ONE to your Crew under the “Home”
        page.
      </Text>
      <Text style={infoStyles.descriptionSTwo}>
        *Definition of +ONE: A lucky person who you choose to share exiting
        People House moments with. You are no longer limited to choosing a
        partner but free to choose whoever feels right for you. For example this
        could be: partner, mother, brother, cousin or a friend.
      </Text>
      <Image
        source={require("../../../assets/info-screen/group.png")}
        style={infoStyles.imageSTwo}
      />
    </View>
  );
};

export default CrewSection;
