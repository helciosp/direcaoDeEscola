import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PagAluno from '../../pages/PagAluno';
import ListAluno from '../../pages/ListAluno';
import ListNota from '../../pages/ListNota';
import Icon from 'react-native-vector-icons/Octicons';

const Drawer = createDrawerNavigator();

export default class Gaveta extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName={"ListaAluno"} options={({ navigation }) => { metodo = { navigation } }} drawerStyle={{ backgroundColor: "#adadad" }}>
        <Drawer.Screen name="ListAluno" component={ListAluno} options={{ title: 'Lista de Alunos' }} />
        <Drawer.Screen name='PagAluno' component={PagAluno} options={{ title: 'Cadastrar alunos' }} />
        <Drawer.Screen name='ListNota' component={ListNota} options={{ title: 'Lista de notas' }} />
      </Drawer.Navigator>
    )
  }
}