import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Custom extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: this.props.color }}>{this.props.name}</Text>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
