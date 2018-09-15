import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

export default class AutoScale extends Component {
    state = {
        fixedH: 0,
        fixedW: this.props.width
    }

    componentDidMount() {
        Image.getSize(this.props.uriImage,
            (realH, realW) => {
                this.setState({
                    fixedH: this.state.fixedW * realH / realW
                })
            })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Image
                    style={{ width: this.state.fixedW, height: this.state.fixedW }}
                    source={{ uri: this.props.uriImage }} />
            </View>
        );
    }
}
