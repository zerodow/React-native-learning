import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ItemDate extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        // console.log(this.props.date)
        const dayOfWeek = this.props.date.substring(0, this.props.date.indexOf(' '))
        const date = this.props.date.substring(this.props.date.indexOf(' ') + 1)
        return (
            <View style={styles.container}>
                <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'baseline',
        // backgroundColor: 'red'
    },
    dayOfWeek: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
        // textAlign: 'center'
    },
    dateText: {
        fontSize: 12,
        marginHorizontal: 20,
        color: 'gray',
        // textAlign: 'center'
    }
});
