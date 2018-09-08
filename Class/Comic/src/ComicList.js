import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import ComicItem from './ComicItem';
import { data } from './database.json';

export default class ComicList extends Component {
    static navigationOptions = {
        title: 'ComicList',
        headerTitleStyle: {
            width: '100%',
            textAlign: 'center',
        },
        headerLeft: (<View></View>),
        headerRight: (<View></View>)
    };
    renderItem = ({ item }) => <ComicItem comic={item} navigation={this.props.navigation} />

    render() {
        return (
            <View style={{ backgroundColor: 'rgb(223,223,223)', flex: 1 }}>
                <FlatList
                    numColumns={2}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderItem}
                />
                <Button
                    title={'button'}
                    onPress={() => this.props.navigation.navigate('ComicDetail')} />
            </View>
        );
    }
}
