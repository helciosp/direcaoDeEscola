import React, {Component} from 'react';
import {View, Text, TextInput, DevSettings, TouchableNativeFeedback} from 'react-native';
import Database from '../../my_db/DataBase';
import Aluno from '../../model/Aluno.js';
import {app, pagAluno} from '../../styles/index.js';
const db = new Database();

export default class PagAluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeAluno: '',
      turma: '',
      mensagem: '',
      c: 1
    };
  }

  cadastrar(nomeAluno, turma) {
    const escola = new Aluno(nomeAluno, turma);
    
    if(nomeAluno.trim() && turma.trim()) {
      db.adicionarAluno(escola);
      this.setState({mensagem: 'Cadastro feito com susesso', c: 0})
    } 
    else {
      this.setState({mensagem: 'Todos os campos são obrigatórios', c: 1})
    }
    
  }
  render() {
    return (
      <View style={app.pagina}>
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
                  Cadastrar
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
