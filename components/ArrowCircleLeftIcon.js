import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ArrowCircleLeftIcon = ({ dimensionsCode, propLeft }) => {
  const arrowCircleLeftIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <Image
      style={[styles.arrowCircleLeftIcon, arrowCircleLeftIconStyle]}
      contentFit="cover"
      source={dimensionsCode}
    />
  );
};

const styles = StyleSheet.create({
  arrowCircleLeftIcon: {
    position: "absolute",
    top: 183,
    left: 38,
    width: 56,
    height: 54,
    overflow: "hidden",
  },
});

export default ArrowCircleLeftIcon;
