import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { bts } from "../styles/index.js";
import Database from "../my_db/DataBase.js";
const db = new Database()
export default class Bottons extends Component {
  
  render() {
    return (
      <View style={bts.conteine}>
        <View style={bts.margin}>
          <Button title="teste"></Button>
        </View>
      </View>
    );
  }
}
