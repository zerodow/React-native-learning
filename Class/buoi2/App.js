import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Custom from './Custom';

export default class App extends Component {
  state = {
    backgroundColor: 'green'
  }

  onPressButton(color) {
    this.setState({
      backgroundColor: color
    })
  }
  // onPressButton = () => {
  //   console.log(color)
  // }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Button
          title='red'
          // color='#ffffff'
          onPress={() => this.onPressButton('red')}
        />
        <Button
          title='yellow'
          // color='#ffffff'
          onPress={() => this.onPressButton('yellow')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    flex: 1,
  },
  textGreen: {
    backgroundColor: 'green',
    flex: 1
  },
  textRed: {
    backgroundColor: 'red',
    flex: 1
  },
  textYellow: {
    backgroundColor: 'yellow',
    flex: 1
  }
})

