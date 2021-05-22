/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { notificacoes } from "./src/services/Notificacoes"

AppRegistry.registerComponent(appName, () => App);

notificacoes.configure();
notificacoes.ChannelManagement();
notificacoes.notificaoInicial();