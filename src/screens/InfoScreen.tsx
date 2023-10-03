// SectionsScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Appearance,
  Image,
  SafeAreaView,
} from "react-native";
import Colors from "../../utils/theme";
import { ScrollView } from "react-native-gesture-handler";
import AccordionWithInfo from "../components/hamburger-menu/AccordionWithInfo";

const InfoScreen: React.FC = () => {
  const colorScheme = Appearance.getColorScheme();

  const styles = StyleSheet.create({
    sectionOne: {
      alignItems: "center",
      backgroundColor:
        colorScheme === "dark"
          ? Colors.dark.primaryBackground
          : Colors.light.primaryBackground,
      width: "100%",
      paddingHorizontal: 20,
      paddingVertical: 35,
    },
    sectionTwo: {
      backgroundColor: Colors.dark.secondary,
      width: "100%",
      paddingHorizontal: 20,
      paddingVertical: 35,
      alignItems: "center",
    },
    sectionTitle: {
      fontSize: 25,
      fontWeight: "bold",
      paddingBottom: 8,
      color: "#730012",
      textAlign: "center",
    },
    imagesectionOne: {
      width: "100%",
      alignItems: "center",
      paddingVertical: 10,
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: "cover",
      alignSelf: "center",
    },
    text: {
      fontSize: 16,
    },
    questionText: {
      color: Colors.dark.secondary,
      fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 10,
      paddingTop: 20,
    },
    descriptionSTwo: {
      fontSize: 16,
      color: Colors.dark.textPrimary,
      paddingBottom: 10,
      textAlign: "justify",
    },
    imageSTwo: {
      resizeMode: "contain",
      alignSelf: "center",
      width: 400,
      marginTop: -30,
    },
    sTwoTitle: {
      fontSize: 25,
      color: Colors.dark.textPrimary,
      paddingBottom: 20,
    },
  });

  return (
    <SafeAreaView>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.sectionOne}>
          <Text style={styles.sectionTitle}>
            We have answered some questions
          </Text>
          <View style={styles.imagesectionOne}>
            <Image
              source={require("./../../assets/info-screen/question_mark.png")}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.questionText}>
              Can I book venues and areas for activities?
            </Text>
            <Text style={styles.text}>
              Timeslots at the venues can be booked at the “Venues” page and
              teambuilding sessions and guided tours can be booked via
              legocampusevents@lego.com.
            </Text>
            <Text style={styles.questionText}>
              How can I see all events and activities happening in the People
              house?
            </Text>
            <Text style={styles.text}>
              All of our great events can be found in the “Events” page.
            </Text>
            <Text style={styles.questionText}>Can I use the LEGO® Arena?</Text>
            <Text style={styles.text}>
              In the Arena, you are of course welcome to change the floors and
              use the basketball hoop, but all nets and goals will not be
              available for use until we have a proper scheduling system in
              place.
            </Text>
          </View>
        </View>
        <View style={styles.sectionTwo}>
          <Text style={styles.sTwoTitle}>Bring your own Crew</Text>
          <Text style={styles.descriptionSTwo}>
            If you are a LEGO®, Kirkbi or LEGO branded employee, you are welcome
            to bring a +ONE* and/or child(ren) to People house. All you need to
            do is to add them to your Crew under the “Home” page.
          </Text>
          <Text style={styles.descriptionSTwo}>
            After registration, your +ONE will get their own personal permanent
            card, while children will get 1-day access by generating a QR code
            when visiting People House.
          </Text>
          <Text style={styles.descriptionSTwo}>
            You can bring your 0-2 years child with no registration, children
            aged 3 and up need to be registered and have a valid QR code to
            visit the house.
          </Text>
          <Text style={styles.descriptionSTwo}>
            Children over 16 years and +ONEs need to give consent for us to
            store personal data. This is mandatory to get access to People
            House. Until the consent has been signed, they will appear under
            "Home" in your crew as an inactive member, and they will not be able
            to sign-up for events neither attend nor have any access to the
            People House.
          </Text>
          <Text style={styles.descriptionSTwo}>
            Children are your own responsibility and MUST always be accompanied
            by you or your +ONE at all times inside People House. You also
            consent that the data you have entered is correct, and agree on
            using these data according to our privacy policy and terms of use.
          </Text>
          <Text style={styles.descriptionSTwo}>
            As a LEGO® pensioner you also have the possibility to bring your
            +ONE. All you need to do is to add your +ONE to your Crew under the
            “Home” page.
          </Text>
          <Text style={styles.descriptionSTwo}>
            *Definition of +ONE: A lucky person who you choose to share exiting
            People House moments with. You are no longer limited to choosing a
            partner but free to choose whoever feels right for you. For example
            this could be: partner, mother, brother, cousin or a friend.
          </Text>
          <Image
            source={require("./../../assets/info-screen/group.png")}
            style={styles.imageSTwo}
          />
        </View>
        <View style={styles.sectionOne}>
          <Text style={styles.sectionTitle}>About the venues</Text>
          <AccordionWithInfo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
