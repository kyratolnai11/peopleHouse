import React from "react";
import { View, Text, Image } from "react-native";
import { infoStyles } from "./StyleSheet";
import EmailLink from "./EmailLink";
import { sharedStyles } from "../../../utils/SharedStyles";

const StillHaveQuestionSection: React.FC = () => {
  return (
    <View style={[sharedStyles.mainContainer, infoStyles.bgColor]}>
      <Text style={infoStyles.sectionTitle}>Do you still have a question?</Text>

      <Image
        source={require("./../../../assets/info-screen/cart.png")}
        style={infoStyles.imageSection4}
      />
      <View>
        <View>
          <Text style={infoStyles.questionText}>
            For LEGO Gym related questions:
          </Text>
          <EmailLink name="legogym@healthgroup.dk" />
        </View>
        <View>
          <Text style={infoStyles.questionText}>
            For LEGO Homestay related questions:
          </Text>
          <EmailLink name="homestaybooking@LEGO.com" />
        </View>
        <View>
          <Text style={infoStyles.questionText}>
            If you are interested in booking a activities:
          </Text>
          <EmailLink name="legocampusevents@LEGO.comk" />
        </View>
        <View>
          <Text style={infoStyles.questionText}>
            If you have extra questions to People House:
          </Text>
          <EmailLink name="support@peoplehouse.lego.com" />
        </View>
        <View>
          <Text style={infoStyles.questionText}>
            If you have extra questions to LEGO® Campus:
          </Text>
          <View>
            <EmailLink name="lego.campus.operations.team@LEGO.com" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StillHaveQuestionSection;
