import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PopUpBaixaTransferencia from "./PopUpBaixaTransferencia";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Inventrio = () => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={styles.inventrio}
        locations={[0, 1]}
        colors={["#0a1502", "#1a1e2d"]}
      >
        <Image
          style={styles.inventrioChild}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Image
          style={styles.inventrioItem}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={[styles.inventrioInner, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-32.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-32.png")}
        />
        <Text style={[styles.custo, styles.custoTypo]}>CUSTO</Text>
        <Text style={[styles.utenslios, styles.utensliosTypo]}>UTENSÍLIOS</Text>
        <Text style={[styles.revenda, styles.custoTypo]}>REVENDA</Text>
        <LinearGradient
          style={[styles.rectangleParent, styles.rectangleParentPosition]}
          locations={[0, 1]}
          colors={["#353600", "#00071e"]}
        >
          <LinearGradient
            style={[styles.frameChild, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameItem, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameInner, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild1, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild2, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild3, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild4, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild5, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild6, styles.frameChildLayout4]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild7, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild8, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild9, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild10, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild11, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild12, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild13, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild14, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild15, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild16, styles.frameChildLayout3]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild17, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild18, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild19, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild20, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild21, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild22, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild23, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild24, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild25, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild26, styles.frameChildLayout2]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild27, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild28, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild29, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild30, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild31, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild32, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild33, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild34, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild35, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild36, styles.frameChildLayout1]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild37, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild38, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild39, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild40, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild41, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild42, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild43, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild44, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild45, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
          <LinearGradient
            style={[styles.frameChild46, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#563030", "#240a59"]}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.inventrioChild1}
          locations={[0, 1]}
          colors={["#343501", "#02091e"]}
        />
        <Text style={[styles.infoDoItem, styles.utensliosTypo]}>
          INFO DO ITEM
        </Text>
        <LinearGradient
          style={[styles.inventrioChild2, styles.childBorder]}
          locations={[0, 1]}
          colors={["#563030", "#240a59"]}
        />
        <Text
          style={[styles.nomeDoProduto, styles.descrioTypo]}
        >{`Nome do Produto `}</Text>
        <Text style={[styles.descrio, styles.descrioTypo]}>
          Descrição...............................................................................................................................................................................................................................................................................................................................
        </Text>
        <Text style={[styles.quantidade, styles.destinarTypo]}>
          Quantidade:
        </Text>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={openGroupContainer}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.destinar, styles.destinarTypo]}>Destinar</Text>
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("DetalhesDePedidoComprado")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-41.png")}
          />
        </Pressable>
      </LinearGradient>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <PopUpBaixaTransferencia onClose={closeGroupContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    width: 177,
    height: 47,
    top: 69,
    position: "absolute",
  },
  custoTypo: {
    height: 23,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  utensliosTypo: {
    width: 142,
    height: 23,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleParentPosition: {
    borderRadius: Border.br_10xs,
    top: 105,
    position: "absolute",
    backgroundColor: "transparent",
  },
  frameChildLayout4: {
    height: 50,
    width: 50,
    top: 23,
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: "transparent",
  },
  frameChildLayout3: {
    top: 87,
    height: 50,
    width: 50,
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: "transparent",
  },
  frameChildLayout2: {
    top: 151,
    height: 50,
    width: 50,
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: "transparent",
  },
  frameChildLayout1: {
    top: 215,
    height: 50,
    width: 50,
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: "transparent",
  },
  frameChildLayout: {
    top: 279,
    height: 50,
    width: 50,
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: "transparent",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgreen,
    borderStyle: "solid",
  },
  descrioTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  destinarTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 43,
    width: 85,
    position: "absolute",
  },
  inventrioChild: {
    width: 218,
    height: 47,
    top: 69,
    left: 12,
    position: "absolute",
  },
  inventrioItem: {
    top: 58,
    left: 587,
    width: 265,
    height: 56,
    position: "absolute",
  },
  inventrioInner: {
    left: 381,
  },
  groupIcon: {
    left: 216,
  },
  custo: {
    left: 269,
    width: 75,
    top: 75,
  },
  utenslios: {
    left: 410,
    top: 75,
  },
  revenda: {
    top: 74,
    left: 75,
    width: 104,
  },
  frameChild: {
    borderWidth: 1,
    borderColor: Color.colorLightgreen,
    borderStyle: "solid",
    left: 23,
  },
  frameItem: {
    left: 92,
  },
  frameInner: {
    left: 161,
  },
  rectangleLineargradient: {
    left: 230,
  },
  frameChild1: {
    left: 299,
  },
  frameChild2: {
    left: 368,
  },
  frameChild3: {
    left: 437,
  },
  frameChild4: {
    left: 506,
  },
  frameChild5: {
    left: 575,
  },
  frameChild6: {
    left: 644,
  },
  frameChild7: {
    left: 23,
  },
  frameChild8: {
    left: 92,
  },
  frameChild9: {
    left: 161,
  },
  frameChild10: {
    left: 230,
  },
  frameChild11: {
    left: 299,
  },
  frameChild12: {
    left: 368,
  },
  frameChild13: {
    left: 437,
  },
  frameChild14: {
    left: 506,
  },
  frameChild15: {
    left: 575,
  },
  frameChild16: {
    left: 644,
  },
  frameChild17: {
    left: 23,
  },
  frameChild18: {
    left: 92,
  },
  frameChild19: {
    left: 161,
  },
  frameChild20: {
    left: 230,
  },
  frameChild21: {
    left: 299,
  },
  frameChild22: {
    left: 368,
  },
  frameChild23: {
    left: 437,
  },
  frameChild24: {
    left: 506,
  },
  frameChild25: {
    left: 575,
  },
  frameChild26: {
    left: 644,
  },
  frameChild27: {
    left: 23,
  },
  frameChild28: {
    left: 92,
  },
  frameChild29: {
    left: 161,
  },
  frameChild30: {
    left: 230,
  },
  frameChild31: {
    left: 299,
  },
  frameChild32: {
    left: 368,
  },
  frameChild33: {
    left: 437,
  },
  frameChild34: {
    left: 506,
  },
  frameChild35: {
    left: 575,
  },
  frameChild36: {
    left: 644,
  },
  frameChild37: {
    left: 23,
  },
  frameChild38: {
    left: 92,
  },
  frameChild39: {
    left: 161,
  },
  frameChild40: {
    left: 230,
  },
  frameChild41: {
    left: 299,
  },
  frameChild42: {
    left: 368,
  },
  frameChild43: {
    left: 437,
  },
  frameChild44: {
    left: 506,
  },
  frameChild45: {
    left: 575,
  },
  frameChild46: {
    left: 644,
  },
  rectangleParent: {
    width: 575,
    height: 288,
    left: 12,
    borderRadius: Border.br_10xs,
    top: 105,
    overflow: "hidden",
  },
  inventrioChild1: {
    left: 595,
    width: 251,
    height: 318,
    top: 75,
    position: "absolute",
    backgroundColor: "transparent",
  },
  infoDoItem: {
    top: 63,
    left: 653,
  },
  inventrioChild2: {
    left: 682,
    width: 83,
    height: 73,
    borderRadius: Border.br_10xs,
    top: 105,
    position: "absolute",
    backgroundColor: "transparent",
  },
  nomeDoProduto: {
    top: 198,
    left: 637,
    width: 184,
    height: 38,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  descrio: {
    top: 240,
    left: 627,
    fontSize: FontSize.size_3xs,
    width: 185,
    height: 66,
    color: Color.colorWhite,
  },
  quantidade: {
    top: 337,
    left: 618,
    width: 88,
    height: 18,
    color: Color.colorWhite,
  },
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: "#320606",
  },
  destinar: {
    top: 12,
    left: 10,
    color: Color.colorBlack,
    width: 66,
    height: 17,
    transform: [
      {
        rotate: "-0.12deg",
      },
    ],
  },
  rectangleGroup: {
    top: 332,
    left: 736,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "1.41%",
    top: "4.07%",
    right: "92.14%",
    bottom: "82.44%",
    width: "6.46%",
    height: "13.49%",
    position: "absolute",
  },
  inventrio: {
    width: 852,
    height: 393,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Inventrio;
