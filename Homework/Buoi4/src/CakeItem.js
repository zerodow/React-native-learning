import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

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
      <LinearGradient colors={[this.props.cake.color['0'], this.props.cake.color['1'], this.props.cake.color['2']]}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        style={{ margin: 5, borderRadius: 5 }}>
        <TouchableOpacity style={[styles.item]}
          onPress={() => this.props.navigation.navigate('CakeDetail', { cake: this.props.cake })}>
          <Image
            resizeMode='contain'
            style={{ paddingLeft: 10, width: '50%', height: '80%' }}
            source={{ uri: this.props.cake.photo }} />
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>{this.props.cake.name}</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    flexDirection: 'row',
    height: heightScreen * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
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
