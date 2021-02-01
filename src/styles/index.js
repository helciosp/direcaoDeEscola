import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get("window").width;

const app = StyleSheet.create({
  p: {
    flex: 1,
    backgroundColor: "#1a508b",
  },
});
const header = StyleSheet.create({
  layout: {
    justifyContent: "center",
    alignItems: "center",
  },
  preenchimento: {
    backgroundColor: "#fff3e6",
    justifyContent: "center",
    height: 80,
    width: width,
  },
  conteine: {
    margin: 25,
  },
  title: {
    color: "black",
    fontSize: 20,
  },
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
    flex: 3,
    
  },
  cent:{
    marginTop: 30,
    alignItems: 'center'
  },
  margin: {
    margin: 20,
    backgroundColor: "#fff3e6",
    flex: 1,
    borderRadius: 3
  },
});
const footer = StyleSheet.create({
  conteine: {
    width: width,
    height: 50,
    backgroundColor: "#c1a1d3",
  },
});

export { app, header, bts, footer, mensagens };
