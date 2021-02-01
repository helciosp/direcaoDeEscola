import React from 'react';
import { Text, View } from 'react-native';
import {app} from './src/styles/index.js'
import Header from './src/components/Header.js'
import Bottons from './src/components/buttons.js'
import Footer from './src/components/Footer.js'
import Ms from './src/components/Mensagens.js'
import Aluno from './src/components/form/FormAluno.js'
import ListAluno from './src/components/listagem/ListAluno.js'

export default function App() {
  return (
    <View style={app.p}>
      <Header></Header>
      <Aluno></Aluno>
      <ListAluno></ListAluno>
      <Footer></Footer>

    </View>
  );
}
