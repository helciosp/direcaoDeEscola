import React, { Component } from 'react';
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native';
import { pagAluno, app } from '../../styles/index.js';
import DataBase from '../../my_db/DataBase.js';
import Aluno from '../../model/Aluno.js';

export default class PagNota extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAluno: '',
            nomeAluno: '',
            turma: '',
            mensagem: '',
            c: 1
        };
    }

    Update(nomeAluno, turma) {
        const prod = new Aluno(nomeAluno, turma);
        const db = new DataBase();
        const { idAluno } = this.props.route.params;
        
        if(nomeAluno.trim() && turma.trim()) {
            db.atualizar(idAluno, prod);
            this.setState({ mensagem: `Alteração feita com sucesso.`, c: 0});
        }
        else {
            this.setState({mensagem: "Todos os compas são obrigatórios!", c: 1})
        }
    }

    render() {
        const { idAluno } = this.props.route.params;
        return (
            <View style={app.pagina}>
                <View style={app.conteine}>
                    <View style={pagAluno.margin}>
                        <View style={pagAluno.campos}>
                            <Text>Aluno:</Text>
                            <TextInput
                                placeholder="Infome o nome do aluno(a)"
                                maxLength={30}
                                onChangeText={(nom) => this.setState({ nomeAluno: nom })}
                            />
                        </View>
                        <View style={pagAluno.campos}>
                            <Text>Turma:</Text>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="Informe a turma"
                                maxLength={10}
                                onChangeText={(tur) => this.setState({ turma: tur })}
                            />
                        </View>

                        <TouchableNativeFeedback
                            onPress={() => {
                                this.Update(this.state.nomeAluno, this.state.turma);
                            }}
                            background={
                                Platform.OS === 'android'
                                    ? TouchableNativeFeedback.SelectableBackground()
                                    : ''
                            }>
                            <View style={pagAluno.botao}>
                                <Text style={pagAluno.botaoText}>
                                    {'Modificar Id: ' + idAluno}{' '}
                                    {Platform.OS !== 'android' ? '(Android only)' : ''}
                                </Text>
                            </View>
                        </TouchableNativeFeedback>

                        <Text style={(this.state.c) ? app.error : app.sucesso}>{this.state.mensagem}</Text>
                    </View>
                </View>
            </View>
        );
    }
}