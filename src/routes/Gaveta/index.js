import React, { Component } from 'react';
import { Dimensions } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import PagAluno from '../../pages/PagAluno';
import ListAluno from '../../pages/ListAluno';
import ListNota from '../../pages/ListNota';

const Drawer = createDrawerNavigator();
var width = Dimensions.get("window").width;
const isLargeScreen = width >= 768;

export default class Gaveta extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName={"ListaAluno"} 
      drawerStyle={ isLargeScreen ? {backgroundColor: "#adadad" } : { width: '100%', backgroundColor: "#adadad"  }} 
      drawerType='back' edgeWidth={width / 3} keyboardDismissMode={'on-drag'}>
        <Drawer.Screen name="ListAluno" component={ListAluno} options={{ title: 'Lista de Alunos' }} />
        <Drawer.Screen name='PagAluno' component={PagAluno} options={{ title: 'Cadastrar alunos' }} />
        <Drawer.Screen name='ListNota' component={ListNota} options={{ title: 'Lista de notas' }} />
      </Drawer.Navigator>
    )
  }
}