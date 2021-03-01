import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Mensagem from './src/pages/Mensagens';
import PagAluno from './src/pages/PagAluno';
import ListAluno from './src/pages/ListAluno';
import PagNota from './src/pages/PagNota';
import ListNota from './src/pages/ListNota';
import UpdateAluno from './src/pages/UpdateAluno';
import UpdateNotas from './src/pages/UpdateNotas';
import { listenOrientationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();
const Tap = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"direcao"} component={direcao} options={{ title: 'Direção de Escola' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
class direcao extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName={"Mensagem"} drawerStyle={{ backgroundColor: "#adadad" }}>
        <Drawer.Screen name='Mensagem' component={Mensagem} options={{ title: 'Inicio' }} />
        <Drawer.Screen name='PagAluno' component={PagAluno} options={{ title: 'Cadastrar alunos' }} />
        <Drawer.Screen name="partAluno" component={partAluno} options={{ title: "Alunos" }} />      
        <Drawer.Screen name="partNota" component={partNota} options={{ title: 'Notas' }} />
      </Drawer.Navigator>
    )
  }
}
class partAluno extends Component {
  render() {
    return (
      <Tap.Navigator initialRouteName = {"ListAluno"}>
        <Tap.Screen name = "ListAluno" component = {ListAluno} options={{ title: 'Lista de Alunos' }}/>
        <Tap.Screen name='PagNota' initialParams={{idAluno: "NÃO SELECIONADO", nomeAluno: "****" }} component={PagNota} options={{ title: 'Cadastrar notas' }} />
        <Tap.Screen name='UpdateAluno' initialParams={{idAluno: "NÃO SELECIONADO" }} component={UpdateAluno} options={{ title: 'Atualizar Alunos' }} />
      </Tap.Navigator>
    )
  }
}
class partNota extends Component {
  render() {
    return(
      <Tap.Navigator initialRouteName = {"ListaNota"}>
        <Tap.Screen name='ListNota' component={ListNota} options={{ title: 'Lista de notas' }} />  
        <Tap.Screen name='UpdateNotas' initialParams={{idNotas: "NÃO SELECIONADO", nomeAluno: "****" }} component={UpdateNotas} options={{ title: 'Atualizar Notas' }} />
      </Tap.Navigator>
    )
  }
}
