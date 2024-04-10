import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, Modal, TouchableOpacity, FlatList, TextInput, Alert } from "react-native";

const Requisicao = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [quantidades, setQuantidades] = useState({});
    const [pedidoAtual, setPedidoAtual] = useState([]);
    const [requisicoesAnteriores, setRequisicoesAnteriores] = useState([]);
    const [observacoes, setObservacoes] = useState({});
    const [checkboxStates, setCheckboxStates] = useState({});


    const pedidosData = [
        { key: '1', item: 'Peixe', quantidade: 'Kg', origem: 'Restaurante', logo: require("../assets/peixe.png") },
        { key: '2', item: 'Cerveja', quantidade: 'L', origem: 'Restaurante', logo: require("../assets/cerveja.png") },
        { key: '3', item: 'Repelente', quantidade: 'Un', origem: 'Fazenda', logo: require("../assets/repelente.png") },
        { key: '4', item: 'Ração', quantidade: 'Kg', origem: 'Fazenda', logo: require("../assets/racao.png") },
    ];

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setQuantidades({});
    };

    const incrementQuantidade = (itemKey) => {
        setQuantidades(prevState => ({
            ...prevState,
            [itemKey]: (prevState[itemKey] || 0) + 1
        }));
    };

    const handleExcluir = (index) => {
        const novoPedido = [...pedidoAtual];
        const item = novoPedido[index];
        setCheckboxStates(prevState => {
            const newState = { ...prevState };
            delete newState[item.key];
            return newState;
        });
        novoPedido.splice(index, 1);
        setPedidoAtual(novoPedido);
        setObservacoes(prevState => {
            const newState = { ...prevState };
            delete newState[item.key];
            return newState;
        });
    };

    const handlePedir = (index) => {
        const novoPedido = [...pedidoAtual];
        const itemPedido = novoPedido.splice(index, 1)[0];
        setRequisicoesAnteriores([...requisicoesAnteriores, itemPedido]);
        setPedidoAtual(novoPedido);
        setObservacoes(prevState => {
            const newState = { ...prevState };
            delete newState[itemPedido.key];
            return newState;
        });
    
        const mensagemAlerta = `Produto: ${itemPedido.item}\nQuantidade: ${itemPedido.quantidadeSelecionada} ${itemPedido.quantidade}\nObservações: ${observacoes[itemPedido.key] || 'Nenhuma'}\nUrgente: ${checkboxStates[itemPedido.key] ? 'Sim' : 'Não'}`;
    
        Alert.alert("Pedido Realizado", mensagemAlerta);
    };

    const decrementQuantidade = (itemKey) => {
        setQuantidades(prevState => {
            const updatedQuantidade = (prevState[itemKey] || 0) - 1;
            return {
                ...prevState,
                [itemKey]: updatedQuantidade < 0 ? 0 : updatedQuantidade
            };
        });
    };

    const handlePedido = () => {
        const novoPedido = pedidosData.map(item => {
            const quantidadeExistente = pedidoAtual.find(pedido => pedido.key === item.key)?.quantidadeSelecionada || 0;
            return {
                ...item,
                quantidadeSelecionada: (quantidades[item.key] || 0) + quantidadeExistente
            };
        }).filter(item => item.quantidadeSelecionada > 0);

        setCheckboxStates({});

        setPedidoAtual(novoPedido);
        closeModal();
    };

    const handleObservacaoChange = (itemKey, text) => {
        setObservacoes(prevState => ({
            ...prevState,
            [itemKey]: text
        }));
    };

    const toggleCheckbox = (itemKey) => {
        setCheckboxStates(prevState => {
            const newState = {
                ...prevState,
                [itemKey]: !prevState[itemKey]
            };
            return newState;
        });
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
                <View style={styles.incluirTitle}>
                    <Text style={styles.manualTitle}>O que está faltando?</Text>
                </View>

                <TouchableOpacity style={styles.incluirManual} onPress={openModal}>
                    <Text style={styles.manualTxt}>Incluir produto</Text>
                </TouchableOpacity>

                <View style={styles.painel}>
                    {pedidoAtual.length === 0 ? (
                        <Text style={styles.emptyMessage}>Nenhum item foi selecionado</Text>
                    ) : (
                        pedidoAtual.map((item, index) => (
                            <View key={index} style={styles.itemPedido}>
                                <View style={styles.itemInfo}>
                                    <Image source={item.logo} style={styles.itemLogo} />
                                    <View>
                                        <Text style={styles.itemName}>Produto: {item.item}</Text>
                                        <Text style={styles.itemQuantidade}>Quantidade: {item.quantidadeSelecionada} {item.quantidade}</Text>
                                        <View style={styles.observationContainer}>
                                            <View style={styles.observationInputContainer}>
                                                <TextInput
                                                    style={styles.observationInput}
                                                    placeholder="Observações"
                                                    multiline={true}
                                                    onChangeText={(text) => handleObservacaoChange(item.key, text)}
                                                    value={observacoes[item.key] || ''}
                                                />
                                            </View>

                                            <View style={styles.checkboxContainer}>
                                                <Text style={styles.checkboxLabel}>Urgente:</Text>
                                                <TouchableOpacity
                                                    onPress={() => toggleCheckbox(item.key)}
                                                    style={[styles.checkbox, checkboxStates[item.key] ? styles.checked : null]}
                                                >
                                                    {checkboxStates[item.key] ? (
                                                        <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
                                                    ) : null}
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>
                                </View>

                                <View style={styles.buttonsContainer}>
                                    <TouchableOpacity style={styles.excluirButton} onPress={() => handleExcluir(index)}>
                                        <Text style={styles.buttonText}>Excluir</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.pedirButton} onPress={() => handlePedir(index)}>
                                        <Text style={styles.buttonText}>Pedir</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    )}
                </View>



                <View style={styles.reqAnteriores}>
                    <Text style={styles.reqTxt}>Requisições Anteriores</Text>
                    <View style={styles.anteriores}>
                        {requisicoesAnteriores.length === 0 ? (
                            <Text style={styles.emptyMessage}>Nenhuma requisição anterior</Text>
                        ) : (
                            requisicoesAnteriores.map((item, index) => (
                                <View key={index} style={styles.itemPedido}>
                                    <View style={styles.itemInfo}>
                                        <Image source={item.logo} style={styles.itemLogo} />
                                        <View>
                                            <Text style={styles.itemName}>Produto: {item.item}</Text>
                                            <Text style={styles.itemQuantidade}>Quantidade: {item.quantidadeSelecionada} {item.quantidade}</Text>
                                            <Text style={styles.status}>Status: Aguardando</Text>
                                            <Text style={styles.date}>Data: {new Date().toLocaleDateString()}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        )}
                    </View>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Selecione as quantidades:</Text>
                        <FlatList
                            data={pedidosData}
                            renderItem={({ item }) => (
                                <View style={styles.modalItem}>
                                    <View style={styles.itemContainer}>
                                        <Text>{item.item}</Text>
                                    </View>
                                    <View style={styles.quantidadeButtons}>
                                        <TouchableOpacity onPress={() => decrementQuantidade(item.key)} style={styles.button}>
                                            <Text style={styles.buttonText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.quantidade}>{quantidades[item.key] || 0}</Text>
                                        <TouchableOpacity onPress={() => incrementQuantidade(item.key)} style={styles.button}>
                                            <Text style={styles.buttonText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            keyExtractor={item => item.key}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.pedidoButton} onPress={handlePedido}>
                                <Text style={styles.buttonText}>Pedir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
    incluirTitle: {
        borderRadius: 30,
        marginTop: 30,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    manualTxt: {
        color: "#b4b4b4",
        fontSize: 20,
    },
    manualTitle: {
        color: "black",
        fontSize: 26,
    },
    painel: {
        backgroundColor: "lightgreen",
        borderWidth: 5,
        borderColor: "darkgreen",
        margin: 20,
        padding: 10,
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    itemPedido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'darkgreen',
        padding: 5,
        margin: 5,
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemLogo: {
        width: 70,
        height: 70,
        marginRight: 10,
    },
    buttonsContainer: {
        flexDirection: 'column',
    },
    excluirButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
        marginRight: 5,
        marginBottom: 5,
    },
    pedirButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 20,
        marginRight: 5,
    },
    itemName: {
        fontSize: 14,
    },
    itemQuantidade: {
        fontSize: 14,
    },
    statusTxt: {
        fontSize: 14,
    },
    dateTxt: {
        fontSize: 14,
    },
    observationContainer: {
        alignItems: 'center',
        marginTop: 5,
    },
    observationInputContainer: {
        flex: 1,
        marginRight: 10,
    },
    observationInput: {
        width: 150,
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    checkboxContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginRight: 5,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'darkgreen',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    checked: {
        backgroundColor: 'green',
    },
    checkmark: {
        width: 16,
        height: 16,
    },


    anteriores: {
        backgroundColor: "lightgrey",
        borderWidth: 5,
        borderColor: "darkgreen",
        margin: 20,
        padding: 10,
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    reqAnteriores: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center',

    },
    reqTxt: {
        color: "black",
        fontSize: 20,
        marginBottom: 10,
    },
    itemReq: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'darkgreen',
        padding: 20,
        margin: 5,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
        marginBottom: 80,
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 20,
    },
    modalItem: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    pedidoButton: {
        width: 140,
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    cancelButton: {
        width: 140,
        backgroundColor: 'red',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    quantidadeButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantidade: {
        paddingHorizontal: 10,
    },
    quantidadeButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemContainer: {
        padding: 20,
    },
    quantidadeButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
    },
    emptyMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 20,
    },




});

export default Requisicao;
