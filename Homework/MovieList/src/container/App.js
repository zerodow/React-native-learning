import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import ListMovie from './ListMovie'
import DetailMovie from './DetailMovie'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer';

const Navigation = createStackNavigator({
  ListMovie: {
    screen: ListMovie,
    navigationOptions: ({ navigation }) => ({
      title: 'ListMovie',
      headerTitleStyle: {
        width: '85%',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        elevation: 0,
        backgroundColor: 'black',
        borderBottomWidth: 0,
      },
      headerLeft: (<View></View>),
      // headerRight: (<View></View>)
    })
  },
  DetailMovie: {
    screen: DetailMovie,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('detail').title,
      headerTitleStyle: {
        width: '85%',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        elevation: 0,
        backgroundColor: 'black',
        borderBottomWidth: 0,
      },
      headerRight: (<View></View>),
      headerLeft: (<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}
        onPress={() => navigation.goBack(null)}>
        <Image
          style={{ height: 20, aspectRatio: 1 }}
          source={require('../image/back.png')} />
      </TouchableOpacity>),
    })
  }
})

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
