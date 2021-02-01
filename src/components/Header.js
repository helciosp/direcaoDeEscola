import React, { Component } from "react";
import { View, Text } from "react-native";
import { header } from "../styles/index.js";

export default class Header extends Component {
  render() {
    return (
      <View style={header.preenchimento}>
        <View style={header.conteine}>
          <Text style={header.title}>Teste</Text>
        </View>
      </View>
    );
  }
}
