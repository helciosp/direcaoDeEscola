import React, { Component } from "react";
import { View, Text, TextInput, Button } from 'react-native'
import Database from "../../my_db/DataBase"
import { DevSettings } from 'react-native';
import Escola from "../../model/Escola.js";
import { bts } from "../../styles/index.js";
const db = new Database;

export default class FormEscola extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeAluno: '',
      nota: '',
    };
  }

  cadastrar(nomeAluno, nota) {
    const escola = new Escola(nomeAluno, nota)
    db.adicionarAluno(escola);
    DevSettings.reload();
  }
  render() {
    return (
      <View style = {bts.conteine}>
        <View style = {bts.margin}>
          <Text>Nome do aluno(a):</Text>
          <TextInput placeholder = 'Informe o nome do aluno(A)' maxLength = {30} onChangeText = {(n) => this.setState({ nomeAluno: n })} />
          <TextInput keyboardType = 'numeric' placeholder = 'Nota' maxLength = {3} onChange = {(not) => this.setState({nota: not})} />
          <Button
            title={'Cadastra: ' + this.state.nomeAluno}
            onPress={() => {
              this.cadastrar(
                this.state.nomeAluno,
                this.state.nota
              );
            }}></Button>
        </View>
      </View>
    )
  }
}