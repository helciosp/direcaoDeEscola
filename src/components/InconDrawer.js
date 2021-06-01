import React, { Component } from 'react';
import { PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons'
import { DrawerActions } from '@react-navigation/native';

export default class InconDrawer extends Component {
    render() {
        return (
            <Icon style={{ marginLeft: 20 }} name='three-bars' size={(20 * PixelRatio.get())} color='white'
                onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />     
        )
    }
}
