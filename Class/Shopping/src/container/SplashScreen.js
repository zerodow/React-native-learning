import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { backgroundColor } from '../styles'
import firebase from 'react-native-firebase'

export default class SplashScreen extends Component {
    state = {

    }

    componentDidMount() {
        // firebase.auth().signOut()
        firebase.auth().onAuthStateChanged(res => res !== null
            ? setTimeout(() => {
                this.props.navigation.navigate('HomeScreen')
            }, 2000)
            : setTimeout(() => {
                this.props.navigation.navigate('LoginScreen')
            }, 100)
        )
    }

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