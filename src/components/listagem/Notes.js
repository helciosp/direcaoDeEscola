import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TbNotas from '../../my_db/TbNotas'
import { list, app } from '../../styles/index.js'

const db = new TbNotas();

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
                        <Text>Disciplina: {this.props.disciplina}</Text>
                        <Text>Nota: {this.props.nota}</Text>
                        <Text>Bimestre: {this.props.bimestre}</Text>
                        <Text>Id Aluno: {this.props.idAluno}</Text>
                    </View>
                    <View style={list.botaoView}>
                        <TouchableOpacity style={list.botao} onPress={() => { this.props.metodo.navigate('UpdateNotas', { idNotas: this.props.idNotas, nomeAluno: this.props.nomeAluno, disciplina: this.props.disciplina }) }}>
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
