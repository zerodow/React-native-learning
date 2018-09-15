import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import FoodItem from './FoodItem';

export default class FoodList extends Component {
    static navigationOptions = {
        title: 'FoodList',
        headerTitleStyle: {
            width: '85%',
            textAlign: 'center',
        },
        headerLeft: (<View></View>),
        headerRight: (<View></View>)
    }

    state = {
        data: [],
        isLoading: true
    }
    componentDidMount() {
        fetch('https://latte.lozi.vn/v1.2/topics/1/photos?t=popular&cityId=1')
            .then((response) => response.json())
            .then((res) => {
                // console.log(res.data)
                this.setState({
                    data: res.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderItem(item) {
        return (
            <FoodItem navigation={this.props.navigation} food={item} />
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
                {this.state.isLoading
                    ? <ActivityIndicator />
                    : <FlatList
                        data={this.state.data}
                        numColumns={2}
                        keyExtractor={(item) => item._id + ''}
                        renderItem={({ item }) => this.renderItem(item)}
                    />
                }
            </View>
        )
    }
}
