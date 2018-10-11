import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { changeType } from '../actions'
import { type } from '../const'

class TypeScreen extends Component {
  change(item) {
    if (this.props.type !== item.name) {
      this.props.changeType(item.name)
      this.props.navigation.goBack(null)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.listType}
          keyExtractor={(item) => item.name + ''}
          renderItem={({ item, index }) =>
            (index % 2 == 0
              ? <TouchableOpacity style={styles.item}
                onPress={() => this.change(item)}>
                <Text style={{ fontSize: 16, color: item.isChoosen ? 'red' : 'blue' }}>{item.name}</Text>
              </TouchableOpacity>
              : <TouchableOpacity style={[styles.item, { backgroundColor: '#FDB04A' }]}
                onPress={() => this.change(item)}>
                <Text style={{ fontSize: 16, color: item.isChoosen ? 'red' : 'blue' }}>{item.name}</Text>
              </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.length.type,
    listType: state.length.listType
  }
}

export default connect(mapStateToProps, { changeType })(TypeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    justifyContent: 'center',
    backgroundColor: '#FBC680',
    paddingLeft: 20,
    // height: 30,
    paddingVertical: 10
  },
});