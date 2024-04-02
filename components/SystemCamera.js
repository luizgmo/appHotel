import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const SystemCamera = () => {
  return (
    <Image
      style={styles.systemCamera}
      contentFit="cover"
      source={require("../assets/system--camera.png")}
    />
  );
};

const styles = StyleSheet.create({
  systemCamera: {
    position: "absolute",
    top: 718,
    left: 54,
    width: 90,
    height: 90,
    overflow: "hidden",
  },
});

export default SystemCamera;
