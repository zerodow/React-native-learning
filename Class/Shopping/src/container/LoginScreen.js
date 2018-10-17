import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Platform } from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorGreen, primaryColorRed } from '../styles'
import { Button } from 'react-native-elements';
import firebase from 'react-native-firebase';

export default class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        isSigningIn: false,
        isSigningUp: false
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

    onSignIn = () => {

        if (this.state.email === '') {
            this.setState({ error: 'Error: Pls enter email' })
            return
        }

        if (this.state.password === '') {
            this.setState({ error: 'Error: Pls enter password' })
            return
        }
        this.setState({ isSigningIn: true })

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                console.log(res)
                this.setState({ isSigningIn: false })
            })
            .catch(error => this.setState({ error: error.toString(), isSigningIn: false }))
    }

    onSignUp = () => {

        if (this.state.email === '') {
            this.setState({ error: 'Error: Pls enter email' })
            return
        }

        if (this.state.password === '') {
            this.setState({ error: 'Error: Pls enter password' })
            return
        }

        this.setState({ isSigningUp: true })

        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                console.log(res)
                this.setState({ isSigningUp: false })
            })
            .catch(error => this.setState({ error: error.toString(), isSigningUp: false }))
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
                    keyboardType={'email-address'}
                    style={styles.input}
                    onChangeText={(email) => this.setState({ email })}
                />

                <View style={{ flexDirection: 'row', marginTop: 10, }}>
                    <Image
                        style={{ width: 20, height: 20, marginRight: 5 }}
                        source={require('../../imgs/ic_password.png')} />
                    <Text>Password</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={(password) => this.setState({ password })}
                />
            </View>
        )
    }

    renderButton = () => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>
                <Button
                    loading={this.state.isSigningUp}
                    onPress={this.onSignUp}
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
                    loading={this.state.isSigningIn}
                    onPress={this.onSignIn}
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
            <Text style={{ color: primaryColorRed, marginTop: 20, }}>{this.state.error}</Text>
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