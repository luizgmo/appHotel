import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PopUpBaixaTransferencia = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.popUpBaixatransferencia}>
      <Text style={[styles.tranferenciaDeSetor, styles.baixaPorDanoTypo]}>
        Tranferencia de Setor
      </Text>
      <Text
        style={[styles.baixaPorVencimento, styles.usoCustoTypo]}
      >{`Baixa por Vencimento `}</Text>
      <Text style={[styles.usoCusto, styles.usoCustoTypo]}>Uso (Custo)</Text>
      <Text style={[styles.baixaPorDano, styles.baixaPorDanoTypo]}>
        Baixa por Dano
      </Text>
      <Text style={[styles.text, styles.textTypo]}>0</Text>
      <Image
        style={[styles.plusSquareIcon, styles.plusIconLayout]}
        contentFit="cover"
        source={require("../assets/plussquare1.png")}
      />
      <Image
        style={[styles.minusSquareFullIcon, styles.plusIconLayout]}
        contentFit="cover"
        source={require("../assets/minussquarefull1.png")}
      />
      <View style={[styles.parent, styles.groupLayout]}>
        <Text style={[styles.text1, styles.textTypo]}>0</Text>
        <Image
          style={[styles.plusSquareIcon1, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/plussquare1.png")}
        />
        <Image
          style={[styles.minusSquareFullIcon1, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/minussquarefull1.png")}
        />
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <Text style={[styles.text1, styles.textTypo]}>0</Text>
        <Image
          style={[styles.plusSquareIcon1, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/plussquare1.png")}
        />
        <Image
          style={[styles.minusSquareFullIcon1, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/minussquarefull1.png")}
        />
      </View>
      <View style={[styles.container, styles.groupLayout]}>
        <Text style={[styles.text1, styles.textTypo]}>0</Text>
        <Image
          style={[styles.plusSquareIcon1, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/plussquare1.png")}
        />
        <Image
          style={[styles.minusSquareFullIcon1, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/minussquarefull1.png")}
        />
      </View>
      <View style={styles.popUpBaixatransferenciaChild} />
      <Text style={[styles.selecionar, styles.textTypo]}>SELECIONAR</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Inventrio")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-20.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Inventrio")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.confimar, styles.textTypo]}>CONFIMAR</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  baixaPorDanoTypo: {
    height: 41,
    left: 64,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  usoCustoTypo: {
    left: 67,
    height: 41,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  plusIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 26,
    width: 77,
    position: "absolute",
  },
  groupChildLayout: {
    width: 141,
    height: 59,
    position: "absolute",
  },
  tranferenciaDeSetor: {
    width: 330,
    top: 51,
  },
  baixaPorVencimento: {
    top: 120,
    width: 298,
  },
  usoCusto: {
    top: 257,
    width: 164,
  },
  baixaPorDano: {
    top: 188,
    width: 207,
  },
  text: {
    left: 394,
    top: 51,
  },
  plusSquareIcon: {
    left: 415,
    top: 51,
  },
  minusSquareFullIcon: {
    top: 53,
    left: 362,
  },
  text1: {
    left: 32,
    top: 0,
  },
  plusSquareIcon1: {
    left: 53,
    top: 0,
  },
  minusSquareFullIcon1: {
    top: 2,
    left: 0,
  },
  parent: {
    top: 250,
    left: 370,
  },
  group: {
    top: 181,
    left: 368,
  },
  container: {
    top: 113,
    left: 364,
  },
  popUpBaixatransferenciaChild: {
    top: 41,
    left: 483,
    backgroundColor: "#00b3be",
    width: 183,
    height: 36,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  selecionar: {
    top: 47,
    left: 512,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 470,
    top: 269,
    width: 60,
    height: 59,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#005929",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  confimar: {
    top: 16,
    left: 17,
    width: 108,
    height: 31,
  },
  rectangleParent: {
    top: 268,
    left: 545,
  },
  popUpBaixatransferencia: {
    backgroundColor: "#031615",
    width: 694,
    height: 336,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default PopUpBaixaTransferencia;
