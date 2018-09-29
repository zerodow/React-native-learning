import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../container/const';

class MainColor extends Component {
    render() {
        return (
            <View style={{ height: DEVICE_HEIGHT / 2, backgroundColor: `rgb(${this.props.currentColor.value1},${this.props.currentColor.value2},${this.props.currentColor.value3})` }}>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentColor: state.currentColor
    }
}

export default connect(mapStateToProps)(MainColor)
