import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { primaryColorGreen, primaryColorBrown, primaryColorRed, backgroundColor } from '../styles'
import firebase from 'react-native-firebase'
import ItemFood from '../components/ItemFood';
import { commonStyles } from '../styles'


export default class TabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currenCategory: 'Hamburger',
      dishes: []
    };
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    firebase.database().ref(`dishes/${this.state.currenCategory}`)
      .on('value', res => this.setState({ dishes: res._value }))
  }

  renderCategories = () => {
    return (
      <FlatList
        style={{ flexGrow: 0, marginBottom: 20 }}
        data={['Hamburger', 'Pizza', 'Spaghetti', 'Salad', 'Drink', 'Snack']}
        keyExtractor={(item) => item}
        renderItem={this.renderItemCategories}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    )
  }

  renderItemCategories = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.change(item)}>
        <Text style={[styles.type, { color: this.state.currenCategory === item ? primaryColorRed : primaryColorGreen }]}>{item}</Text>
      </TouchableOpacity>
    )
  }

  renderItemMenu = ({ item }) => {
    return (
      <ItemFood item={item} />
    )
  }

  change(item) {
    this.setState({ currenCategory: item }, () => this.loadData())
  }

  renderMenu = () => {
    return (
      <FlatList
        numColumns={2}
        data={this.state.dishes}
        renderItem={this.renderItemMenu}
        keyExtractor={(item) => item.key}
      />
    )
  }

  render() {
    return (
      <View style={commonStyles.screenContainer}>
        {this.renderCategories()}
        {this.renderMenu()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  type: {
    fontSize: 18,
    color: primaryColorGreen,
    marginHorizontal: 10,
    marginTop: Platform.OS === 'android' ? 10 : 20,
    fontWeight: 'bold',
  }
});