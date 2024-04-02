import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DocumentInfo = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.documentInfo, styles.calendarAltLayout]}
      onPress={() => navigation.navigate("Curriculo")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/documentinfo.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  documentInfo: {
    left: 170,
    top: 446,
    height: 87,
  },
});

export default DocumentInfo;
