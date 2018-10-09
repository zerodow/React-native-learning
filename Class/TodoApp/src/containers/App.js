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
  TouchableOpacity,
  Image
} from 'react-native';
import { Provider } from 'react-redux'
// import { createStore } from 'redux';
// import rootReducer from '../reducers';
import configureStore from '../configureStore'
import { createStackNavigator } from 'react-navigation';
import Schedule from './Schedule';
import AddTask from './AddTask';
import { color } from '../../styles'
import { PersistGate } from 'redux-persist/integration/react'

YellowBox.ignoreWarnings(['Warning: isMounted'])

const Navigation = createStackNavigator({
  Schedule: {
    screen: Schedule,
    navigationOptions: ({ navigation }) => ({
      title: 'Schedule',
      headerTitleStyle: {
        width: '85%',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'gray',
      },
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerLeft: (<View></View>),
      headerRight: (<TouchableOpacity
        onPress={() => navigation.navigate('AddTask')}>
        <Image
          style={{ height: '70%', aspectRatio: 1, marginRight: 10 }}
          source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADPSURBVGhD7dZBCsIwEIXhgFtFvIDgAVx5GO8jXsWFQ8pE6UaT6KJdCq48iQfQCqmoFEppq1N5H8wqocwPpVQBAABIRES9OE5G+RiTDsJRtzDvp5Hxt3y08Uk46haESIMQaRAiDUKkQYg0CGnL4y+W+TCrOprt/D3EnYvulc16s5uEVeohssPXhb4/bhVWqQchjU1jIcd+9n6fqk7E/vKx0LXoXtlkz1mGVX4Dn19pECINQqRBiDQIkQYh0vxNCG3tWLOn5xi3CEcAAADQDqXu1SdrzcOGeTsAAAAASUVORK5CYII=' }} />
      </TouchableOpacity>)
    })
  },
  AddTask: {
    screen: AddTask,
    navigationOptions: ({ navigation }) => ({
      title: 'AddTask',
      headerTitleStyle: {
        width: '85%',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'gray'
      },
      headerLeft: (<TouchableOpacity
        onPress={() => navigation.goBack(null)}>
        <Image
          style={{ height: '50%', aspectRatio: 1, marginLeft: 10 }}
          source={require('../../back.png')} />
      </TouchableOpacity>
      ),
      headerRight:
        (<TouchableOpacity
          onPress={
            navigation.getParam('addTask')}
        >
          <Text style={{ color: color.calendarHighlight, fontSize: 18, marginRight: 10, fontWeight: 'bold' }}>Done</Text>
        </TouchableOpacity>)
    })
  }
})

// const store = createStore(rootReducer)

const { store, persistor } = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
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
});
