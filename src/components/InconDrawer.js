import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons'



export default class InconDrawer extends Component {
    render() {
        return (
            <Icon style={{ marginLeft: 10 }} name='three-bars' size={30} color='white'
                onPress={() => this.props.navigationDrawer.openDrawer()}
            />
        )
    }
}
