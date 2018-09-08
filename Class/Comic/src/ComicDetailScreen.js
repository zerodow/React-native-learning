import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import AutoScaleImage from './AutoScaleImage';

export default class ComicDetailScreen extends Component {
    static navigationOptions = {
        title: 'ComicDetail',
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center',
        },
        headerRight: (<View></View>)
    };

    renderItem = ({ item }) => <AutoScaleImage uriImage={item} />
    // <Image
    //     resizeMode='stretch'
    //     style={{ width: '100%', height: 350 }}
    //     source={{ uri: item }} />

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.props.navigation.getParam('itemData').photos}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
