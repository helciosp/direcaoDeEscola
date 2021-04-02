import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

var width = Dimensions.get("window").width;

const app = StyleSheet.create({
  pagina: {
    flex: 1,
  },
  conteine: {
    flex: 7
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
});
const header = StyleSheet.create({
  preenchimento: {
    backgroundColor: "red",
    justifyContent: "center",
    flex: 1.5
  },
  conteine: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: "white",
    fontSize: 24,
  },
  img: {
    backgroundColor: 'white',
  
  }
});
const bts = StyleSheet.create({
  conteine: {
    flex: 4,
    justifyContent: "center",
  },
  margin: {
    margin: 20,
    backgroundColor: "#fff3e6",
    flex: 1,
    borderRadius: 3
  },
});
const mensagens = StyleSheet.create({
  conteine: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  frase: {
    textAlign: 'center',
    fontSize: 16
  },
  autor: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 12
  },
  margin: {
    margin: 20
  },
});
const footer = StyleSheet.create({
  conteine: {
    width: width,
    height: 50,
    backgroundColor: "#c1a1d3",
  },
});
const list = StyleSheet.create({
  lista: {
    width: wp('100%'),
    height: hp('20%'),
  },
  lista2: {
    width: wp('100%'),
    height: hp('55%'),
  },
  center: {
    margin: 20,
    backgroundColor: '#999999',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  centerPar: {
    margin: 20,
    backgroundColor: '#adadad',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row'
  },
  botao: {
    marginHorizontal: 20,
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

export { app, header, bts, footer, mensagens, list, pagAluno };
