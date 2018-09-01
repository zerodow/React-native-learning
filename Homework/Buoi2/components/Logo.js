import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.logo}>
                <Text style={styles.bigText}>Schedule</Text>
                <Image
                    style={styles.image}
                    source={require('../images/logo.png')} />
                <Text style={styles.normalText}>FIFA WORLDCUP 2018</Text>
            </View>
        );
    }
}
