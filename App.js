import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, login, esquecerSenha, registrar, crud, criarJogos, buscaJogos, atualizaJogos, deleteJogo} from './src/views/index';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="registrar" component={registrar} />
        <Stack.Screen name="esqueceu a Senha" component={esquecerSenha} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Crud" component={crud} />
        <Stack.Screen name="Criar jogo" component={criarJogos} />
        <Stack.Screen name="Buscar jogo" component={buscaJogos} />
        <Stack.Screen name="atualizar jogo" component={atualizaJogos} />
        <Stack.Screen name="Deletar jogo" component={deleteJogo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}