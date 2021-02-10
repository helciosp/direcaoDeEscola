import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { header } from "../styles/index.js";

export default class Header extends Component {
  render() {
    return (
      <View style={header.preenchimento}>
        <View style={header.conteine}>
          <Text style={header.title}>Direção de Escola</Text>
          <Image style={header.img} source={require('../img/logo.png')}></Image>
        </View>
      </View>
    );
  }
}
