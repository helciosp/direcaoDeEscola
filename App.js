import React, { Component } from 'react';
import Pilhas from './src/routes/Pilhas'
import { listenOrientationChange as loc, removeOrientationListener as rol } from 'react-native-responsive-screen';

export default class App extends Component {
  componentDidMount() {
    loc(this);
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
