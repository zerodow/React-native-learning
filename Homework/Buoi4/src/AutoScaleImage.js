import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

export default class AutoScaleImage extends Component {
    state = {
        fixedH: 0,
        fixedW: Dimensions.get('window').width / 2
    }
    render() {
        Image.getSize(this.props.uriImage,
            (realH, realW) => {
                // console.log(realH + ' ' + realW)
                this.setState({
                    fixedH: this.state.fixedW * realH / realW,
                })
            },
            (error) => {
                console.log(error)
            })
        return (
            <Image
                source={{ uri: this.props.uriImage }}
                style={{ width: this.state.fixedW, height: this.state.fixedH }}
            />
        );
    }
}
