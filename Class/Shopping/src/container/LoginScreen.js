import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Platform } from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorGreen, primaryColorRed } from '../styles'
import { Button } from 'react-native-elements';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderLogo = () => {
        return (
            <Image
                resizeMode='contain'
                style={styles.logo}
                source={require('../../imgs/logo_app.jpg')}
            />
        )
    }

    renderInput = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ width: 20, height: 20, marginRight: 5 }}
                        source={require('../../imgs/ic_email.png')} />
                    <Text style={styles.textStyle}>Email</Text>
                </View>
                <TextInput
                    style={styles.input}
                />

                <View style={{ flexDirection: 'row', marginTop: 10, }}>
                    <Image
                        style={{ width: 20, height: 20, marginRight: 5 }}
                        source={require('../../imgs/ic_password.png')} />
                    <Text>Password</Text>
                </View>
                <TextInput
                    style={styles.input}
                />
            </View>
        )
    }

    renderButton = () => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>
                <Button
                    titleStyle={{ fontSize: 16 }}
                    title="Sign up"
                    buttonStyle={{
                        backgroundColor: primaryColorGreen,
                        width: 100,
                        height: 45,
                        borderRadius: 30
                    }}
                    containerStyle={{ marginTop: 20, marginHorizontal: 5 }}
                />
                <Button
                    titleStyle={{ fontSize: 16 }}
                    title="Log In"
                    buttonStyle={{
                        backgroundColor: primaryColorRed,
                        width: 100,
                        height: 45,
                        borderRadius: 30
                    }}
                    containerStyle={{ marginTop: 20, marginHorizontal: 5 }}
                />
            </View>
        )
    }

    renderError = () => {
        return (
            <Text style={{ color: primaryColorRed, marginTop: 20, }}>Error ...</Text>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
                {this.renderInput()}
                {this.renderError()}
                {this.renderButton()}
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
    textStyle: {
        marginStart: 5,
        color: primaryColorBrown
    },
    input: {
        height: 40,
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
        borderColor: primaryColorBrown,
        paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    }
});