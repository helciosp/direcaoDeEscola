import React, { Component } from 'react';
import { Button, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Mensagem from './src/pages/Mensagens';
import PagAluno from './src/pages/PagAluno';
import ListAluno from './src/pages/ListAluno';
import PagNota from './src/pages/PagNota';
import ListNota from './src/pages/ListNota';
import UpdateAluno from './src/pages/UpdateAluno';
import UpdateNotas from './src/pages/UpdateNotas';
import Icon from 'react-native-vector-icons/Octicons'
import { listenOrientationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();
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
          <Stack.Screen name={"direcao"} component={direcao}
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
class InconDrawer extends Component {
  render() {
    return (
      <Icon style={{ marginLeft: 10 }} name='three-bars' size={30} color='white'
        onPress={() => this.props.navigationDrawer.openDrawer()}
      />
    )
  }
}
class direcao extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName={"Mensagem"} drawerStyle={{ backgroundColor: "#adadad" }}>
        <Drawer.Screen name='Mensagem' component={Mensagem} options={{ title: 'Inicio' }} />
        <Drawer.Screen name='PagAluno' component={PagAluno} options={{ title: 'Cadastrar alunos' }} />
        <Drawer.Screen name="ListAluno" component={ListAluno} options={{ title: 'Lista de Alunos' }} />
        <Drawer.Screen name='ListNota' component={ListNota} options={{ title: 'Lista de notas' }} />
      </Drawer.Navigator>
    )
  }
}
