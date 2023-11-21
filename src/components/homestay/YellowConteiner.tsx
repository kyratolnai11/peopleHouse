import React from "react";
import { View, Text, Image } from "react-native";
import { homestayStyles } from "./HomestayStyles";
import { sharedStyles } from "../../../utils/SharedStyles";
import { getHomestayLogos } from "../../constants";

type YellowConteinerProps = {
  title: "Room" | "Kitchen" | "Laundry room" | "Vending machine" | "Activities";
  subTitle: string;
  description: string[];
};

const YellowContainer: React.FC<YellowConteinerProps> = ({
  title,
  subTitle,
  description,
}) => {
  const logo = getHomestayLogos(title);
  return (
    <View style={homestayStyles.yellowContainer}>
      <Image source={logo} style={homestayStyles.logo} />
      <Text style={[sharedStyles.text, { fontWeight: "bold" }]}>{title}</Text>
      <View style={homestayStyles.dashedUnderline}>
        <Text
          style={[
            sharedStyles.text,
            { textAlign: "center", fontWeight: "bold" },
          ]}
        >
          {subTitle}
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        {description.map((item, i) => (
          <Text style={[sharedStyles.text, { textAlign: "center" }]} key={i}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default YellowContainer;
