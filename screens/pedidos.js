import * as React from "react";
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";

const Pedidos = ({ navigation }) => {
  const pedidosData = [
    { key: '1', item: 'Peixe', quantidade: '1 Kg', fornecedor: 'Frigol', comprado: '10/03/2010', entrega: '20/03/2010', logo: require("../assets/peixe.png") },
    { key: '2', item: 'Cerveja', quantidade: '20 L', fornecedor: 'Ambev', comprado: '10/03/2010', entrega: '20/03/2010', logo: require("../assets/cerveja.png") },
    { key: '3', item: 'Repelente', quantidade: '10', fornecedor: 'Unileven', comprado: '10/03/2010', entrega: '20/03/2010', logo: require("../assets/repelente.png") },
    { key: '4', item: 'Ração', quantidade: '20 Kg', fornecedor: 'PetZ', comprado: '10/03/2010', entrega: '20/03/2010', logo: require("../assets/racao.png") },
  ];

  const programadosData = [
    { key: '1', item: 'Feno', quantidade: '200 Fardos', fornecedor: 'Pastoria', comprado: '10/03/2010', entrega: '20/03/2010', logo: require("../assets/feno.png") },
    { key: '2', item: 'Parafuso', quantidade: '100', fornecedor: 'Irmãos Rossi', comprado: '10/03/2010', entrega: '20/03/2010', logo: require("../assets/parafuso.png") },
  ];

  const renderPedidos = () => {
    return pedidosData.map((item) => (
      <View key={item.key} style={styles.pedidoContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.imgContainer}>
            <Image source={item.logo} style={styles.img} />
          </View>
        </View>
        <View style={styles.pedidoInfo}>
          <View style={styles.row}>
            <Text>Produto: </Text>
            <Text style={styles.itemTxt}>{item.item}</Text>
          </View>
          <View style={styles.row}>
            <Text>Quantidade: </Text>
            <Text style={styles.itemTxt}>{item.quantidade}</Text>
          </View>
          <View style={styles.row}>
            <Text>Fornecedor: </Text>
            <Text style={styles.itemTxt}>{item.fornecedor}</Text>
          </View>
          <View style={styles.row}>
            <Text>Comprado: </Text>
            <Text style={styles.itemTxt}>{item.comprado}</Text>
          </View>
          <View style={styles.row}>
            <Text>Entrega: </Text>
            <Text style={styles.itemTxt}>{item.entrega}</Text>
          </View>
        </View>
      </View>
    ));
  };

  const renderProgramados = () => {
    return programadosData.map((item) => (
      <View key={item.key} style={styles.pedidoContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.imgContainer}>
            <Image source={item.logo} style={styles.img} />
          </View>
        </View>
        <View style={styles.pedidoInfo}>
          <View style={styles.row}>
            <Text>Produto: </Text>
            <Text style={styles.itemTxt}>{item.item}</Text>
          </View>
          <View style={styles.row}>
            <Text>Quantidade: </Text>
            <Text style={styles.itemTxt}>{item.quantidade}</Text>
          </View>
          <View style={styles.row}>
            <Text>Fornecedor: </Text>
            <Text style={styles.itemTxt}>{item.fornecedor}</Text>
          </View>
          <View style={styles.row}>
            <Text>Comprado: </Text>
            <Text style={styles.itemTxt}>{item.comprado}</Text>
          </View>
          <View style={styles.row}>
            <Text>Entrega: </Text>
            <Text style={styles.itemTxt}>{item.entrega}</Text>
          </View>
        </View>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <Image source={require("../assets/logohotelestancia.png")} style={styles.backgroundImage} />
      </View>

      <View style={styles.userPersonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
          <Image source={require("../assets/arrow3.png")} style={styles.arrowImg} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.pedidos}>
          <Text style={styles.title}>Pedidos:</Text>
          {renderPedidos()}
        </View>

        <View style={styles.pedidos}>
          <Text style={styles.title}>Compras Programadas:</Text>
          {renderProgramados()}
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
  arrowImg: {
    width: 70,
    height: 70,
    top: 5,
    left: 5,
  },
  content: {
    marginBottom: 20,
  },
  boxIcon: {
    width: 100,
    height: 100,
  },
  title: {
    color: "#000",
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  circleContainer: {
    backgroundColor: "white",
    width: 130,
    height: 130,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#00074A',
  },
  imgContainer: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: 'hidden',
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
  },
  pedidoInfo: {
    marginLeft: 20,
  },
  pedidoContainer: {
    backgroundColor: "#979797",
    borderRadius: 20,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  pedidos: {
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  itemTxt: {
    fontWeight: 'bold',
  }

});

export default Pedidos;