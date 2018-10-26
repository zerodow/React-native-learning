import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'

class HeaderTab extends Component {
    getTotal(){
        let total = 0
        this.props.orders.forEach(item => {
            total = total + item.amount
        });

        return total
    }
    render() {
        return (
            <View>
                <Ionicons name={this.props.iconName} size={25} color={this.props.tintColor} />
                {this.props.routeName === 'Order' && this.props.orders.length !== 0
                    ? <View style={styles.notify}>
                        <Text style={{ color: 'white', fontSize: 12 }}>{this.getTotal()}</Text>
                    </View>
                    : null
                }
            </View>
        );
    }
}

const mapStateToProps = ({ orders }) => ({ orders })

export default connect(mapStateToProps)(HeaderTab)

const styles = StyleSheet.create({
    notify: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        position: 'absolute',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        right: 0,
        left: 15,
    }
});
