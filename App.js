import React, { Component } from 'react';
import Pilhas from './src/routes/Pilhas'
import { listenOrientationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';
import SplashScreen from 'react-native-splash-screen';
import { NativeBaseProvider } from "native-base";

export default class App extends Component {
  componentDidMount() {
    loc(this);
    SplashScreen.hide();
  }

  componentWillUnMount() {
    rol();
  }
  render() {
    return (
      <NativeBaseProvider>
        <Pilhas />
      </NativeBaseProvider>
    );
  }
}
