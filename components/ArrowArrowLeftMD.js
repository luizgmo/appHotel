import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ArrowArrowLeftMD = ({
  arrowArrowLeftMDPosition,
  arrowArrowLeftMDWidth,
  arrowArrowLeftMDHeight,
  arrowArrowLeftMDOverflow,
  arrowArrowLeftMDLeft,
  arrowArrowLeftMDTop,
  onArrowArrowLeftMDPress,
}) => {
  const arrowArrowLeftMDStyle = useMemo(() => {
    return {
      ...getStyleValue("position", arrowArrowLeftMDPosition),
      ...getStyleValue("width", arrowArrowLeftMDWidth),
      ...getStyleValue("height", arrowArrowLeftMDHeight),
      ...getStyleValue("overflow", arrowArrowLeftMDOverflow),
      ...getStyleValue("left", arrowArrowLeftMDLeft),
      ...getStyleValue("top", arrowArrowLeftMDTop),
    };
  }, [
    arrowArrowLeftMDPosition,
    arrowArrowLeftMDWidth,
    arrowArrowLeftMDHeight,
    arrowArrowLeftMDOverflow,
    arrowArrowLeftMDLeft,
    arrowArrowLeftMDTop,
  ]);

  return (
    <Image
      style={[styles.arrowArrowLeftMd, arrowArrowLeftMDStyle]}
      contentFit="cover"
      source={require("../assets/arrow--arrow-left-md.png")}
      onPress={onArrowArrowLeftMDPress}
    />
  );
};

const styles = StyleSheet.create({
  arrowArrowLeftMd: {
    width: 55,
    height: 53,
    overflow: "hidden",
  },
});

export default ArrowArrowLeftMD;
