import React, {Component} from 'react';
import {View, Text, TextInput, Button, DevSettings, TouchableNativeFeedback} from 'react-native';
import Database from '../../my_db/DataBase';
import Aluno from '../../model/Aluno.js';
import {app, pagAluno} from '../../styles/index.js';
import Header from '../../components/Header.js';
const db = new Database();

export default class PagAluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeAluno: '',
      turma: ''
    };
  }

  cadastrar(nomeAluno, turma) {
    const escola = new Aluno(nomeAluno, turma);
    db.adicionarAluno(escola);
    DevSettings.reload();
  }
  render() {
    return (
      <View style={app.pagina}>
        <Header metodo={this.props.navigation} />
        <View style={app.conteine}>
          <View style={pagAluno.margin}>
            <View style={pagAluno.campos}>
              <Text>Nome:</Text>
              <TextInput
                placeholder="Informe o nome do aluno(a)"
                maxLength={30}
                onChangeText={(n) => this.setState({nomeAluno: n})}
              />
            </View>
            <View style={pagAluno.campos}>
              <Text>Turma:</Text>
              <TextInput
                placeholder="Informe a turma do aluno(a)"
                keyboardType='numeric'
                maxLength={10}
                onChangeText={(tur) => this.setState({turma: tur})}
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
