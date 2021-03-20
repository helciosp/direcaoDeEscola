import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PagNota from '../../pages/PagNota';
import UpdateAluno from '../../pages/UpdateAluno';
import UpdateNotas from '../../pages/UpdateNotas';
import Gaveta from '../Gaveta';
import InconDrawer from '../../components/InconDrawer'

const Stack = createStackNavigator();

export default class Pilhas extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"direcao"} component={Gaveta}
            options={({ navigation }) => ({
              title: 'Direção de Escola',
              headerStyle: { backgroundColor: 'red' },
              headerTitleStyle: { color: 'white' },
              headerLeft: () => <InconDrawer navigationDrawer={navigation} />
            })}
          />
          <Stack.Screen name='PagNota' initialParams={{ idAluno: "NÃO SELECIONADO", nomeAluno: "****" }} component={PagNota} options={{ title: 'Cadastrar notas', headerStyle: { backgroundColor: 'red' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
          <Stack.Screen name='UpdateAluno' initialParams={{ idAluno: "NÃO SELECIONADO" }} component={UpdateAluno} options={{ title: 'Atualizar Alunos', headerStyle: { backgroundColor: 'red' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
          <Stack.Screen name='UpdateNotas' initialParams={{ idNotas: "NÃO SELECIONADO", nomeAluno: "****" }} component={UpdateNotas} options={{ title: 'Atualizar Notas', headerStyle: { backgroundColor: 'red' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}