import { View, Image } from "react-native";
import React from "react";

const CustomBackImage: React.FC = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/event-screen/back.png")}
        style={{ width: 20, height: 20, marginHorizontal: 10 }}
      />
    </View>
  );
};

export default CustomBackImage;
