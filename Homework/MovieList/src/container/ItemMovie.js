import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CustomImage from '../components/CustomImage'
import { WIDTH_SCREEN, HEIGHT_SCREEN, URL_IMAGE } from './const'

class ItemMovie extends Component {
  click() {
    this.props.navigation.navigate('DetailMovie', { detail: this.props.item })
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomImage
          uri={`${URL_IMAGE}${this.props.item.poster_path}`}
          height={200} />
        <View style={styles.detail}>
          <Text style={[styles.text, { fontSize: 18, fontWeight: 'bold', marginBottom: 10 }]}>{this.props.item.title}</Text>
          <View style={{ justifyContent: 'space-between' }}>
            <Text style={[styles.text]}>{this.props.item.release_date}</Text>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>Vote :
          <Text style={[styles.text]}> {this.props.item.vote_average} / 10</Text>
            </Text>
            <Text style={[styles.text, { fontWeight: 'bold' }]} numberOfLines={4}>Overview:
          <Text style={[styles.text]}> {this.props.item.overview}</Text>
            </Text>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>Vote count :
              <Text style={[styles.text]}> {this.props.item.vote_count}</Text>
            </Text>
          </View>
          <View style={{ justifyContent: 'flex-end', flexDirection: 'row', width: '100%' }}>
            <TouchableOpacity onPress={() => this.click()}>
              <Text style={[styles.text, { color: 'green' }]}>More info >></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    width: WIDTH_SCREEN,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    marginLeft: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal'
  }
});

export default connect()(ItemMovie)
