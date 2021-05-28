import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons'
import { DrawerActions } from '@react-navigation/native';

export default class InconDrawer extends Component {
    render() {
        return (
            <Icon style={{ marginLeft: 10 }} name='three-bars' size={30} color='white'
                onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />     
        )
    }
}
