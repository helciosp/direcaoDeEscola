import React, { Component } from 'react';
import { View, Text, TouchableOpacity, PixelRatio } from 'react-native';
import { ActionSheet } from "native-base";
import Dots from 'react-native-vector-icons/Octicons';
import TbNotas from '../../my_db/TbNotas';
import { list, app } from '../../styles/index';

const db = new TbNotas();
const botao = ['Modificar', 'Deletar']
export default class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: 1
        }
    }
    delete(idNotas) {
        db.deletarNotas(idNotas);
        this.setState({ c: 0 })
    }
    operacao(index) {
        switch (index) {
            case 0:
                this.props.metodo.navigate('UpdateNotas', { idNotas: this.props.idNotas, nomeAluno: this.props.nomeAluno, disciplina: this.props.disciplina })
            break;
            case 1: 
                this.delete(this.props.idNotas)
            break;
        }
    }
    render() {
        return (
            <View style={(this.state.c) ? list.lista2 : app.deletado}>
                <View style={(this.props.idNotas % 2 == 0) ? list.centerPar : list.center}>
                    <View>
                        <Text style={list.title}>ID: {this.props.idNotas}</Text>
                        <Text style={list.title}>Estudante: <Text style={list.valores}>{this.props.nomeAluno}</Text></Text>
                        <Text style={list.title}>Disciplina: <Text style={list.valores}>{this.props.disciplina}</Text></Text>
                        <Text style={list.title}>Nota: <Text style={list.valores}>{this.props.nota}</Text></Text>
                        <Text style={list.title}>Bimestre: <Text style={list.valores}>{this.props.bimestre}</Text></Text>
                        <Text style={list.title}>Nº: {this.props.idAluno}</Text>
                    </View>
                    <View style={list.botaoView}>
                        <TouchableOpacity 
                            hitSlop={{right: 10, top: 10, bottom: 15, left: 15}}
                            onPress={() =>
                            ActionSheet.show(
                                {
                                    options: botao,
                                    cancelButtonIndex: 3,
                                    title: this.props.nomeAluno
                                },
                                buttonIndex => {
                                    this.operacao(buttonIndex)
                                },
                            )}>
                            <View>
                                <Dots name='kebab-vertical' size={(15 * PixelRatio.get())} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
