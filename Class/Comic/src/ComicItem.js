import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default class ComicItem extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={styles.contaier}
                onPress={() => this.props.navigation.navigate('ComicDetail', { itemData: this.props.comic })}
            >
                <Image
                    style={styles.image}
                    source={{ uri: this.props.comic.photos['0'] }} />
                <Text style={styles.text}
                    numberOfLines={2} >{this.props.comic.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    contaier: {
        height: 210,
        width: widthScreen / 2,
        padding: 8,
    },
    image: {
        height: 150
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
    }
})
