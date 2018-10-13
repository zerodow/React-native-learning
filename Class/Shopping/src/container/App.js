/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginScreen from './LoginScreen';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import firebase from 'react-native-firebase'


const SwitchNavigation = createSwitchNavigator({
  SplashScreen: { screen: SplashScreen },
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen }
})
export default class App extends Component {
  componentDidMount(){
    console.log(firebase)
  }
  render() {
    return (
      <SwitchNavigation />
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
