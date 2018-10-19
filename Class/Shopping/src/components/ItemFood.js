import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { primaryColorGreen, primaryColorBrown, primaryColorRed, backgroundColor } from '../styles'

const { width, height } = Dimensions.get('window')

export default class ItemFood extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: this.props.item.image }}
                    style={{ width: '90%', aspectRatio: 1, borderRadius: 100 }}
                />
                <Text style={styles.nameItem} numberOfLines={1}>{this.props.item.name}</Text>
                <Text style={styles.price}>{this.props.item.price}$</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        padding: 10,
        alignItems: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: primaryColorRed,
        borderRadius: 20,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    nameItem: {
        color: primaryColorBrown,
        fontSize: 18
    }
});