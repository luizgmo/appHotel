import * as React from "react";
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.backgroundImageContainer}>
        <Image source={require("../assets/logohotelestancia.png")} style={styles.backgroundImage} />
      </View>

      <View style={styles.retangle}>
        <Text>PONTO DE VENDA</Text>
      </View>


      <View style={styles.userPersonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate("Perfil") }}>
          <Image source={require("../assets/userperson.png")} style={styles.userPersonIcon} />
        </TouchableOpacity>
      </View>


      <View style={styles.content}>
        <View style={styles.contentRow}>
          <TouchableOpacity onPress={() => { navigation.navigate("MenuCompra") }}>
            <View style={styles.blueBox}>
              <Image source={require("../assets/cart.png")} style={styles.boxIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate("Pedidos") }}>
            <View style={styles.blueBox}>
              <Image source={require("../assets/box.png")} style={styles.boxIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.contentRow}>
          <TouchableOpacity onPress={() => { navigation.navigate("Inventario") }}>
            <View style={styles.blueBox}>
              <Image source={require("../assets/backpack.png")} style={styles.boxIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <View style={styles.blueBox}>
              <Image source={require("../assets/bag.png")} style={styles.boxIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.contentRow}>
          <TouchableOpacity onPress={() => { navigation.navigate("Escala") }}>
            <View style={styles.blueBox}>
              <Image source={require("../assets/calendaralt1.png")} style={styles.boxIcon} />
            </View>
          </TouchableOpacity>
          <View style={styles.blueBox}>

          </View>
        </View>
        <View style={styles.contentRow}>
          <View style={styles.blueBox}>

          </View>
          <View style={styles.blueBox}>

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#ACACAC"
  },
  backgroundImageContainer: {
    position: "absolute",
    zIndex: -1,
  },
  backgroundImage: {
    flex: 1,
    width: 400,
    height: 400,
    alignSelf: "center",
    marginTop: 50,
    opacity: 0.3,
  },
  userPersonContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#00074A',
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
  },
  retangle: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 200,
    height: 40,
    borderWidth: 5,
    borderColor: '#00074A',
    position: 'absolute',
    marginTop: 30,
    marginLeft: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: 'center',
    marginTop: 150,
  },
  blueBox: {
    backgroundColor: "#00074A",
    width: 139,
    height: 145,
    borderRadius: 30,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxIcon: {
    width: 100,
    height: 100,

  }
});

export default Home;
