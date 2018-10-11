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
  YellowBox,
  TouchableOpacity
} from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted'])

import { createStackNavigator } from 'react-navigation'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducer from './src/reducers'
import ConvertScreen from './src/component/ConvertScreen';
import TypeScreen from './src/component/TypeScreen';
const store = createStore(combineReducer)

const Navigation = createStackNavigator({
  ConvertScreen: {
    screen: ConvertScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Convert Screen',
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => navigation.navigate('TypeScreen')}>
          <Text>Type</Text>
        </TouchableOpacity>
      )
    })
  },
  TypeScreen: {
    screen: TypeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Type Screen',
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack(null)}>
          <Text style={{ color: 'blue' }}>Back</Text>
        </TouchableOpacity>
      )
    })
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
