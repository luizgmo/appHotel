import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PopUpRecusaDeEntregaDeFo = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.popUpRecusaDeEntregaDeFo}>
      <Text style={[styles.motivo, styles.motivoTypo]}>Motivo:</Text>
      <View style={[styles.vectorParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-4.png")}
        />
        <Text style={[styles.digaOMotivo, styles.motivoTypo]}>
          Diga o motivo aqui...
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("DetalhesDePedidoComprado1")}
      >
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.enviar, styles.motivoTypo]}>enviar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  motivoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.kronaOneRegular,
    position: "absolute",
  },
  groupChildLayout: {
    width: 250,
    position: "absolute",
  },
  groupItemLayout: {
    height: 25,
    width: 204,
    position: "absolute",
  },
  motivo: {
    top: 25,
    left: 64,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.kronaOneRegular,
    position: "absolute",
  },
  groupChild: {
    top: 18,
    borderRadius: Border.br_xl,
    left: 0,
    maxHeight: "100%",
  },
  digaOMotivo: {
    left: 4,
    fontSize: FontSize.size_sm,
    color: "#8e6a6a",
    top: 0,
    fontFamily: FontFamily.kronaOneRegular,
    position: "absolute",
  },
  vectorParent: {
    top: 73,
    left: 80,
    height: 18,
  },
  groupItem: {
    borderRadius: Border.br_81xl,
    backgroundColor: "#c84800",
    top: 0,
    left: 0,
  },
  enviar: {
    marginLeft: -93,
    left: "50%",
    color: Color.colorGray_300,
    width: 186,
    top: 0,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.kronaOneRegular,
    position: "absolute",
  },
  rectangleParent: {
    top: 107,
    left: 92,
  },
  popUpRecusaDeEntregaDeFo: {
    borderRadius: 79,
    backgroundColor: "#fe8585",
    width: 410,
    height: 145,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default PopUpRecusaDeEntregaDeFo;
