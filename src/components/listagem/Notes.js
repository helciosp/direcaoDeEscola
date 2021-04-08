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
    delete(idNotas) {
        db.deletarNotas(idNotas);
        this.setState({ c: 0 })
    }
    render() {

        return (

            <View style={(this.state.c) ? list.lista2 : app.deletado}>
                <View style={(this.props.idNotas % 2 == 0) ? list.centerPar : list.center}>
                    <View>
                        <Text>Id Nota: {this.props.idNotas}</Text>
                        <Text>Estudante: {this.props.nomeAluno}</Text>
                        <Text>Artes: {this.props.artes}</Text>
                        <Text>Biologia: {this.props.biologia}</Text>
                        <Text>Edução Física: {this.props.educacaoFisica}</Text>
                        <Text>Física: {this.props.fisica}</Text>
                        <Text>Geografia: {this.props.geografia}</Text>
                        <Text>História: {this.props.historia}</Text>
                        <Text>Inglês: {this.props.ingles}</Text>
                        <Text>Matemática: {this.props.matematica}</Text>
                        <Text>Português/Literatura: {this.props.portuguesLiteratura}</Text>
                        <Text>Química: {this.props.quimica}</Text>
                        <Text>Sociologia: {this.props.sociologia}</Text>
                        <Text>Id Aluno: {this.props.idAluno}</Text>
                    </View>
                    <View style={list.botaoView}>
                        <TouchableOpacity style={list.botao} onPress={() => { this.props.metodo.navigate('UpdateNotas', { idNotas: this.props.idNotas, nomeAluno: this.props.nomeAluno }) }}>
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
