import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { URL, API_KEY } from './const'
import { connect } from 'react-redux';
import { addData } from '../actions';
import ItemMovie from './ItemMovie';
import FilterBar from '../components/FilterBar'
class ListMovie extends Component {
  state = {
    isLoading: true
  }
  componentDidMount() {
    this.getData()
  }

  getData() {
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
              this.props.addData(obj.results)
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
        <FilterBar
          onSearch={(text) => this.search(text)} />
        {this.state.isLoading
          ? <ActivityIndicator size='large' />
          : <FlatList
            data={this.props.data}
            keyExtractor={(item) => item.id + ''}
            renderItem={({ item }) => this.renderItem(item)}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data
})

export default connect(mapStateToProps, { addData })(ListMovie)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});