import React from "react";
import { View  } from "react-native";
import { styles } from "../../assets/css/css";
import { SquareButton } from "../buttons/buttons";
import axios from 'axios';
import { IP, PORT } from '@env';

export default function CrudWindow({navigation: { navigate }}) {
    async function handleReadGame() {
        await axios.get(`http://${IP}:${PORT}/game`)
        .then(res => {
            console.log(res.data)
            const data = res.data.map(game => {
                return {
                    name: game.name,
                    plataforma: game.plataforma,
                    ano: game.ano
                }
            })
            navigate('Buscar jogo', data)
        })
        .catch(err => {
            console.log(err)
        })
    }
     
    return (
        <View style={styles.container}>
            <View style={styles.container_squares}>
                <SquareButton text={ 'Criar Game'} style={styles.squares} onPress={() => navigate('Criar jogo')}/>
                <SquareButton text={ 'Todos os Games'} style={styles.squares} onPress={handleReadGame}/>
            </View>
            <View style={styles.container_squares}>
                <SquareButton text={ 'Atualizar Game'} style={styles.squares} onPress={() => navigate('atualizar jogo')}/>
                <SquareButton text={ 'Deletar Game'} style={styles.squares} onPress={() => navigate('Deletar jogo')}/>
            </View>
        </View>      
    );
}