import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const BoxIcon = () => {
  return (
    <Image
      style={styles.boxIcon}
      contentFit="cover"
      source={require("../assets/box.png")}
    />
  );
};

const styles = StyleSheet.create({
  boxIcon: {
    position: "absolute",
    top: 32,
    left: 25,
    width: 89,
    height: 80,
    overflow: "hidden",
  },
});

export default BoxIcon;
