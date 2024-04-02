import * as React from "react";
import { View, StyleSheet, Image, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";

const MenuCompra = ({ navigation }) => {
  const pedidosData = [
    { key: '1', item: 'Peixe', quantidade: '1 Kg', origem: 'Restaurante', urgencia: 'Urgente', logo: require("../assets/peixe.png") },
    { key: '2', item: 'Cerveja', quantidade: '20 L', origem: 'Restaurante', urgencia: 'Não Urgente', logo: require("../assets/cerveja.png") },
    { key: '3', item: 'Repelente', quantidade: '10', origem: 'Fazenda', urgencia: 'Urgente', logo: require("../assets/repelente.png") },
    { key: '4', item: 'Ração', quantidade: '20 Kg', origem: 'Fazenda', urgencia: 'Não Urgente', logo: require("../assets/racao.png") },
  ];

  const programadosData = [
    { key: '1', item: 'Feno', quantidade: '200 Fardos', data: 'Todo dia 25', logo: require("../assets/feno.png") },
    { key: '2', item: 'Parafuso', quantidade: '100', data: 'Todo dia 10', logo: require("../assets/parafuso.png") },
  ];

  const fornecedoresData = [
    { key: '1', nome: 'Ambev', logo: require("../assets/ambev.png") },
    { key: '2', nome: 'Coca-Cola', logo: require("../assets/coca.png") },
    { key: '3', nome: 'Nestle', logo: require("../assets/nestle.png") },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.pedidoContainer}>
      <View style={styles.circleContainer}>
        <View style={styles.imgContainer}>
          <Image source={item.logo} style={styles.img} />
        </View>
      </View>
      <View style={styles.pedidoInfo}>
        <Text>{item.item}</Text>
        <Text>{item.quantidade}</Text>
        <Text>{item.origem || item.data}</Text>
        {item.urgencia && <Text>{item.urgencia}</Text>}
      </View>
    </View>
  );

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
        <View style={styles.contentRow}>
          <View style={styles.blueBox}>
            <Image source={require("../assets/cart.png")} style={styles.boxIcon} />
          </View>
        </View>

        <View style={styles.incluirManual}>
          <Text style={styles.manualTxt}>Incluir produto comprado manualmente...</Text>
        </View>

        <View style={styles.pedidos}>
          <Text style={styles.title}>Comprar pedidos:</Text>
          <FlatList
            data={pedidosData}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.programados}>
          <Text style={styles.title}>Compras Programadas:</Text>
          <FlatList
            data={programadosData}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.fornecedores}>
          <Text style={styles.title}>Fornecedores:</Text>
          <FlatList
            data={fornecedoresData}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.key}
          />
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
  incluirManual: {
    backgroundColor: "darkblue",
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 10,
  },
  manualTxt: {
    color: "#b4b4b4",
    fontSize: 14,
  },
  blueBox: {
    backgroundColor: "#00074A",
    width: 139,
    height: 145,
    borderRadius: 30,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxIcon: {
    width: 100,
    height: 100,

  },
  title: {
    color: "#000",
    fontSize: 20,
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
    marginTop: 10,
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
    marginTop: 10,

  },
  pedidoContainer: {
    width: 150,
    alignItems: 'center',
  },
  fornecedorContainer: {
    width: 150,
    alignItems: 'center',
  },
  fornecedores: {
    marginLeft: 20,
    marginRight: 20,
  },
  programados: {
    marginLeft: 20,
    marginRight: 20,
  },
  pedidos: {
    marginLeft: 20,
    marginRight: 20,
  }

});

export default MenuCompra;
