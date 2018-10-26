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
  Image,
  YellowBox
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import LoginScreen from './LoginScreen';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import SplashScreen from './SplashScreen';
import firebase from 'react-native-firebase'
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabHistory from './TabHistory';
import TabInfo from './TabInfo';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { primaryColorGreen } from '../styles';
import HeaderTab from '../components/HeaderTab';

const store = createStore(rootReducer)

YellowBox.ignoreWarnings(['Warning: isMounted'])

const BottomTabNavigator = createBottomTabNavigator({
  Menu: { screen: TabMenu, },
  Order: { screen: TabOrder },
  History: { screen: TabHistory },
  Info: { screen: TabInfo }
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        // console.log(navigation)
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

        return <HeaderTab iconName={iconName} routeName={routeName} tintColor={tintColor} />

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <View>
        //   <Ionicons name={iconName} size={25} color={tintColor} />
        //   {routeName === 'Order' && <View style={styles.notify}>
        //     <Text style={{ color: 'white', fontSize: 12 }}>12</Text>
        //   </View>}
        // </View>
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
      <Provider store={store}>
        <SwitchNavigation />
      </Provider>
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
  notify: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    left: 15,
  }
});
