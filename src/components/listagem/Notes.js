import React, { Component } from 'react'
import { View, Text, DevSettings, TouchableOpacity } from 'react-native'
import Database from '../../my_db/DataBase.js'
import { list } from '../../styles/index.js'

const db = new Database();

export default class Students extends Component {
    delete(idNotas) {
        db.deletarNotas(idNotas)
        DevSettings.reload();
    }
    render() {
        if (this.props.idNotas % 2 == 0) {
            return (

                <View style={list.lista}>
                    <View style={list.centerPar}>
                        <View>
                            <Text>Id Nota: {this.props.idNotas}</Text>
                            <Text>Id Aluno: {this.props.idAluno}</Text>
                            <Text>Estudante: {this.props.nomeAluno}</Text>
                            <Text>Nota de matemática: {this.props.matematica}</Text>
                        </View>
                        <View style={list.botaoView}>
                            <TouchableOpacity style={list.botao}>
                                <View>
                                    <Text style={list.botaoText1}>Modificar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={list.botao} onPress={() => this.delete(this.props.idNotas)}>
                                <View>
                                    <Text style={list.botaoText}>Deletar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
        else {
            return (

                <View style={list.lista}>
                    <View style={list.center}>
                        <View>
                            <Text>Id Nota: {this.props.idNotas}</Text>
                            <Text>Id Aluno: {this.props.idAluno}</Text>
                            <Text>Estudante: {this.props.nomeAluno}</Text>
                            <Text>Nota de matemática: {this.props.matematica}</Text>
                        </View>
                        <View style={list.botaoView}>
                            <TouchableOpacity style={list.botao}>
                                <View>
                                    <Text style={list.botaoText1}>Modificar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={list.botao} onPress={() => this.delete(this.props.idNotas)}>
                                <View>
                                    <Text style={list.botaoText}>Deletar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
    }
}
