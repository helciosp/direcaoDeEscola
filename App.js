import React, { Component } from 'react';
import Pilhas from './src/routes/Pilhas'
import { listenOrientationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';
import SplashScreen from 'react-native-splash-screen';

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
      <Pilhas />
    );
  }
}
