import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Database from '../../my_db/DataBase.js'
import { list, app } from '../../styles/index.js'

const db = new Database();

export default class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: 1
        }
    }
    delete(id) {
        db.deletar(id)
        this.setState({c: 0})
    }
    render() {
        if (this.props.idAluno % 2 == 0) {
            return (
                <View style={(this.state.c) ? list.lista : app.deletado}>
                    <View style={list.centerPar}>
                        <View>
                            <Text>Id: {this.props.idAluno}</Text>
                            <Text>Estudante: {this.props.nomeAluno}</Text>
                            <Text>Turma: {this.props.turma}</Text>
                        </View>
                        <View style={list.botaoView}>
                            <TouchableOpacity style={list.botao} onPress={() => {this.props.metodo.navigate('PagNota', {idAluno: this.props.idAluno, nomeAluno: this.props.nomeAluno})}}>
                                <View>
                                    <Text style={list.botaoText2}>Adicionar nota</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={list.botao} onPress={() => {this.props.metodo.navigate('UpdateAluno', {idAluno: this.props.idAluno})}}>
                                <View>
                                    <Text style={list.botaoText1}>Modificar</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={list.botao} onPress={() => this.delete(this.props.idAluno)}>
                                <View>
                                    <Text style={list.botaoText}>Deletar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={(this.state.c) ? list.lista : app.deletado}>
                    <View style={list.center}>
                        <View>
                            <Text>Id: {this.props.idAluno}</Text>
                            <Text>Estudante: {this.props.nomeAluno}</Text>
                            <Text>Turma: {this.props.turma}</Text>
                        </View>
                        <View style={list.botaoView}>
                            <TouchableOpacity style={list.botao} onPress={() => {this.props.metodo.navigate('PagNota', {idAluno: this.props.idAluno, nomeAluno: this.props.nomeAluno})}}>
                                <View>
                                    <Text style={list.botaoText2}>Adicionar nota</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={list.botao} onPress={() => {this.props.metodo.navigate('UpdateAluno', {idAluno: this.props.idAluno})}}>
                                <View>
                                    <Text style={list.botaoText1}>Modificar</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={list.botao} onPress={() => this.delete(this.props.idAluno)}>
                                <View>
                                    <Text style={list.botaoText}>Deletar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }

    }
}