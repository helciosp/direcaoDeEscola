import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PagNota from '../../pages/PagNota';
import UpdateAluno from '../../pages/UpdateAluno';
import UpdateNotas from '../../pages/UpdateNotas';
import Gaveta from '../Gaveta';
import Icon from 'react-native-vector-icons/Octicons'
import { header } from '../../options/index';
import { DrawerActions } from '@react-navigation/native';

const Stack = createStackNavigator();

export default class Pilhas extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"Gaveta"} component={Gaveta}
                        options={({ navigation }) => ({
                            title: 'Direção de Escola',
                            headerStyle: { backgroundColor: 'red' },
                            headerTitleStyle: { color: 'white' },
                            headerLeft: () => 
                            <Icon style={{ marginLeft: 10 }} name='three-bars' color='white'
                            size={30} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />,
                                 
                        })}
                    />
                    <Stack.Screen name='PagNota' component={PagNota} options={header.cadasNs} />
                    <Stack.Screen name='UpdateAluno' component={UpdateAluno} options={header.atuaAls} />
                    <Stack.Screen name='UpdateNotas' component={UpdateNotas} options={header.atuaNs} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}