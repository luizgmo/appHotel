import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Image } from "react-native";

const Escala = ({ navigation }) => {
    const [diasDoMes, setDiasDoMes] = useState(Array.from({ length: 30 }, (_, index) => index + 1));

    const handleDiaPress = (dia) => {
        alert(`Você clicou no dia ${dia}`);
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

            <View style={styles.mesTxt}>
                <Text style={styles.mesTxt}>ABRIL 2024</Text>
            </View>
            <View style={styles.calendario}>
                {diasDoMes.map((dia) => (
                    <TouchableOpacity key={dia} onPress={() => handleDiaPress(dia)}>
                        <View style={styles.quadradoDia}>
                            <Text style={styles.textoDia}>{dia}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
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
    calendario: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: 20,
        padding: 10,
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
    quadradoDia: {
        width: 50,
        height: 50,
        backgroundColor: "#DDDDDD",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 5,
    },
    textoDia: {
        fontSize: 16,
        fontWeight: "bold",
    },
    mesTxt: {
        fontSize: 26,
        alignSelf: "center",
        marginTop: 50,
    }
});

export default Escala;
