
import React, { useState, useEffect } from "react";
import { View, TextInput, Alert } from "react-native";
import { styles } from "../../assets/css/css";
import { EnterButton } from '../buttons/buttons';
import axios from 'axios';
import { IP, PORT } from '@env';

export default function Updategame() {
    const [games, setgames] = useState([]);
    const [plataforma, setplataforma] = useState('');
    const [name, setname] = useState('');
    const [ano, setAno] = useState('');
    const [gameToUpdate, setgameToUpdate] = useState(null);


    useEffect(() => {
        getgames();
    }, []);

    async function getgames() {
        await axios.get(`http://${IP}:${PORT}/game`)
        .then(res => {
            setgames(res.data.map(game => ({
                name: game.name,
                plataforma: game.plataforma,
                ano: game.ano,
                id: game._id
            })));
        })
        .catch(err => {
            console.log(err);
            Alert.alert("Erro", "Falha ao carregar jogo");
        });
    }

    function handleUpdategame() {
        const foundgame = games.find(game => game.plataforma.toLowerCase() === plataforma.toLowerCase());
        if (foundgame) {
            setgameToUpdate(foundgame);
            setname(foundgame.name);
            setplataforma(foundgame.plataforma);
            setAno(foundgame.ano.toString());
        } else {
            Alert.alert('Não Encontrado', 'jogo não encontrado');
            setgameToUpdate(null);
        }
    }
    
    async function submitUpdate() {
        if (gameToUpdate) {
            const updatedData = {
                name: name,
                plataforma: plataforma,
                ano: ano
            };
    
            await axios.put(`http://${IP}:${PORT}/game/${gameToUpdate.id}/${gameToUpdate}`, updatedData)
            .then(() => {
                Alert.alert('Sucesso', 'Dados do jogo atualizados com sucesso');
                getgames();
            })
            .catch(err => {
                console.log(err);
                Alert.alert('Erro', 'Erro ao atualizar dados do jogo');
            });
        
            setgameToUpdate(null); 
        }
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.container_login2}>
                <TextInput
                    style={styles.login_input}
                    placeholder="Digite o plataforma para encontrar"
                    value={plataforma}
                    onChangeText={setplataforma}
                    autoCapitalize="none"
                />
                <EnterButton title="Encontrar jogo" value= 'Encontrar'onPress={handleUpdategame} />
                {gameToUpdate && (
                    <>
                        <TextInput
                            style={styles.login_input}
                            placeholder="name"
                            value={name}
                            onChangeText={setname}
                        />
                        <TextInput
                            style={styles.login_input}
                            placeholder="plataforma"
                            value={plataforma}
                            onChangeText={setplataforma}
                        />
                        <TextInput
                            style={styles.login_input}
                            placeholder="Ano"
                            value={ano}
                            onChangeText={setAno}
                            keyboardType="numeric"
                        />
                        <EnterButton title="Atualizar jogo" value='Atualizar' onPress={submitUpdate} />
                    </>
                )}
            </View>
        </View>
    );
    
}
