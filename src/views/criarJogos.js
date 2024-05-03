import React, {useState} from "react";
import { View, TextInput } from "react-native";
import { styles } from "../../assets/css/css";
import { EnterButton } from '../buttons/buttons';
import axios from 'axios';
import { IP, PORT } from '@env';

export default function CreatesetGame() {
    const [name, setName] = useState('');
    const [plataforma, setplataforma] = useState('');
    const [ano, setAno] = useState('');
    async function handleCreateGame() {
        const data = {
            name: name,
            plataforma: plataforma,
            ano: ano,
        }
        await axios.post(`http://${IP}:${PORT}/game`, data)
        .then(res => {
            console.log(res.data);
            alert('Jogo criado com sucesso')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.container_login2}>
                <TextInput 
                    style={styles.login_input}
                    placeholder="name"
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="none"
                />
                <TextInput 
                    style={styles.login_input}
                    placeholder="plataforma"
                    value={plataforma}
                    onChangeText={setplataforma}
                    autoCapitalize="none"
                />
                <TextInput 
                    style={styles.login_input}
                    placeholder="Ano"
                    value={ano}
                    onChangeText={setAno}
                    autoCapitalize="none"
                />
                <EnterButton title="Criar Jogo" value='Entrar' style={styles.margin_button}  onPress={handleCreateGame}/>
            </View>
        </View>
    );
}