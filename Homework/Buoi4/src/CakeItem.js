import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import AutoScaleImage from './AutoScaleImage';

const heightScreen = Dimensions.get('window').height

export default class CakeItem extends Component {
  static navigationOptions = {
    title: 'CakeItem',
    headerTitleStyle: {
      width: '100%',
      textAlign: 'center',
    },
    headerLeft: (<View></View>),
    headerRight: (<View></View>)
  };

  render() {
    return (
      <TouchableOpacity style={[styles.item, { backgroundColor: this.props.cake.color, }]}
        onPress={() => this.props.navigation.navigate('CakeDetail', { cake: this.props.cake })}>
        <Image
          resizeMode='stretch'
          style={{ paddingLeft: 10, width: '50%', height: '80%' }}
          source={{ uri: this.props.cake.photo }} />
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>{this.props.cake.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: '100%' - 10,
    flexDirection: 'row',
    height: heightScreen / 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  wrapTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '100%'
  }
})
