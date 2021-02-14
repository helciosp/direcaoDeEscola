import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mensagem from './src/pages/Mensagens';
import PagAluno from './src/pages/PagAluno';
import ListAluno from './src/pages/ListAluno';
import PagNota from './src/pages/PagNota';
import ListNota from './src/pages/ListNota';
import UpdateAluno from './src/pages/UpdateAluno';
import UpdateNotas from './src/pages/UpdateNotas';
import { listenOrientationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';
const Drawer = createDrawerNavigator();

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
        <Drawer.Navigator initialRouteName={"Mensagem"} drawerStyle={{ backgroundColor: "#adadad" }}>
          <Drawer.Screen name='Mensagem' component={Mensagem} options={{ title: 'Inicio' }} />
          <Drawer.Screen name='PagAluno' component={PagAluno} options={{ title: 'Cadastrar alunos' }} />
          <Drawer.Screen name='ListAluno' component={ListAluno} options={{ title: 'Lista de Alunos' }} />
          <Drawer.Screen name='PagNota' component={PagNota} options={{ title: 'Cadastrar notas' }} />
          <Drawer.Screen name='ListNota' component={ListNota} options={{ title: 'Lista de notas' }} />  
          <Drawer.Screen name='UpdateAluno' component={UpdateAluno} options={{ title: 'Atualizar Alunos' }} />
          <Drawer.Screen name='UpdateNotas' component={UpdateNotas} options={{ title: 'Atualizar Notas' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
