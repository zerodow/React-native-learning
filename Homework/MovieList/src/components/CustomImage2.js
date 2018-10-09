import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class CustomImage2 extends Component {
    state = {
        realH: 0,
        realW: this.props.width
    }
    componentDidMount() {
        Image.getSize(this.props.uri,
            (width, height) => {
                this.setState({
                    realH: this.state.realW * height / width
                })
                this.props.onHeight(this.state.realW * height / width)
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
