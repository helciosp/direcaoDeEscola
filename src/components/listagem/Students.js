import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TbAluno from '../../my_db/TbAluno'
import { list, app } from '../../styles/index.js'

const db = new TbAluno();

export default class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: 1
        }
    }
    delete(id) {
        db.deletar(id)
        this.setState({ c: 0 })
    }
    render() {
        return (
            <View style={(this.state.c) ? list.lista : app.deletado}>
                <View style={(this.props.idAluno % 2 == 0) ? list.centerPar : list.center}>
                    <View>
                        <Text style={list.title}>Nº: {this.props.idAluno}</Text>
                        <Text style={list.title}>Estudante: <Text style={list.valores}>{this.props.nomeAluno}</Text></Text>
                        <Text style={list.title}>Turma: <Text style={list.valores}>{this.props.turma}</Text></Text>
                    </View>
                    <View style={list.botaoView}>
                        <TouchableOpacity style={list.botao} onPress={() => { this.props.metodo.navigate('PagNota', { idAluno: this.props.idAluno, nomeAluno: this.props.nomeAluno }) }}>
                            <View>
                                <Text style={list.botaoText2}>Adicionar nota</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={list.botao} onPress={() => { this.props.metodo.navigate('UpdateAluno', { idAluno: this.props.idAluno }) }}>
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