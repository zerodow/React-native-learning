import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import OrderItem from '../components/OrderItem';
import { primaryColorGreen, primaryColorBrown, primaryColorRed, backgroundColor } from '../styles'
import { commonStyles } from '../styles'
import { connect } from 'react-redux'

class TabOrder extends Component {
  renderTitle = () => <Text style={commonStyles.screenTitle}>Order</Text>

  renderOrders = () => <FlatList
    style={{ flexGrow: 0 }}
    data={this.props.orders}
    keyExtractor={(item) => item.name}
    renderItem={({ item }) => <OrderItem item={item} />} />

  renderTotal = () => <View>
    <View style={{
      marginVertical: 16, height: 1, backgroundColor: primaryColorBrown,
      marginHorizontal: 7,
    }}>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={commonStyles.screenTitle}>Total</Text>
      <Text style={commonStyles.screenTitle}>{this.execute()}$</Text>
    </View>
  </View>

  execute() {
    let total = 0
    this.props.orders.forEach(item => {
      total = total + item.price * item.amount
    });
    return total
  }

  renderConfirm = () => <TouchableOpacity
    onPress={() => this.confirmOrder()}
    style={commonStyles.button}>
    <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm</Text>
  </TouchableOpacity>

  confirmOrder() {

  }

  render() {
    return (
      <View style={commonStyles.screenContainer}>
        {this.renderTitle()}
        {this.renderOrders()}
        {this.renderTotal()}
        {this.renderConfirm()}
      </View>
    );
  }
}

const mapStateToProps = ({ orders }) => ({ orders })

export default connect(mapStateToProps)(TabOrder)

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    borderTopColor: primaryColorBrown,
  }
});
