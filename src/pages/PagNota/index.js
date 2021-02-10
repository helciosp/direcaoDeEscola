import React, { Component } from 'react';
import { View, Text, TextInput, TouchableNativeFeedback,  DevSettings } from 'react-native';
import Header from '../../components/Header.js'
import { pagAluno, app } from '../../styles/index.js';
import DataBase from '../../my_db/DataBase.js';
import Notas from '../../model/Notas.js';

export default class PagNota extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAluno: '',
            nomeAluno: '',
            matematica: '',
        };
    }

    cadastrarNota(idAluno, nomeAluno, matematica) {
        const notas = new Notas(idAluno, nomeAluno, matematica);
        const db = new DataBase();
        db.adicionarNota(notas);
        DevSettings.reload();
    }
    render() {
        return (
            <View style={app.pagina}>
                <Header />
                <View style={app.conteine}>
                    <View style={pagAluno.margin}>
                        <View style={pagAluno.campos}>
                            <Text>Id do Aluno:</Text>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="Informe o Id"
                                onChangeText={(idA) => this.setState({ idAluno: idA })}
                            />
                        </View>
                        <View style={pagAluno.campos}>
                        <Text>Aluno:</Text>
                        <TextInput 
                            placeholder="Infome o aluno"
                            maxLength={30}
                            onChangeText={(nom) => this.setState({nomeAluno: nom})}
                            />
                        </View>
                        <View style={pagAluno.campos}>
                            <Text>Nota de matematica:</Text>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="Informe a nota de matematica"
                                maxLength={3}
                                onChangeText={(mat) => this.setState({ matematica: mat })}
                            />
                        </View>
                        
                        <TouchableNativeFeedback
                            onPress={() => {
                                this.cadastrarNota(this.state.idAluno, this.state.nomeAluno, this.state.matematica);
                            }}
                            background={
                                Platform.OS === 'android'
                                    ? TouchableNativeFeedback.SelectableBackground()
                                    : ''
                            }>
                            <View style={pagAluno.botao}>
                                <Text style={pagAluno.botaoText}>
                                    {'Cadastra: ' + this.state.nomeAluno}{' '}
                                    {Platform.OS !== 'android' ? '(Android only)' : ''}
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        );
    }
}
