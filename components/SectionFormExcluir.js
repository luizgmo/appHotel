import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const SectionFormExcluir = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={[styles.editEditPencilLine01, styles.editPosition]} />
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/rectangle-78.png")}
      />
      <Image
        style={[styles.editEditPencilLine011, styles.editPosition]}
        contentFit="cover"
        source={require("../assets/edit--edit-pencil-line-01.png")}
      />
      <View style={[styles.groupInner, styles.groupInnerLayout]} />
      <Text
        style={[styles.produtoParafusoFrancsContainer, styles.urgenteFlexBox]}
      >
        <Text style={styles.produto}>{`Produto:
`}</Text>
        <Text style={styles.parafusoFrancs}>{`Parafuso Francês   `}</Text>
        <Text style={styles.produto}>{`                    
  
`}</Text>
        <Text style={styles.parafusoFrancs}> </Text>
        <Text style={styles.blankLine1}> </Text>
      </Text>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-52.png")}
      />
      <Text style={[styles.quantidade40kg, styles.urgenteFlexBox]}>
        <Text style={styles.produto}>Quantidade:</Text>
        <Text style={styles.parafusoFrancs}> 40kg</Text>
        <Text style={styles.produto}>{`  `}</Text>
      </Text>
      <Image
        style={[styles.plusSquareIcon, styles.squareIconLayout]}
        contentFit="cover"
        source={require("../assets/plussquare.png")}
      />
      <Image
        style={[styles.minusSquareFullIcon, styles.squareIconLayout]}
        contentFit="cover"
        source={require("../assets/minussquarefull.png")}
      />
      <View style={[styles.rectangleView, styles.groupInnerLayout]} />
      <Text style={[styles.excluir, styles.pedirTypo]}>Excluir</Text>
      <Text style={[styles.pedir, styles.pedirTypo]}>Pedir</Text>
      <View
        style={[styles.interfaceCheckboxUnchecked, styles.squareIconLayout]}
      />
      <Text style={[styles.urgente, styles.urgenteFlexBox]}>Urgente</Text>
      <Image
        style={[styles.vectorIcon, styles.editPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 329,
    position: "absolute",
  },
  editPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupInnerLayout: {
    height: 50,
    width: 74,
    borderRadius: Border.br_3xs,
    left: 315,
    position: "absolute",
  },
  urgenteFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  squareIconLayout: {
    height: 18,
    width: 18,
    overflow: "hidden",
    position: "absolute",
  },
  pedirTypo: {
    width: 80,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightgoldenrodyellow_200,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 6,
    width: 402,
  },
  editEditPencilLine01: {
    top: 102,
    left: 159,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupItem: {
    top: 35,
    left: 8,
    width: 390,
    height: 117,
    position: "absolute",
  },
  editEditPencilLine011: {
    top: 103,
    left: 202,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupInner: {
    top: 98,
    backgroundColor: Color.colorSpringgreen,
  },
  produto: {
    color: Color.colorDarkslategray_100,
  },
  parafusoFrancs: {
    color: Color.colorBlack,
  },
  blankLine1: {
    color: Color.colorRed,
  },
  produtoParafusoFrancsContainer: {
    width: 68,
    height: 42,
    fontFamily: FontFamily.kronaOneRegular,
    fontSize: FontSize.size_3xs,
    top: 49,
    textAlign: "left",
    left: 132,
  },
  image5Icon: {
    top: 37,
    left: 23,
    borderRadius: Border.br_181xl,
    width: 88,
    height: 91,
    position: "absolute",
  },
  quantidade40kg: {
    left: 205,
    width: 83,
    height: 36,
    fontFamily: FontFamily.kronaOneRegular,
    fontSize: FontSize.size_3xs,
    top: 49,
    textAlign: "left",
  },
  plusSquareIcon: {
    left: 257,
    top: 74,
    height: 18,
    width: 18,
  },
  minusSquareFullIcon: {
    left: 209,
    top: 74,
    height: 18,
    width: 18,
  },
  rectangleView: {
    top: 38,
    backgroundColor: Color.colorRed,
  },
  excluir: {
    top: 51,
    left: 322,
    height: 27,
  },
  pedir: {
    top: 112,
    left: 327,
    height: 28,
  },
  interfaceCheckboxUnchecked: {
    top: 109,
    left: 246,
  },
  urgente: {
    top: 128,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.kreonRegular,
    width: 43,
    color: Color.colorBlack,
    left: 132,
  },
  vectorIcon: {
    height: "3.65%",
    width: "2.95%",
    top: "39.82%",
    right: "53.07%",
    bottom: "56.53%",
    left: "43.98%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleParent: {
    top: 378,
    left: 14,
    width: 407,
  },
});

export default SectionFormExcluir;
