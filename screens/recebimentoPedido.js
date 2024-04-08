import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, TextInput, Alert, Modal, Button } from "react-native";

const RecebimentoPedido = ({ navigation, route }) => {


    const { item } = route.params;

    const [chegada, setChegada] = useState("");
    const [contagemRecebimento, setContagemRecebimento] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [motivo, setMotivo] = useState("");

    const [modalVisible, setModalVisible] = useState(false);

    const handleReceberPress = () => {
        Alert.alert(
            "Informações Recebidas",
            `Chegada: ${chegada}\nContagem: ${contagemRecebimento}\nObservações: ${observacoes}`,
            [
                { text: "OK", onPress: () => navigation.navigate("Pedidos") }
            ]
        );
    }

    const handleRecusarPress = () => {
        setModalVisible(true);
    }

    const handleEnviarMotivo = () => {
        setModalVisible(false);
        Alert.alert(
            "Motivo Enviado",
            `Motivo: ${motivo}`,
            [
                { text: "OK", onPress: () => navigation.navigate("Pedidos") }
            ]
        );
    }


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
                <View style={styles.rowBaixo}>
                    <View style={styles.rowItem}>
                        <Text style={styles.rowTxt}>Data e hora da chegada:</Text>
                        <TextInput
                            style={styles.input}
                            value={chegada}
                            onChangeText={text => setChegada(text)}
                            placeholder="Data e hora"
                        />
                    </View>
                    <View style={styles.rowItem}>
                        <Text style={styles.rowTxt}>Contagem de recebimento:</Text>
                        <TextInput
                            style={styles.input}
                            value={contagemRecebimento}
                            onChangeText={text => setContagemRecebimento(text)}
                            placeholder="Contagem "
                        />
                    </View>
                </View>
                <View style={styles.rowBaixo}>
                    <View style={styles.rowItem}>
                        <Text style={styles.rowTxt}>Documentos em anexo:</Text>
                        <Text style={styles.rowDesc}>anexar documento</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text style={styles.rowTxt}>Observações recebedor:</Text>
                        <TextInput
                            style={styles.input}
                            value={observacoes}
                            onChangeText={text => setObservacoes(text)}
                            placeholder="Observações"
                        />
                    </View>
                </View>
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Motivo:</Text>
                        <TextInput
                            style={styles.inputModal}
                            value={motivo}
                            onChangeText={text => setMotivo(text)}
                            placeholder="Motivo da recusa"
                        />
                        <View style={styles.modalButtons}>
                            <Button
                                title="Cancelar"
                                onPress={() => setModalVisible(false)}
                            />
                            <View style={{ width: 10 }} />
                            <Button
                                title="Enviar"
                                onPress={handleEnviarMotivo}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.rowBtn}>
                <TouchableOpacity onPress={handleRecusarPress}>
                    <View style={styles.btnRecusar}>
                        <Text style={styles.btnTxt}>RECUSAR</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleReceberPress}>
                    <View style={styles.btnReceber}>
                        <Text style={styles.btnTxt}>RECEBER</Text>
                    </View>
                </TouchableOpacity>
            </View>



        </ScrollView >
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
    arrowContainer: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userPersonContainer: {
        width: 70,
        height: 70,
        marginTop: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowImg: {
        width: 70,
        height: 70,
    },
    backgroundImage: {
        flex: 1,
        width: 400,
        height: 400,
        alignSelf: "center",
        marginTop: 50,
        opacity: 0.3,
    },
    pedidoInfo: {
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
    },
    row: {
        flexDirection: 'row',
    },
    rowBaixo: {
        flexDirection: 'row',
        marginTop: 20,

    },
    rowItem: {
        width: '50%',
        alignItems: 'center',
    },
    rowTxt: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    itemTxt: {
        fontSize: 20,
    },
    itemDesc: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemImg: {
        width: 150,
        height: 150,
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
    btnReceber: {
        backgroundColor: '#00C850',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btnRecusar: {
        backgroundColor: 'red',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btnTxt: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    rowBtn: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-evenly',
    },
    input: {
        borderWidth: 1,
        width: '90%',
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 5,
    },
    fileInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 5,
        backgroundColor: 'lightgray',
    },
    fileInputText: {
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
    },
    inputModal: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
        width: 200
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    

});

export default RecebimentoPedido;