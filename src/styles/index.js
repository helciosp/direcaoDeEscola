import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp, } from 'react-native-responsive-screen';

var width = Dimensions.get("window").width;

const app = StyleSheet.create({
  pagina: {
    flex: 1,
  },
  sucesso: {
    textAlign: "center",
    fontSize: 14,
    color: "green",
  },
  error: {
    textAlign: "center",
    fontSize: 14,
    color: "red",
  },
  deletado: {
    display: "none"
  },
  list: {
    flex: 6,
  },
  mensagens: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  }
});
const mensagens = StyleSheet.create({
  frase: {
    fontSize: 16,
    textAlign: 'center'
  },
  autor: {
    fontStyle: 'italic',
    fontSize: 12
  },
});
const list = StyleSheet.create({
  lista: {
    marginHorizontal: wp('10%'),  
    marginVertical: hp('2.5%'),
  },
  lista2: {
    marginHorizontal: wp('10%'),  
    marginVertical: hp('2.5%'),
  },
  center: {
    backgroundColor: '#999999',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  centerPar: {
    backgroundColor: '#adadad',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  botaoText: {
    fontSize: 14,
    color: 'red',
    textAlign: 'right'
  },
  botaoText1: {
    fontSize: 14,
    color: 'white',
    textAlign: 'right'
  },
  botaoText2: {
    fontSize: 14,
    color: 'green',
    textAlign: 'right'
  },

});
const pagAluno = StyleSheet.create({
  margin: {
    margin: 10
  },
  campos: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
    borderBottomWidth: 1
  },
  botao: {
    backgroundColor: '#4dbce8',
    margin: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  
})

export { app, mensagens, list, pagAluno };