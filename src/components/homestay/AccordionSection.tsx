import React from "react";
import { View, Text, Image } from "react-native";
import { homestayStyles } from "./HomestayStyles";
import Colors from "../../../utils/theme";
import { sharedStyles } from "../../../utils/SharedStyles";
import Accordion from "../info-screen/Accordion";

const AccordionSection: React.FC = () => {
  return (
    <View
      style={[
        homestayStyles.sectionContainer,
        { backgroundColor: Colors.light.mediumGrey },
      ]}
    >
      <Text
        style={[homestayStyles.title, { color: Colors.light.textSecondary }]}
      >
        Who can stay and how to pay?
      </Text>
      <Text style={[sharedStyles.text, { color: Colors.light.textSecondary }]}>
        To stay at LEGO Homestay, one of the following criteria must be met:
      </Text>
      <Text
        style={[
          sharedStyles.text,
          { color: Colors.light.textSecondary, paddingLeft: 10 },
        ]}
      >
        - You are employed in the LEGO® Group,
      </Text>
      <Text
        style={[
          sharedStyles.text,
          { color: Colors.light.textSecondary, paddingLeft: 10 },
        ]}
      >
        - You are employed in LEGO® Foundation, KIRKBI, LEGO® House or other
        LEGO® entities,
      </Text>
      <Text
        style={[
          sharedStyles.text,
          { color: Colors.light.textSecondary, paddingLeft: 10 },
        ]}
      >
        - You are invited by one of the before mentioned LEGO entities where the
        host is responsible for payment (i.e., BoD members).
      </Text>
      <Accordion
        title="Who can stay?"
        titleColor={Colors.light.white}
        content={
          <Image
            source={require("../../../assets/homestay/table1.png")}
            style={homestayStyles.tableImage}
          />
        }
      />
      <Accordion
        title="Book with Amex GBT"
        titleColor={Colors.light.white}
        content={
          <Image
            source={require("../../../assets/homestay/table2.png")}
            style={homestayStyles.tableImage}
          />
        }
      />
      <Accordion
        title="Book directly"
        titleColor={Colors.light.white}
        content={
          <Image
            source={require("../../../assets/homestay/table3.png")}
            style={homestayStyles.tableImage}
          />
        }
      />
      <Accordion
        title="Pay with company card"
        titleColor={Colors.light.white}
        content={
          <Image
            source={require("../../../assets/homestay/table4.png")}
            style={homestayStyles.tableImage}
          />
        }
      />
      <Accordion
        title="Pay by cost center"
        titleColor={Colors.light.white}
        content={
          <Image
            source={require("../../../assets/homestay/table5.png")}
            style={homestayStyles.tableImage}
          />
        }
      />
    </View>
  );
};

export default AccordionSection;
