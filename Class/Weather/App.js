import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import SearchBar from './src/SearchBar'
import DetailWeather from './src/DetailWeather';
import WeatherItem from './src/WeatherItem';

const { width, height } = Dimensions.get('window')

export default class Weather extends Component {
  state = {
    data: {},
    text: '',
    isLoading: true
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=hanoi&appid=927d09bc49dbee6aac7f5cb1df707542')
      .then((response) => response.json())
      .then(res => {
        if (res.cod !== '200') {
          Alert.alert('City not found')
          this.setState({ isLoading: false })
        } else {
          this.setState({ data: res, isLoading: false, list: res.list.splice(1, 6) })
        }
        // console.log(res)

        // console.log(res.list.splice(0, 1))

      })
      .catch(error => console.log(error))

  }


  onClick() {
    // console.log(this.state.data)
    // console.log(this.state.text)
    this.setState({ isLoading: true })
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.text}&appid=927d09bc49dbee6aac7f5cb1df707542`)
      .then((response) => response.json())
      .then(res => {
        if (res.cod !== '200') {
          Alert.alert('City not found')
          this.setState({ isLoading: false })
        } else {
          this.setState({ data: res, isLoading: false, list: res.list.splice(1, 6) })
        }
      })
      .catch(error => console.log(error))

  }

  renderItem(item) {
    return (
      <WeatherItem weather={item} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          width: width * 0.8,
          height: height * 0.07,
          flexDirection: 'row',
        }}>
          <TextInput
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            style={styles.inputWrap} />
          <TouchableOpacity style={{
            flex: 3,
            // height: 50,
            padding: 5,
            margin: 5,
            borderRadius: 5,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
            onPress={() => this.onClick()}>
            <Text style={{ textAlign: 'center' }}>Search</Text>
          </TouchableOpacity>
        </View>
        {this.state.isLoading
          ? <ActivityIndicator />
          : <View style={{ justifyContent: 'center', alignItems: 'center', height: height * 0.9 }}>
            <DetailWeather weather={this.state.data.list[0]} location={this.state.data.city.name} />
            <FlatList
              style={{ height: height * 0.4 }}
              data={this.state.list}
              keyExtractor={(item) => item.dt + ''}
              renderItem={({ item }) => this.renderItem(item)} />
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#373448'
  },
  inputWrap: {
    flex: 7,
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
})
