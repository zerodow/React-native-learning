import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { backgroundColor } from '../styles'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode='contain'
                    style={styles.logo}
                    source={require('../../imgs/logo_app.jpg')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: backgroundColor,
        justifyContent: 'center'
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
});