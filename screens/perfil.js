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
          <TouchableOpacity style={styles.configBtn} onPress={() => { }}>
            <Image source={require("../assets/group-29.png")} style={styles.image} />
          </TouchableOpacity>

        </LinearGradient>

        <View style={styles.containerBaixo}>
          <Text style={styles.nome}>Luiza Pereira</Text>
          <View style={styles.row}>
            <Text style={styles.setor}>Setor: </Text>
            <Text style={styles.setorTxt}>TI SOFTWARE</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cargo}>Cargo: </Text>
            <Text style={styles.cargoTxt}>PROGRAMADORA</Text>
          </View>

          <View style={styles.opcoes}>
            <View style={styles.escala}>
              <View style={styles.fundoAzul}>
                <TouchableOpacity onPress={() => { navigation.navigate("Escala") }}>
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

          <TouchableOpacity style={styles.btnSair} onPress={() => { navigation.navigate("Home") }}>
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
  configBtn: {
    width: 70,
    height: 70,
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 70,
    height: 70,
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
  setorTxt: {
    color: "#000",
    fontSize: 20,
    marginTop: 30,
  },
  cargo: {
    color: "#000",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 50,
  },
  cargoTxt: {
    color: "#000",
    fontSize: 20,
    marginTop: 10,
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
    backgroundColor: '#FF0000',
    width: 208,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
  },
  btnSair: {
    marginTop: 50,
    width: 208,
    alignSelf: 'center',
  },

  sairIcon: {
    width: 75,
    height: 62,
  },
  sairText: {
    marginLeft: 10,
    fontSize: 36,
  },
  row: {
    flexDirection: 'row',
  }


});

export default Perfil;
