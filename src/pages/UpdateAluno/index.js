import React, { Component } from 'react';
import { View, Text, TextInput, TouchableNativeFeedback,  DevSettings } from 'react-native';
import Header from '../../components/Header.js'
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
        };
    }

    Update(idAluno, nomeAluno, turma) {
        const prod = new Aluno(nomeAluno, turma);
        const db = new DataBase();
        let NewIdAluno = idAluno;
        db.atualizar(NewIdAluno, prod);
        DevSettings.reload();
    }
    render() {
        return (
            <View style={app.pagina}>
                <Header metodo={this.props.navigation} />
                <View style={app.conteine}>
                    <View style={pagAluno.margin}>
                        <View style={pagAluno.campos}>
                            <Text>Id do Aluno:</Text>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="Informe o Id"
                                onChangeText={(idA) => this.setState({ idAluno: idA })}
                                value= {this.props.id}
                            />
                        </View>
                        <View style={pagAluno.campos}>
                        <Text>Aluno:</Text>
                        <TextInput 
                            placeholder="Infome o nome do aluno(a)"
                            maxLength={30}
                            onChangeText={(nom) => this.setState({nomeAluno: nom})}
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
                                this.Update(this.state.idAluno, this.state.nomeAluno, this.state.turma);
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