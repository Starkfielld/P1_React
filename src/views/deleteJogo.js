import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import { styles } from "../../assets/css/css";
import { EnterButton } from '../buttons/buttons';
import axios from 'axios';
import { IP, PORT } from '@env';

export default function DeleteGame() {
    const [game, setgame] = useState([]);
    const [plataforma, setplataforma] = useState(''); 

    useEffect(() => {
        getgame();
    }, []);

    async function getgame() {
        await axios.get(`http://${IP}:${PORT}/Game`)
        .then(res => {
            const data = res.data.map(Game => {
                return {
                    name: Game.name,
                    plataforma: Game.plataforma,
                    ano: Game.ano,
                    id: Game._id
                }
            });
            setgame(data);
        })
        .catch(err => {
            console.log(err);
            Alert.alert("Erro", "Falha ao carregar os jogos");
        });
    }

    async function handleDeleteGame() {
        const GameToDelete = game.find(Game => Game.plataforma.toLowerCase() === plataforma.toLowerCase());

        if (GameToDelete) {
            await axios.delete(`http://${IP}:${PORT}/Game/${GameToDelete.id}`)
            .then(res => {
                console.log(res.data);
                Alert.alert('Sucesso', 'jogos deletado com sucesso');
                setgame(game.filter(Game => Game.id !== GameToDelete.id));  // Atualiza a lista local de jogoss
            })
            .catch(err => {
                console.log(err);
                Alert.alert('Erro', 'Erro ao deletar jogos');
            });
        } else {
            Alert.alert('Não Encontrado', 'jogo não encontrado');
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.container_login2}>
                <TextInput 
                    style={styles.login_input}
                    placeholder="plataforma"
                    value={plataforma}
                    onChangeText={setplataforma}
                    autoCapitalize="none"
                />
                <EnterButton title="Deletar jogos" value='Deletar' style={styles.margin_button} onPress={handleDeleteGame}/>
            </View>
        </View>
    );
}