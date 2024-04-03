import * as React from "react";
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";

const DetalhesPedido = ({ navigation, route }) => {
    

    const { item } = route.params;



    return (
        <ScrollView style={styles.container}>
            <View style={styles.backgroundImageContainer}>
                <Image source={require("../assets/logohotelestancia.png")} style={styles.backgroundImage} />
            </View>

            <View style={styles.userPersonContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate("Pedidos") }}>
                    <Image source={require("../assets/arrow3.png")} style={styles.arrowImg} />
                </TouchableOpacity>
            </View>

            <Image source={item.logo} style={styles.itemImg} resizeMode="contain" />

            <View style={styles.pedidoInfo}>
                <View style={styles.row}>
                    <Text style={styles.itemTxt}>Produto: </Text>
                    <Text style={styles.itemDesc}>{item.item}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.itemTxt}>Quantidade: </Text>
                    <Text style={styles.itemDesc}>{item.quantidade}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.itemTxt}>Fornecedor: </Text>
                    <Text style={styles.itemDesc}>{item.fornecedor}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.itemTxt}>Comprado: </Text>
                    <Text style={styles.itemDesc}>{item.comprado}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.itemTxt}>Entrega: </Text>
                    <Text style={styles.itemDesc}>{item.entrega}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.itemTxt}>Setor: </Text>
                    <Text style={styles.itemDesc}>{item.setor}</Text>
                </View>
                <View style={styles.observacao}>
                    <Text style={styles.observacaoTitle}>Observações Comprador:</Text>
                    <Text style={styles.observacaoDesc}>{item.obsC}</Text>
                </View>
                <View style={styles.observacao}>
                    <Text style={styles.observacaoTitle}>Observações Setor:</Text>
                    <Text style={styles.observacaoDesc}>{item.obsS}</Text>
                </View>
            </View>

            <TouchableOpacity>
                <View style={styles.btnChegou}>
                    <Text style={styles.btnTxt}>CHEGOU</Text>
                </View>
            </TouchableOpacity>

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
    pedidoInfo: {
        marginLeft: 20,
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
    },
    itemTxt: {
        fontSize: 20,
    },
    itemDesc: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemImg: {
        width: 250,
        height: 250,
        alignSelf: "center",
    },
    observacao: {
        marginTop: 20,
    },
    observacaoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    observacaoDesc: {
        fontSize: 20,
    },
    btnChegou: {
        backgroundColor: '#00C850',
        width: 250,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btnTxt: {
        fontSize: 24,
        fontWeight: 'bold',
    }

});

export default DetalhesPedido;