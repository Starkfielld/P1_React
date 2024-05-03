import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../../assets/css/css";

export default function ReadGame(props) {
    const game = props.route.params;

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container_login2}>
                    {game.map((game, index) => (
                        <View key={index} style={styles.gameContainer}>
                            <Text style={styles.textgameContainer}>Marca: {game.name}</Text>
                            <Text style={styles.textgameContainer}>Modelo: {game.plataforma}</Text>
                            <Text style={styles.textgameContainer}>Ano: {game.ano}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}