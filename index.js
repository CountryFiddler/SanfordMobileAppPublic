/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from 'react-native-firebase';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);
