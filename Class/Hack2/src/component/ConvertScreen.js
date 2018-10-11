import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import { touchStartArray, touchResultArray } from '../actions/index'
import { WEIGHT_TYPE, LENGTH_TYPE } from '../const'

class ConvertScreen extends Component {
  state = {
    start: '',
    result: '',
  }

  //check moi khi click vao item cua list
  /**
   * 
   * @param {item cua list} item 
   * @param {item cua list resultArray hay startArray} type 
   */
  check(item, type) {
    if (type === 'start') {
      this.props.touchStartArray(item.name)
    } else {
      this.props.touchResultArray(item.name)
    }
    setTimeout(() => {
      this.convert(null)
    }, 200);
  }


  /**
   * 
   * @param {Gia tri truyen vao de convert} start 
   */
  convert(start) {
    if (this.state.start == '' && start == null) {
      alert('Vui lòng nhập số để chuyển đổi')
      return
    }

    let startValue = this.props.startArray.filter(item => item.isChoosen)
    let resultValue = this.props.resultArray.filter(item => item.isChoosen)

    if (start !== null) {
      this.setState({
        start: start,
        result: parseFloat(start) * startValue[0].value / resultValue[0].value + ''
      })
    } else {
      let start = parseFloat(this.state.start)
      this.setState({
        result: start * startValue[0].value / resultValue[0].value + ''
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.start}>
          <TextInput
            keyboardType='numeric'
            value={this.state.start}
            style={styles.input}
            placeholder={'Nhap so'}
            onChangeText={(start) => this.convert(start)}
          />
          <FlatList
            data={this.props.startArray}
            keyExtractor={(item) => item.value + ''}
            renderItem={({ item, index }) =>
              (index % 2 == 0
                ? <TouchableOpacity style={styles.item}
                  onPress={() => this.check(item, 'start')}>
                  <Text style={{ color: item.isChoosen ? 'red' : 'blue' }}>{item.name}</Text>
                </TouchableOpacity>
                : <TouchableOpacity style={[styles.item, { backgroundColor: '#FDB04A' }]}
                  onPress={() => this.check(item, 'start')}>
                  <Text style={{ color: item.isChoosen ? 'red' : 'blue' }}>{item.name}</Text>
                </TouchableOpacity>
              )
            }
          />
        </View>
        <View style={styles.result}>
          <TextInput
            keyboardType='numeric'
            value={this.state.result}
            style={{ height: 40, paddingLeft: 20 }}
            placeholder={'Ket qua'}
            onChangeText={(result) => this.setState({ result })}
          />
          <FlatList
            data={this.props.resultArray}
            keyExtractor={(item) => item.value + ''}
            renderItem={({ item, index }) =>
              (index % 2 == 0
                ? <TouchableOpacity style={styles.item}
                  onPress={() => this.check(item, 'result')}>
                  <Text style={{ color: item.isChoosen ? 'red' : 'blue' }}>{item.name}</Text>
                </TouchableOpacity>
                : <TouchableOpacity style={[styles.item, { backgroundColor: '#FDB04A' }]}
                  onPress={() => this.check(item, 'result')}>
                  <Text style={{ color: item.isChoosen ? 'red' : 'blue' }}>{item.name}</Text>
                </TouchableOpacity>
              )
            }
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.type,
    startArray: state.length.startArray,
    resultArray: state.length.resultArray
  }
}

export default connect(mapStateToProps, { touchStartArray, touchResultArray })(ConvertScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  start: {
    flex: 1,
    // backgroundColor: 'red'
  },
  result: {
    flex: 1,
    // backgroundColor: 'pink'
  },
  item: {
    justifyContent: 'center',
    backgroundColor: '#FBC680',
    paddingLeft: 20,
    height: 30
  },
  input: {
    height: 40,
    paddingLeft: 20
  }
});



