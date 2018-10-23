import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default class componentName extends Component {
    // Calling the following function will open the FB login dialogue:
    facebookLogin = async () => {
        try {
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
                throw new Error('User cancelled request'); // Handle this however fits the flow of your app
            }

            console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

            // get the access token
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
            }

            // create a new firebase credential with the token
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

            // login with credential
            const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

            console.info(JSON.stringify(currentUser.user.toJSON()))
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            console.log(error)
                            console.log(result)
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.log(data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")} />
                <TouchableOpacity onPress={() => this.facebookLogin()}>
                    <Text>ahihihih</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
