import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class AutoScaleImage extends Component {
    render() {
        Image.getSize(this.props.uriImage,
            (realH, realW) => {
                console.log(realH + ' ' + realW)
            },
            (error) => {
                console.log(error)
            })
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}
