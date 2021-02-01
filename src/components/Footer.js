import React, { Component } from "react";
import { View, Text } from "react-native";
import { footer } from "../styles/index.js";

export default class Footer extends Component{
    render(){
        return(
            <View style={footer.conteine}>
                <Text>Criado por Hélcio</Text>
            </View>
        )
    }
}