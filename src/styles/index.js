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
    display: 'none',
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
    fontFamily: 'Roboto-Light',
    fontSize: (width / 26),
    textAlign: 'center'
  },
  autor: {
    fontSize: (width / 30),
    fontFamily: 'Roboto-Italic'
  },
});
const list = StyleSheet.create({
  lista: {
    marginHorizontal: wp('10%'),  
    marginVertical: hp('4%'),
  },
  lista2: {
    marginHorizontal: wp('10%'),  
    marginVertical: hp('4%'),
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
    fontSize: (width / 32),
    color: 'red',
    textAlign: 'right'
  },
  botaoText1: {
    fontSize: (width / 32),
    color: 'white',
    textAlign: 'right'
  },
  botaoText2: {
    fontSize: (width / 32),
    color: 'green',
    textAlign: 'right'
  },
  title: {
    fontSize: (width / 26),
    fontFamily: 'Reboto-Bold'
  },
  valores: {
    fontSize: (width / 28),
    fontFamily: 'Reboto-Thin'
  },
  modalCont: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  modalTextMensagem: {
    textAlign: 'center',
    fontSize: (width / 32),
    fontFamily: 'Reboto-Bold'
  },
  modalContBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalSim: {
    backgroundColor: '#fff',
    borderColor: '#149ee3',
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,

  },
  modalNao: {
    backgroundColor: '#149ee3',
    borderColor: '#149ee3',
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    marginHorizontal: 3
  }
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
  botaoText: {
    fontSize: (width / 34),
    fontFamily: 'Roboto-Bold'

  },
  select: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  picker: {
  },
  input: {
    width: width,
    fontSize: (width / 30),
    fontFamily: 'Roboto-Bold',
  },
  titleInput: {
    fontSize: (width / 30),
    fontFamily: 'Roboto-Bold'

  }
})

export { app, mensagens, list, pagAluno };