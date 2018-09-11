import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

export default class CakeDetail extends Component {
  static navigationOptions = {
    title: 'CakeDetail',
    headerTitleStyle: {
      width: '90%',
      textAlign: 'center',
    },
    headerRight: (<View></View>)
  };

  renderList(item) {
    return (
      <View style={{ padding: 5, marginLeft: 20 }}>
        <Text style={{ fontSize: 17, color: '#FF33CC' }}>{item.name}</Text>
      </View>
    )
  }

  render() {
    const color = this.props.navigation.getParam('cake').color
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF4F8' }}>
        <LinearGradient colors={[color['0'], color['1'], color['2']]}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          style={{ margin: 5, borderRadius: 5 }}>
          <View style={[styles.list]}>
            <Image
              resizeMode='contain'
              style={{ paddingLeft: 10, width: '50%', height: '80%' }}
              source={{ uri: this.props.navigation.getParam('cake').photo }} />
            <View style={styles.wrapTitle}>
              <Text style={styles.title}>{this.props.navigation.getParam('cake').name}</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.item}>
          <FlatList
            data={this.props.navigation.getParam('cake').item}
            keyExtractor={(item, index) => index + ''}
            renderItem={({ item }) => this.renderList(item)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    height: Dimensions.get('window').height * 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
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
