import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const CartPlusSolidIcon = () => {
  return (
    <Image
      style={styles.cartPlusSolidIcon}
      contentFit="cover"
      source={require("../assets/cartplussolid.png")}
    />
  );
};

const styles = StyleSheet.create({
  cartPlusSolidIcon: {
    position: "absolute",
    top: 10,
    left: 6,
    width: 104,
    height: 96,
    overflow: "hidden",
  },
});

export default CartPlusSolidIcon;
