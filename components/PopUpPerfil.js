import React, { useState, useCallback } from "react";
import { View, StyleSheet, Pressable, Text, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PopUpRecusaDeEntregaDeFo from "./PopUpRecusaDeEntregaDeFo";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PopUpPerfil = ({ onClose }) => {
  const navigation = useNavigation();
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.popUpPerfil}>
        <LinearGradient
          style={[styles.popUpPerfilChild, styles.interfaceLogOutPosition]}
          locations={[0, 1]}
          colors={["#0011b0", "#404253"]}
        />
        <Image
          style={[styles.popUpPerfilItem, styles.userpersonIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.userpersonIcon, styles.userpersonIconPosition]}
          contentFit="cover"
          source={require("../assets/userperson1.png")}
        />
        <View style={[styles.popUpPerfilInner, styles.rectangleViewLayout]} />
        <Pressable
          style={[styles.calendarAlt, styles.calendarAltLayout]}
          onPress={() => navigation.navigate("Escala")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/calendaralt1.png")}
          />
        </Pressable>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
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
        <Text style={styles.luizaPereira}>Luiza Pereira</Text>
        <Text
          style={[
            styles.setorTiSoftwareContainer,
            styles.cargoProgramadoraTypo,
          ]}
        >
          <Text style={styles.setor}>Setor:</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.tiSoftware}>TI SOFTWARE</Text>
        </Text>
        <Text style={[styles.cargoProgramadora, styles.cargoProgramadoraTypo]}>
          <Text style={styles.setor}>Cargo:</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.tiSoftware}>PROGRAMADORA</Text>
        </Text>
        <Text style={[styles.escala, styles.escalaTypo]}>ESCALA</Text>
        <Text style={[styles.curriculo, styles.escalaTypo]}>CURRICULO</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-29.png")}
        />
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={openGroupContainer}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Image
            style={[styles.interfaceLogOut, styles.interfaceLogOutPosition]}
            contentFit="cover"
            source={require("../assets/interface--log-out.png")}
          />
          <Text style={styles.sair}>SAIR</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <PopUpRecusaDeEntregaDeFo onClose={closeGroupContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  interfaceLogOutPosition: {
    left: 0,
    position: "absolute",
  },
  userpersonIconPosition: {
    height: 192,
    left: 58,
    top: 96,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 100,
    backgroundColor: Color.colorMidnightblue_100,
    borderRadius: Border.br_8xl,
    top: 439,
    width: 100,
    position: "absolute",
  },
  calendarAltLayout: {
    width: 83,
    position: "absolute",
  },
  cargoProgramadoraTypo: {
    height: 20,
    fontSize: FontSize.size_base,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.kronaOneRegular,
    position: "absolute",
  },
  escalaTypo: {
    top: 543,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.kronaOneRegular,
    position: "absolute",
  },
  groupChildLayout: {
    height: 65,
    position: "absolute",
  },
  popUpPerfilChild: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    height: 235,
    backgroundColor: "transparent",
    top: 0,
    width: 299,
  },
  popUpPerfilItem: {
    width: 183,
  },
  userpersonIcon: {
    width: 180,
  },
  popUpPerfilInner: {
    left: 39,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  calendarAlt: {
    left: 48,
    top: 447,
    height: 79,
  },
  rectangleView: {
    left: 161,
  },
  documentInfo: {
    left: 170,
    top: 446,
    height: 87,
  },
  luizaPereira: {
    top: 300,
    left: 68,
    fontSize: FontSize.size_xl,
    width: 186,
    height: 48,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.kronaOneRegular,
    position: "absolute",
  },
  setor: {
    color: Color.colorBlack,
  },
  text: {
    color: Color.colorWhite,
  },
  tiSoftware: {
    color: Color.colorMidnightblue_200,
  },
  setorTiSoftwareContainer: {
    top: 360,
    width: 229,
  },
  cargoProgramadora: {
    top: 392,
    width: 270,
  },
  escala: {
    left: 46,
    height: 25,
    width: 100,
    top: 543,
  },
  curriculo: {
    left: 150,
  },
  groupIcon: {
    left: 3,
    width: 71,
    height: 68,
    top: 0,
    position: "absolute",
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
    left: 6,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorRed,
    width: 202,
    top: 0,
  },
  interfaceLogOut: {
    top: 2,
    width: 75,
    height: 62,
    overflow: "hidden",
  },
  sair: {
    top: 9,
    left: 75,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kronaOneRegular,
    position: "absolute",
  },
  rectangleParent: {
    top: 612,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 208,
    left: 39,
  },
  popUpPerfil: {
    backgroundColor: "#a8cfb1",
    height: 700,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 299,
  },
});

export default PopUpPerfil;
