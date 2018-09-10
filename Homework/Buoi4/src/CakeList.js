import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { data } from './data'
import CakeItem from './CakeItem';

export default class CakeList extends Component {
  static navigationOptions = {
    title: 'CakeList',
    headerTitleStyle: {
      width: '90%',
      textAlign: 'center',
    },
    headerLeft: (<View></View>),
    headerRight: (<View></View>)
  };
  renderItem(item) {
    return (
      <CakeItem cake={item}
        navigation={this.props.navigation} />
    )
  }
  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:'#FFF4F8'}}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id + ''}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}
