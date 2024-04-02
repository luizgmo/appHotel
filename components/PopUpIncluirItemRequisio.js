import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PopUpIncluirItemRequisio = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.popUpIncluirItemRequisio}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.pedirPosition]} />
        <Text style={styles.procurarPorCadastro}>
          PROCURAR POR CADASTRO EXISTENTE...
        </Text>
      </View>
      <View
        style={[
          styles.popUpIncluirItemRequisioInner,
          styles.rectangleGroupPosition,
        ]}
      >
        <Pressable
          style={[styles.groupItem, styles.groupLayout]}
          onPress={() => navigation.navigate("Requisio")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
        <Pressable
          style={[styles.groupInner, styles.groupLayout]}
          onPress={() => navigation.navigate("Requisio")}
        />
        <Text style={[styles.cancelar, styles.pedirLayout]}>Cancelar</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.groupChild2Border]} />
        <Text style={[styles.itemX0, styles.itemTypo]}>ITEM X 0</Text>
        <Image
          style={[styles.plusSquareIcon, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/plussquare2.png")}
        />
        <Image
          style={[styles.minusSquareFullIcon, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/minussquarefull.png")}
        />
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.groupChild2Border]} />
        <Text style={[styles.itemX0, styles.itemTypo]}>ITEM X 0</Text>
        <Image
          style={[styles.plusSquareIcon, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/plussquare2.png")}
        />
        <Image
          style={[styles.minusSquareFullIcon, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/minussquarefull.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Text style={[styles.itemX02, styles.itemTypo]}>ITEM X 0</Text>
        <Image
          style={[styles.plusSquareIcon2, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/plussquare2.png")}
        />
        <Image
          style={[styles.minusSquareFullIcon2, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/minussquarefull.png")}
        />
        <View style={[styles.rectangleParent2, styles.groupChild2Position]}>
          <View style={[styles.rectangleView, styles.groupChild2Border]} />
          <Text style={[styles.itemX0, styles.itemTypo]}>ITEM X 0</Text>
          <Image
            style={[styles.plusSquareIcon, styles.plusIconLayout]}
            contentFit="cover"
            source={require("../assets/plussquare2.png")}
          />
          <Image
            style={[styles.minusSquareFullIcon, styles.plusIconLayout]}
            contentFit="cover"
            source={require("../assets/minussquarefull.png")}
          />
        </View>
        <View style={[styles.rectangleParent3, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.groupChild2Border]} />
          <Text style={[styles.itemX0, styles.itemTypo]}>ITEM X 0</Text>
          <Image
            style={[styles.plusSquareIcon, styles.plusIconLayout]}
            contentFit="cover"
            source={require("../assets/plussquare2.png")}
          />
          <Image
            style={[styles.minusSquareFullIcon, styles.plusIconLayout]}
            contentFit="cover"
            source={require("../assets/minussquarefull.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Text style={[styles.itemX02, styles.itemTypo]}>ITEM X 0</Text>
        <Image
          style={[styles.plusSquareIcon2, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/plussquare2.png")}
        />
        <Image
          style={[styles.minusSquareFullIcon2, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/minussquarefull.png")}
        />
        <View style={[styles.rectangleParent2, styles.groupChild2Position]}>
          <View style={[styles.rectangleView, styles.groupChild2Border]} />
          <Text style={[styles.itemX0, styles.itemTypo]}>ITEM X 0</Text>
          <Image
            style={[styles.plusSquareIcon, styles.plusIconLayout]}
            contentFit="cover"
            source={require("../assets/plussquare2.png")}
          />
          <Image
            style={[styles.minusSquareFullIcon, styles.plusIconLayout]}
            contentFit="cover"
            source={require("../assets/minussquarefull.png")}
          />
        </View>
        <View style={[styles.rectangleParent3, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.groupChild2Border]} />
          <Text style={[styles.itemX0, styles.itemTypo]}>ITEM X 0</Text>
          <Image
            style={[styles.plusSquareIcon, styles.plusIconLayout]}
            contentFit="cover"
            source={require("../assets/plussquare2.png")}
          />
          <Image
            style={[styles.minusSquareFullIcon, styles.plusIconLayout]}
            contentFit="cover"
            source={require("../assets/minussquarefull.png")}
          />
        </View>
      </View>
      <View style={[styles.pedirWrapper, styles.pedirLayout]}>
        <Text style={[styles.pedir, styles.pedirLayout]}>Pedir</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 45,
    width: 364,
    position: "absolute",
  },
  pedirPosition: {
    top: 0,
    left: 0,
  },
  rectangleGroupPosition: {
    height: 50,
    top: 608,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_3xs,
    height: 50,
    width: 171,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pedirLayout: {
    height: 28,
    width: 185,
    position: "absolute",
  },
  viewLayout: {
    width: 400,
    position: "absolute",
  },
  groupChild2Border: {
    height: 60,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_xl,
    top: 0,
  },
  itemTypo: {
    height: 46,
    top: 19,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    width: 364,
    position: "absolute",
  },
  plusIconLayout: {
    height: 18,
    width: 18,
    top: 21,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParentLayout: {
    height: 270,
    width: 401,
    position: "absolute",
  },
  groupChild2Position: {
    left: 1,
    width: 400,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_51xl,
    backgroundColor: "#9798b7",
    shadowColor: "rgba(0, 0, 0, 0.71)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    height: 45,
    width: 364,
    position: "absolute",
    top: 0,
  },
  procurarPorCadastro: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.kronaOneRegular,
    color: "#6361c3",
    textAlign: "left",
    left: 18,
    top: 16,
    position: "absolute",
  },
  rectangleParent: {
    left: 28,
    top: 16,
    width: 364,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorSpringgreen,
  },
  popUpIncluirItemRequisioInner: {
    left: 221,
    width: 171,
    height: 50,
    top: 608,
  },
  groupInner: {
    backgroundColor: Color.colorRed,
  },
  cancelar: {
    top: 11,
    left: 38,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    width: 185,
    textAlign: "left",
  },
  rectangleGroup: {
    width: 223,
    height: 50,
    top: 608,
    left: 28,
  },
  rectangleView: {
    width: 400,
    position: "absolute",
    left: 0,
  },
  itemX0: {
    left: 17,
  },
  plusSquareIcon: {
    left: 350,
  },
  minusSquareFullIcon: {
    left: 302,
  },
  rectangleContainer: {
    top: 106,
    height: 65,
    left: 11,
  },
  groupView: {
    top: 176,
    left: 10,
    height: 65,
  },
  groupChild2: {
    height: 60,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_xl,
    top: 0,
  },
  itemX02: {
    left: 18,
    height: 46,
    top: 19,
  },
  plusSquareIcon2: {
    left: 351,
  },
  minusSquareFullIcon2: {
    left: 303,
  },
  rectangleParent2: {
    top: 135,
    height: 65,
  },
  rectangleParent3: {
    top: 205,
    height: 65,
    left: 0,
  },
  rectangleParent1: {
    top: 246,
    left: 11,
  },
  rectangleParent4: {
    top: 316,
    left: 10,
  },
  pedir: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    width: 185,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  pedirWrapper: {
    top: 618,
    left: 279,
  },
  popUpIncluirItemRequisio: {
    backgroundColor: "#62c7ff",
    width: 420,
    height: 678,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default PopUpIncluirItemRequisio;
