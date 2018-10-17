/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import LoginScreen from './LoginScreen';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import firebase from 'react-native-firebase'
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabHistory from './TabHistory';
import TabInfo from './TabInfo';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { primaryColorGreen } from '../styles';

const BottomTabNavigator = createBottomTabNavigator({
  Menu: { screen: TabMenu, },
  Order: { screen: TabOrder },
  History: { screen: TabHistory },
  Info: { screen: TabInfo }
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Menu') {
          iconName = `cutlery`;
        } else if (routeName === 'Order') {
          iconName = `shopping-cart`;
        } else if (routeName === 'History') {
          iconName = `history`;
        } else {
          iconName = `info-circle`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: primaryColorGreen,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white'
      }
    },
  })

const SwitchNavigation = createSwitchNavigator({
  SplashScreen: { screen: SplashScreen },
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: BottomTabNavigator }
})

export default class App extends Component {
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
