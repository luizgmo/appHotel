// Tela Perfil

import * as React from "react";
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Perfil = ({ navigation }) => {
  const screenHeight = Dimensions.get("window").height;
  const rectangleHeight = screenHeight / 3;

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <LinearGradient
          style={[styles.rectangleLinearGradient, { height: rectangleHeight }]}
          locations={[0, 1]}
          colors={["#0011B0", "#404253"]}
          useAngle={true}
          angle={180}
        >
          <TouchableOpacity onPress={() => { }}>
            <Image source={require("../assets/group-29.png")} style={styles.image} />
          </TouchableOpacity>

        </LinearGradient>

        <View style={styles.containerBaixo}>
          <Text style={styles.nome}>Luiza Pereira</Text>
          <Text style={styles.setor}>Setor: TI SOFTWARE</Text>
          <Text style={styles.cargo}>Cargo: PROGRAMADORA</Text>

          <View style={styles.opcoes}>
            <View style={styles.escala}>
              <View style={styles.fundoAzul}>
                <TouchableOpacity onPress={() => { }}>
                  <Image source={require("../assets/calendaralt1.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.escalaText}>Escala</Text>
            </View>
            <View style={styles.escala}>
              <View style={styles.fundoAzul}>
                <TouchableOpacity onPress={() => { navigation.navigate("Curriculo") }}>
                  <Image source={require("../assets/documentinfo.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.curriculoText}>Currículo</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
          <View style={styles.sair}>
            <Image source={require("../assets/interfacelogout.png")} style={styles.sairIcon} />
            <Text style={styles.sairText}>SAIR</Text>
          </View>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.userpersonContainer}>
        <Image source={require("../assets/userperson.png")} style={styles.userpersonIcon} resizeMode="cover" />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  containerBaixo: {
    flex: 1,
    backgroundColor: "#00FFF0",
  },
  rectangleLinearGradient: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: "100%",
    backgroundColor: "transparent",
  },
  userpersonContainer: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -100 }],
    backgroundColor: 'white',
    borderRadius: 100,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  userpersonIcon: {
    width: 150,
    height: 150,
  },
  nome: {
    color: "#000",
    fontSize: 30,
    marginTop: 60,
    alignSelf: 'center',
  },
  setor: {
    color: "#000",
    fontSize: 20,
    marginTop: 30,
    marginLeft: 50,
  },
  cargo: {
    color: "#000",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 50,
  },
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  escala: {
    alignItems: 'center',
  },
  curriculo: {
    alignItems: 'center',
  },
  escalaText: {
    marginTop: 5,
    fontSize: 18,
  },
  curriculoText: {
    marginTop: 5,
    fontSize: 18,
  },
  fundoAzul: {
    backgroundColor: '#00074A',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  sair: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#FF0000',
    width: 208,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
  },
  sairIcon: {
    width: 75,
    height: 62,
  },
  sairText: {
    marginLeft: 10,
    fontSize: 36,
  },


});

export default Perfil;