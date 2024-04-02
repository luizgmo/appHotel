import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const BackpackIcon = () => {
  return (
    <Image
      style={styles.backpackIcon}
      contentFit="cover"
      source={require("../assets/backpack.png")}
    />
  );
};

const styles = StyleSheet.create({
  backpackIcon: {
    position: "absolute",
    top: 24,
    left: 29,
    width: 80,
    height: 83,
    overflow: "hidden",
  },
});

export default BackpackIcon;
