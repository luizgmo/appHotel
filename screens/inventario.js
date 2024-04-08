import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, Text, Image } from 'react-native';

const Inventario = ({ navigation }) => {
    const [selectedProductIndex, setSelectedProductIndex] = useState(null);
    const [selectedInventoryType, setSelectedInventoryType] = useState('revenda'); 

    const produtosRevenda = [
        { nome: 'Feno', descricao: 'FenoFenoFenoFenoFenoFenoFeno', imagem: require("../assets/feno.png") },
        { nome: 'Cerveja', descricao: 'CervejaCervejaCervejaCervejaCerveja', imagem: require("../assets/cerveja.png") },
        { nome: 'Parafuso', descricao: 'ParafusoParafusoParafusoParafusoParafusoParafusoParafusoParafusoParafusoParafuso', imagem: require("../assets/parafuso.png") },
    ];

    const produtosCusto = [
        { nome: 'Ração', descricao: 'RaçãoRaçãoRaçãoRaçãoRação', imagem: require("../assets/racao.png") },
        { nome: 'Peixe', descricao: 'PeixePeixePeixePeixePeixePeixe', imagem: require("../assets/peixe.png") },
        { nome: 'Repelente', descricao: 'RepelenteRepelenteRepelenteRepelente', imagem: require("../assets/repelente.png") },
    ];

    const produtosUtensilios = [
        { nome: 'Prego', descricao: 'PregoPregoPregoPregoPrego', imagem: require("../assets/prego.png") },
        { nome: 'Soro', descricao: 'SoroSoroSoroSoroSoro', imagem: require("../assets/soro.png") },
        { nome: 'Produto de Limpeza', descricao: 'Produto de LimpezaProduto de LimpezaProduto de Limpeza', imagem: require("../assets/limpeza.png") },
    ];

    const handleProductPress = (index) => {
        setSelectedProductIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedProductIndex(null);
    };

    const handleSelectInventoryType = (type) => {
        setSelectedInventoryType(type);
        setSelectedProductIndex(null);
    };

    const getProdutosByType = () => {
        switch (selectedInventoryType) {
            case 'revenda':
                return produtosRevenda;
            case 'custo':
                return produtosCusto;
            case 'utensilios':
                return produtosUtensilios;
            default:
                return [];
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.backgroundImageContainer}>
                <Image source={require("../assets/logohotelestancia.png")} style={styles.backgroundImage} />
            </View>

            <View style={styles.userPersonContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                    <Image source={require("../assets/arrow3.png")} style={styles.arrowImg} />
                </TouchableOpacity>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity
                    style={[styles.menuItem, selectedInventoryType === 'revenda' && styles.selectedMenuItem]}
                    onPress={() => handleSelectInventoryType('revenda')}
                >
                    <Text style={styles.menuText}>Revenda</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, selectedInventoryType === 'custo' && styles.selectedMenuItem]}
                    onPress={() => handleSelectInventoryType('custo')}
                >
                    <Text style={styles.menuText}>Custo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, selectedInventoryType === 'utensilios' && styles.selectedMenuItem]}
                    onPress={() => handleSelectInventoryType('utensilios')}
                >
                    <Text style={styles.menuText}>Utensílios</Text>
                </TouchableOpacity>
            </View>

            {[...Array(7)].map((_, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {[...Array(5)].map((_, colIndex) => {
                        const productIndex = rowIndex * 5 + colIndex;
                        const produtos = getProdutosByType();
                        const product = produtos[productIndex];
                        return (
                            <TouchableOpacity
                                key={colIndex}
                                style={styles.cell}
                                onPress={() => handleProductPress(productIndex)}
                            >
                                <Image source={product?.imagem} style={styles.productImage} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            ))}

            <Modal visible={selectedProductIndex !== null} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            {getProdutosByType()[selectedProductIndex]?.nome || 'Produto não encontrado'}
                        </Text>
                        <Text>
                            {getProdutosByType()[selectedProductIndex]?.descricao || 'Descrição não encontrada'}
                        </Text>
                        <TouchableOpacity onPress={handleCloseModal}>
                            <Text style={styles.closeButton}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
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
    menu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
    },
    menuItem: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ACACAC',
    },
    menuText: {
        fontSize: 16,
    },
    selectedMenuItem: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    cell: {
        width: 60,
        height: 60,
        backgroundColor: 'lightgray',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productName: {
        fontWeight: 'bold',
    },
    productImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        width: '90%',
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        color: 'blue',
        marginTop: 10,
    },
});

export default Inventario;
