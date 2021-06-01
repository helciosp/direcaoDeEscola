import React, { Component } from 'react';
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native';
import { Toast, Root } from "native-base";
import TbAluno from '../../my_db/TbAluno';
import Aluno from '../../model/Aluno.js';
import { app, pagAluno } from '../../styles/index.js';

const db = new TbAluno();

export default class PagAluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeAluno: '',
      turma: '',
    };
  }

  cadastrar(nomeAluno, turma) {
    const escola = new Aluno(nomeAluno, turma);

    if (nomeAluno.trim() && turma.trim()) {
      db.adicionarAluno(escola);
      Toast.show({
        text: 'Cadastro feito com susesso!',
        buttonText: 'OK',
        duration: 10000,
        type: 'success'
      })
    }
    else {
      Toast.show({
        text: 'Todos os campos são obrigatórios!',
        buttonText: 'OK',
        duration: 10000,
        type: 'danger'
      })
    }
  }
  render() {
    return (
      <Root>
        <View style={app.pagina}>
          <View style={app.conteine}>
            <View style={pagAluno.margin}>
              <View style={pagAluno.campos}>
                <Text style={pagAluno.titleInput}>Nome:</Text>
                <TextInput
                  style={pagAluno.input}
                  placeholder="Informe o nome do aluno(a)"
                  maxLength={30}
                  onChangeText={(n) => this.setState({ nomeAluno: n })}
                />
              </View>
              <View style={pagAluno.campos}>
                <Text style={pagAluno.titleInput}>Turma:</Text>
                <TextInput
                  style={pagAluno.input}
                  placeholder="Informe a turma do aluno(a)"
                  keyboardType='numeric'
                  maxLength={10}
                  onChangeText={(tur) => this.setState({ turma: tur })}
                />
              </View>
              <TouchableNativeFeedback
                onPress={() => {
                  this.cadastrar(this.state.nomeAluno, this.state.turma);
                }}
                background={
                  Platform.OS === 'android'
                    ? TouchableNativeFeedback.SelectableBackground()
                    : ''
                }>
                <View style={pagAluno.botao}>
                  <Text style={pagAluno.botaoText}>
                    Cadastrar
                  {Platform.OS !== 'android' ? '(Android only)' : ''}
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </Root>
    );
  }
}
