import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ComicItem from './ComicItem';
import { data } from './database.json';

export default class ComicList extends Component {
    renderItem = ({ item }) => <ComicItem comic={item} />

    render() {
        return (
            <View style={{ backgroundColor: 'rgb(223,223,223)', flex: 1 }}>
                <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
