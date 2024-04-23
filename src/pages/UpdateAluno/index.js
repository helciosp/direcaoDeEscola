import React, { Component } from 'react';
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native';
import { Toast } from "native-base";
import { pagAluno, app } from '../../styles/index.js';
import TbAluno from '../../my_db/TbAluno';
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

    Update(nomeAluno, turma) {
        const prod = new Aluno(nomeAluno, turma);
        const db = new TbAluno();
        const { idAluno } = this.props.route.params;

        if (nomeAluno.trim() && turma.trim()) {
            db.atualizar(idAluno, prod);
            Toast.show({
                text: 'Alteração feita com sucesso!',
                buttonText: 'OK',
                duration: 10000,
                type: 'success'
            })
        }
        else {
            Toast.show({
                text: 'Alguma coisa aqui deve ser preenchida!',
                buttonText: 'OK',
                duration: 10000,
                type: 'danger'
            })
        }
    }

    render() {
        return (
            <View style={app.pagina}>
                <View style={app.conteine}>
                    <View style={pagAluno.margin}>
                        <View style={pagAluno.campos}>
                            <Text style={pagAluno.titleInput}>Aluno:</Text>
                            <TextInput
                                style={pagAluno.input}
                                placeholder="Infome o nome do aluno(a)"
                                maxLength={30}
                                onChangeText={(nom) => this.setState({ nomeAluno: nom })}
                            />
                        </View>
                        <View style={pagAluno.campos}>
                            <Text style={pagAluno.titleInput}>Turma:</Text>
                            <TextInput
                                style={pagAluno.input}
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
                                    {'Modificar'}{' '}
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