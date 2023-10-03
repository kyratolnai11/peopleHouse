import React from "react";
import { Image } from "react-native";

export const ActionBarImage: React.FC = () => {
  return (
    <Image
      source={require("../../assets/logo192.png")}
      style={{
        height: 60,
        width: 60,
        marginRight: 20,
      }}
    />
  );
};
