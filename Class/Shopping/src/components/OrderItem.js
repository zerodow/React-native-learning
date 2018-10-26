import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { primaryColorGreen, primaryColorBrown, primaryColorRed, backgroundColor } from '../styles'
import { deleteOrder } from '../actions'
class OrderItem extends Component {
    deleteOrder() {
        this.props.deleteOrder(this.props.item)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.deleteOrder()}>
                    <Ionicons name={'trash'} size={25} color={primaryColorGreen} />
                </TouchableOpacity>
                <Text style={styles.amount}>{this.props.item.amount}</Text>
                <Text style={styles.name}>{this.props.item.name} </Text>
                <Text style={styles.price}>{this.props.item.price*this.props.item.amount}$</Text>
            </View>
        );
    }
}

export default connect(null, { deleteOrder })(OrderItem)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        marginTop: 10,
    },
    amount: {
        color: primaryColorBrown,
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 12
    },
    name: {
        color: primaryColorBrown,
        marginHorizontal: 12,
        flex: 1
    },
    price: {
        color: primaryColorGreen,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 12
    }
});
