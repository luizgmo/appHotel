// Tela Curriculo

import * as React from "react";
import { View, StyleSheet, Image, Dimensions, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Curriculo = ({ navigation }) => {
    const screenHeight = Dimensions.get("window").height;
    const rectangleHeight = screenHeight / 3;

    return (


        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <LinearGradient
                    style={[styles.rectangleLinearGradient, { height: rectangleHeight }]}
                    locations={[0, 1]}
                    colors={["#0011B0", "#404253"]}
                    useAngle={true}
                    angle={180}
                >
                    <TouchableOpacity onPress={() => { navigation.navigate("Perfil") }}>
                        <Image source={require("../assets/arrow3.png")} style={styles.image} />
                    </TouchableOpacity>

                    <View style={styles.img2Container}>
                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require("../assets/calendaralt2.png")} style={styles.image2} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userpersonContainer}>
                        <Image source={require("../assets/userperson.png")} style={styles.userpersonIcon} resizeMode="cover" />
                    </View>

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

                    <View style={styles.dados}>
                        <Text style={styles.dadosTitle}>Dados do Currículo:</Text>
                        <View style={styles.row}>
                            <Text style={styles.dadosTxt}>Idade: </Text>
                            <Text style={styles.dadosTxt}>26</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.dadosTxt}>RG: </Text>
                            <Text style={styles.dadosTxt}>99.999.999-9</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.dadosTxt}>CPF: </Text>
                            <Text style={styles.dadosTxt}>999.999.999-99</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.dadosTxt}>CDT: </Text>
                            <Text style={styles.dadosTxt}>1234567</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.dadosTxt}>NOME DA MÃE: </Text>
                            <Text style={styles.dadosTxt}>CLEUSA SILVA</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.dadosTxt}>NOME DO PAI: </Text>
                            <Text style={styles.dadosTxt}>CLEBE PEREIRA</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.dadosTxt}>CONTATO: </Text>
                            <Text style={styles.dadosTxt}>(89)97345-5891</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.dadosTxt}>E-MAIL: </Text>
                            <Text style={styles.dadosTxt}>LUIZA@GMAIL.COM</Text>
                        </View>

                    </View>

                    <View style={styles.tempo}>
                        <Text style={styles.dadosTitle}>TEMPO DE CASA:</Text>
                        <Text style={styles.dadosTxt}>5 ANOS</Text>

                    </View>

                    <View style={styles.observacao}>
                        <Text style={styles.dadosTitle}>OBSERVAÇÕES:</Text>
                        <View style={styles.observacaoContainer}>
                            <Text style={styles.observacaoTxt}>Lorem ipsum dolor sit amet </Text>
                        </View>
                    </View>

                    <View style={styles.advertencias}>
                        <Text style={styles.dadosTitle}>ADVERTÊNCIAS:</Text>
                        <View style={styles.advertenciasContainer}>
                            <Text style={styles.advertenciasTxt}>Lorem ipsum dolor sit amet </Text>
                        </View>
                    </View>


                </View>
            </View>






        </ScrollView>
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
        alignSelf: 'center',
        top: '20%',
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
        marginTop: 30,
        alignSelf: 'center',
    },
    setor: {
        color: "#000",
        fontSize: 16,
        marginTop: 10,
        marginLeft: 50,
    },
    setorTxt: {
        color: "#000",
        fontSize: 16,
        marginTop: 10,
        fontWeight: "bold",
    },
    cargo: {
        color: "#000",
        fontSize: 16,
        marginTop: 10,
        marginLeft: 50,
    },
    cargoTxt: {
        color: "#000",
        fontSize: 16,
        marginTop: 10,
        fontWeight: "bold",
    },
    dados: {
        marginTop: 10,
        marginLeft: 50,
    },
    dadosTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    dadosTxt: {
        fontSize: 16,

    },
    tempo: {
        marginTop: 10,
        marginLeft: 50,
    },
    observacao: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
    },
    observacaoContainer: {
        flex: 1,
        marginTop: 10,
        backgroundColor: "#F6F3CF",
        padding: 15,
        borderRadius: 25,
    },
    observacaoTxt: {
        fontSize: 32,

    },
    advertencias: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 20,
    },
    advertenciasContainer: {
        flex: 1,
        marginTop: 10,
        backgroundColor: "#F6F3CF",
        padding: 15,
        borderRadius: 25,
    },
    advertenciasTxt: {
        fontSize: 32,

    },
    image: {
        width: 70,
        height: 70,
        top: 5,
        left: 5,

    },
    image2: {
        width: 66,
        height: 66,
    },
    img2Container: {
        top: 5,
        right: 5,
        position: 'absolute',
        backgroundColor: '#080061',
        borderRadius: 10,
        padding: 2,
    },
    row: {
        flexDirection: 'row',
    }


});

export default Curriculo;
