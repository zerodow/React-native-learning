/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  YellowBox
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Schedule from './Schedule';
import AddTask from './AddTask';
YellowBox.ignoreWarnings(['Warning: isMounted'])
const Navigation = createStackNavigator({
  Schedule: { screen: Schedule },
  AddTask: { screen: AddTask }
})


export default class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
