import React, { Component } from "react";
import { View, Text } from "react-native";
import { mensagens } from "../styles/index.js";

export default class Mensagens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condicao: 0
        };
    }
    componentDidMount() {
        let data = new Date()
        let dia = data.getDay()
        this.setState({ condicao: dia })
    }

    render() {
        switch (this.state.condicao) {
            case 0:
                return (
                    <View style={mensagens.conteine}>
                        <View style={mensagens.margin}>
                            <View style={mensagens.cent}>
                                <Text>"Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."</Text>
                                <Text>Roberto Shinyashiki</Text>
                            </View>
                        </View>
                    </View>
                );
            break;
            case 1:
                return (
                    <View style={mensagens.conteine}>
                        <View style={mensagens.margin}>
                            <View style={mensagens.cent}>
                                <Text>"Imagine uma nova história para sua vida e acredite nela."</Text>
                                <Text>Paulo Coelho</Text>
                            </View>
                        </View>
                    </View>
                );
            break;
            case 2:
                return (
                    <View style={mensagens.conteine}>
                        <View style={mensagens.margin}>
                            <View style={mensagens.cent}>
                                <Text>"Não espere por uma crise para descobrir o que é importante em sua vida."</Text>
                                <Text>Platão</Text>
                            </View>
                        </View>
                    </View>
                );
            break;
            case 3:
                return (
                    <View style={mensagens.conteine}>
                        <View style={mensagens.margin}>
                            <View style={mensagens.cent}>
                                <Text>"Perder tempo em aprender coisas que não interessam, priva-nos de descobrir coisas interessantes."</Text>
                                <Text>Carlos Drummond de Andrade</Text>
                            </View>
                        </View>
                    </View>
                );
            break;
            case 4:
                return (
                    <View style={mensagens.conteine}>
                        <View style={mensagens.margin}>
                            <View style={mensagens.cent}>
                                <Text>"Pessimismo leva à fraqueza, otimismo ao poder."</Text>
                                <Text>William James</Text>
                            </View>
                        </View>
                    </View>
                );
            break;
            case 5:
                return (
                    <View style={mensagens.conteine}>
                        <View style={mensagens.margin}>
                            <View style={mensagens.cent}>
                                <Text>"O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo."</Text>
                                <Text>Helen Keller</Text>
                            </View>
                        </View>
                    </View>
                );
            break;
            case 6:
                return (
                    <View style={mensagens.conteine}>
                        <View style={mensagens.margin}>
                            <View style={mensagens.cent}>
                                <Text>"O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo."</Text>
                                <Text>O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo.</Text>
                            </View>
                        </View>
                    </View>
                );
            break;
        }
    }
}
