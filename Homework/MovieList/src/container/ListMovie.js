import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { URL, API_KEY, HOT_URL, URL_IMAGE, WIDTH_SCREEN } from './const'
import { connect } from 'react-redux';
import { addData, addHotMovie } from '../actions';
import ItemMovie from './ItemMovie';
import FilterBar from '../components/FilterBar'
import Swiper from 'react-native-swiper'
import CustomImage2 from '../components/CustomImage2';
class ListMovie extends Component {
  state = {
    isLoading: true,
    isLoading2: true
  }
  componentDidMount() {
    this.getData()
  }

  getData() {

    fetch(`${HOT_URL}`)
      .then((response) => {
        let status = response.status
        response.json().then(obj => {
          if (status === 200) {
            this.props.addHotMovie(obj.results)
            this.setState({ isLoading2: false })
          }
        })
      })

    fetch(`${URL}${API_KEY}`)
      .then((response) => {
        let status = response.status
        response.json().then(obj => {
          if (status === 200) {
            this.props.addData(obj.results)
            this.setState({ isLoading: false })
          }
        });
      })

  }

  search(text) {
    this.setState({ isLoading: true })
    fetch(`${URL}${API_KEY}&with_keywords=${text}`)
      .then((response) => {
        let status = response.status
        response.json().then(obj => {
          if (status === 200) {
            if (obj.results.length == 0) {
              alert('Không có dữ liệu')
              this.getData()
            } else {
              this.props.addData(obj.results.slice(0, 3))
              this.setState({ isLoading: false })
            }
          }
        });
      })
  }

  renderItem = (item) => <ItemMovie item={item} navigation={this.props.navigation} />

  render() {
    return (
      <View style={styles.container}>
        {/* <FilterBar
          onSearch={(text) => this.search(text)} /> */}
        <ScrollView style={{ flex: 1 }}>
          <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ fontSize: 20, color: '#49CCBB', fontWeight: 'bold', }}>Hot Movie</Text>
              {this.state.isLoading2
                ? <ActivityIndicator size='large' />
                : <FlatList
                  horizontal={true}
                  data={this.props.hotMovies}
                  keyExtractor={(item) => item.id + ''}
                  renderItem={({ item, index }) =>
                    <TouchableOpacity style={{ backgroundColor: 'white', margin: 30 }}
                      onPress={() => this.props.navigation.navigate('DetailMovie', { detail: item })}>
                      <CustomImage2
                        width={WIDTH_SCREEN / 2}
                        uri={`${URL_IMAGE}${item.poster_path}`}
                      />
                    </TouchableOpacity>
                  }
                />
              }
              <View style={{ width: '100%', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16, color: 'red' }}>See more >></Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: '#49CCBB', fontWeight: 'bold' }}>List Movie</Text>
              {this.state.isLoading
                ? <ActivityIndicator size='large' />
                : <FlatList
                  data={this.props.data}
                  keyExtractor={(item) => item.id + ''}
                  renderItem={({ item }) => this.renderItem(item)}
                />
              }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
  hotMovies: state.dataReducer.hotMovies
})

export default connect(mapStateToProps, { addData, addHotMovie })(ListMovie)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});