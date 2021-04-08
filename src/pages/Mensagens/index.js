import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { mensagens, app } from "../../styles/index.js";

export default class Mensagens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condicao: 0,
            mensagens: [
                '"Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."',
                '"Imagine uma nova história para sua vida e acredite nela."',
                '"Não espere por uma crise para descobrir o que é importante em sua vida."',
                '"Perder tempo em aprender coisas que não interessam, priva-nos de descobrir coisas interessantes."',
                '"Pessimismo leva à fraqueza, otimismo ao poder."',
                '"O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo."',
                '"O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo."'
            ],
            autor: [
                'Roberto Shinyashiki', 'Paulo Coelho', 'Platão', 
                'Carlos Drummond de Andrade', 
                'William James', 'Helen Keller', 'Enoch Arnold Bennett'
            ],
        };
    }
    componentDidMount() {
        let data = new Date()
        let dia = data.getDay()
        this.setState({ condicao: dia })
    }

    render() {
        return (
            <View style={app.pagina}>
                <View style={mensagens.conteine}>
                    <View style={mensagens.margin}>
                        <Text style={mensagens.frase}>{this.state.mensagens[this.state.condicao]}</Text>
                        <Text style={mensagens.autor}>{this.state.autor[this.state.condicao]}</Text>
                    </View>
                </View>
            </View>
        )

    }
}