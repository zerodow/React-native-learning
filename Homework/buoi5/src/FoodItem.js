import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AutoScale from './AutoScale';

const widthScr = Dimensions.get('window').width
const heightScr = Dimensions.get('window').height

export default class FoodItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => this.props.navigation.navigate('FoodDetail', { food: this.props.food })}>
                <AutoScale
                    width={widthScr / 2 - 20}
                    uriImage={this.props.food.image} />
                <View style={{ width: '100%', height: 20 }}>
                    <Text numberOfLines={1} style={styles.title}>{this.props.food.dish.foodName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: widthScr / 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'gray',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 3,
    },
    price: {
        width: '50%',
        height: 20
    }
})
