import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const InterfaceLogOut = () => {
  return (
    <Image
      style={[styles.interfaceLogOut, styles.interfaceLogOutPosition]}
      contentFit="cover"
      source={require("../assets/interface--log-out.png")}
    />
  );
};

const styles = StyleSheet.create({
  interfaceLogOut: {
    top: 2,
    width: 75,
    height: 62,
    overflow: "hidden",
  },
});

export default InterfaceLogOut;
