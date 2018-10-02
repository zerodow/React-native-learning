import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class CustomImage extends Component {
    state = {
        realH: this.props.height,
        realW: 0
    }
    componentDidMount() {
        Image.getSize(this.props.uri,
            (width, height) => {
                // console.log(width + ' ' + height)
                this.setState({
                    realW: this.state.realH * width / height
                })
            },
            (error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Image
                source={{ uri: this.props.uri }}
                style={{ width: this.state.realW, height: this.state.realH }} />
        );
    }
}
