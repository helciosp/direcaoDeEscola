import React, { Component } from "react";
import { View, Text } from "react-native";
import { mensagens, app } from "../../styles/index.js";

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
                    <View style={app.pagina}>           
                        <View style={mensagens.conteine}>
                            <View style={mensagens.margin}>
                                <View>
                                    <Text style={mensagens.frase}>"Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."</Text>
                                    <Text style={mensagens.autor}>Roberto Shinyashiki</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
                break;
            case 1:
                return (
                    <View style={app.pagina}>   
                        <View style={mensagens.conteine}>
                            <View style={mensagens.margin}>
                                <View>
                                    <Text style={mensagens.frase}>"Imagine uma nova história para sua vida e acredite nela."</Text>
                                    <Text style={mensagens.autor}>Paulo Coelho</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
                break;
            case 2:
                return (
                    <View style={app.pagina}>
                        <View style={mensagens.conteine}>
                            <View style={mensagens.margin}>
                                <View>
                                    <Text style={mensagens.frase}>"Não espere por uma crise para descobrir o que é importante em sua vida."</Text>
                                    <Text style={mensagens.autor}>Platão</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
                break;
            case 3:
                return (
                    <View  style={app.pagina}>                 
                        <View style={mensagens.conteine}>
                            <View style={mensagens.margin}>
                                <View>
                                    <Text style={mensagens.frase}>"Perder tempo em aprender coisas que não interessam, priva-nos de descobrir coisas interessantes."</Text>
                                    <Text style={mensagens.autor}>Carlos Drummond de Andrade</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
                break;
            case 4:
                return (
                    <View  style={app.pagina}>                     
                        <View style={mensagens.conteine}>
                            <View style={mensagens.margin}>
                                <View>
                                    <Text style={mensagens.frase}>"Pessimismo leva à fraqueza, otimismo ao poder."</Text>
                                    <Text style={mensagens.autor}>William James</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
                break;
            case 5:
                return (
                    <View  style={app.pagina}>                   
                        <View style={mensagens.conteine}>
                            <View style={mensagens.margin}>
                                <View>
                                    <Text style={mensagens.frase}>"O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo."</Text>
                                    <Text style={mensagens.autor}>Helen Keller</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
                break;
            case 6:
                return (
                    <View  style={app.pagina}>                  
                        <View style={mensagens.conteine}>
                            <View style={mensagens.margin}>
                                <View>
                                    <Text style={mensagens.frase}>"O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo."</Text>
                                    <Text  style={mensagens.autor}>Enoch Arnold Bennett</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
                break;
        }
    }
}