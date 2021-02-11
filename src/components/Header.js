import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { header } from "../styles/index.js";
import Icon from 'react-native-vector-icons/Octicons'

export default class Header extends Component {
  
  render() {
    return (
      <View style={header.preenchimento}>
        <View style={header.conteine}>
          <Icon name='three-bars' size={30} color='white' onPress={() => this.props.metodo.openDrawer()} hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}/>
          <Text style={header.title}>Direção de Escola</Text>
          <Image style={header.img} source={require('../img/logo.png')}></Image>
        </View>
      </View>
    );
  }
}
