import React from "react";
import { View, Text } from "react-native";
import Accordion from "./Accordion";
import { infoStyles } from "./InfoScreenStyleSheet";

const AccordionWithInfoSection: React.FC = () => {
  return (
    <View style={infoStyles.sectionOne}>
      <Text style={infoStyles.sectionTitle}>About the venues</Text>
      <Accordion
        title="LEGO Gym"
        content={
          <View>
            <Text style={infoStyles.questionText}>
              Do I need a membership to join LEGO Gym?
            </Text>
            <Text style={infoStyles.text}>
              Yes, you need a membership to join LEGO Gym. As LEGO System A/S
              employee it's free to use, but you need to enroll, because the
              benefit is subject of taxation. After enrollment you will, via
              your payslip, pay tax of DKK 100 per month. As a Kirkbi or another
              LEGO branded employee in DK, a LEGO pensioners, +ONE or a
              consultant, you pay 100 DKK directly to Health group. For sign up,
              please follow the process under the ”LEGO Gym” page.
            </Text>

            <Text style={infoStyles.questionText}>
              How can I sign up for the Gym?
            </Text>
            <Text style={infoStyles.text}>
              To sign up, you need to download the app ”MyWellness” to your
              phone. Please follow the process on the LEGO Gym page carefully,
              as sign-up process for LEGO System A/S employee differentiate from
              the rest of the groups. OR PLEASE FOLLOW ATTACHED GUIDELINE.
            </Text>

            <Text style={infoStyles.questionText}>
              Does my +ONE need to sign up for LEGO Gym or can he/she use my
              membership?
            </Text>
            <Text style={infoStyles.text}>
              Your +ONE needs to sign up and create his/her own user on
              ”myWellness”. The reason for this is for use to track number of
              members and because your +ONE needs to pay directly to Health
              Group via credit card.
            </Text>

            <Text style={infoStyles.questionText}>
              I'm visiting from an other LEGO location, can I use the LEGO Gym
              during my stay?
            </Text>
            <Text style={infoStyles.text}>
              Yes and no. If you are staying at LEGO® Homestay, access to LEGO
              Gym is included in the room. If you are staying somewhere else,
              then you cannot use LEGO Gym.
            </Text>

            <Text style={infoStyles.questionText}>
              LEGO Employee only: Why can't I book a class immidiately after
              signing up in the ”MyWellness” App?
            </Text>
            <Text style={infoStyles.text}>
              Health Group needs to manually assign the LEGO employee to a
              group. This can take up to 12 hours.
            </Text>

            <Text style={infoStyles.questionText}>
              My child also wants to use LEGO Gym. How do I sign him/her up?
            </Text>
            <Text style={infoStyles.text}>
              Unfortunately a child of an employee doesn't have access to the
              LEGO Gym. The reasons why we don't allow children no matter the
              age to join LEGO Gym are both safety and capacity, mainly
              capacity.
            </Text>

            <Text style={infoStyles.questionText}>
              Can I start using the LEGO Gym without getting an intro?
            </Text>
            <Text style={infoStyles.text}>
              Yes, you can join any classes, use the strength training and cadio
              eqiupment without introduction. It is only BioCurcuit that needs
              an introduction.
            </Text>

            <Text style={infoStyles.questionText}>
              Where do I book the Biocurcuit Introduction?
            </Text>
            <Text style={infoStyles.text}>
              You book the BioCurcuit Introduction in the ”Mywellness” App under
              ”Activities” on the frontpage. This is also where you find all
              other classes offered.
            </Text>

            <Text style={infoStyles.questionText}>
              How do I connect my Employee Card to my ”MyWellness” user?
            </Text>
            <Text style={infoStyles.text}>
              You scan the QR code on one of the cardio machines and then you
              scan your employee card on the same cardio machines. You should
              then get the message ”Enheden er blevet tildelt”. Now you only
              need to bring your card. If you have any questions, please reach
              out to our onsite Instructors.
            </Text>

            <Text style={infoStyles.questionText}>
              How do I cancel my membership?
            </Text>
            <Text style={[infoStyles.text, { paddingBottom: -5 }]}>
              To cancel your membership, open your ”MyWellness” app, click on
              Profile -&gt; Settings -&gt; My facilities -&gt; Choose 'LEGO
              System A/S' -&gt; Leave this facility
            </Text>
          </View>
        }
      />
      <Accordion
        title="LEGO Homestay"
        content={
          <View>
            <Text style={infoStyles.questionText}>
              I need to book a room at LEGO Homestay. How do I do this?
            </Text>
            <Text style={infoStyles.text}>
              If the room is to be paid with company credit card, please book it
              via our AMEX travel portal. If the room is to be paid via Cost
              center, please send an email to homestaybooking@LEGO.com, and the
              LEGO Homestay team are ready to help you with the booking.
            </Text>

            <Text style={infoStyles.questionText}>
              I want to book a conference. Where do I do this and what do you
              offer?
            </Text>
            <Text style={infoStyles.text}>
              Please send an email to homestaybooking@LEGO.com, and the LEGO
              Homestay team are ready to help you.
            </Text>
          </View>
        }
      />
      <Accordion
        title="Chef's Corner"
        content={
          <View>
            <Text style={infoStyles.questionText}>
              How do I book chefs corner?
            </Text>
            <Text style={infoStyles.text}>
              You can book Chef's Corner by sending a mail to
              legocampusevents@lego.com Chef's Corner is open for team events on
              Mondays, Wednesdays and Thursdays in the following time slots:
              10:00-13:00 and 16:30-19:30. Chef's Corner can only be booked with
              our Chef Joachim.
            </Text>
          </View>
        }
      />

      <Accordion
        title="Creative Studio"
        content={
          <View>
            <Text style={infoStyles.questionText}>
              I really want to try out the ceramics. How does it work?
            </Text>
            <Text style={infoStyles.text}>
              If you're interested in learning more about ceramics and are
              looking to get your hands on the clay, we're currently offering a
              variety of Open Ceramic Studio sessions as well as facilitated
              classes and workshops. You can see what classes are available and
              sign up for a spot at peoplehouse.dk. If you have more questions
              concerning these classes or any other classes/workshops offered in
              the space you can reach out to your Community Builders at
              legocampusevents@LEGO.com.
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default AccordionWithInfoSection;
