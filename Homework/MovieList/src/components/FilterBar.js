import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { connect } from 'react-redux'

export default class FilterBar extends Component {
    state = {
        text: ''
    }

    search() {
        this.props.onSearch(this.state.text)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, width: '50%', marginRight: 10, backgroundColor: 'white', padding: 5, borderRadius: 5 }}
                    value={this.state.text}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ text })}
                    placeholder={'Nhập từ khoá'} />
                <TouchableOpacity style={styles.button}
                    onPress={() => this.search()}>
                    <Text style={{ fontWeight: 'bold' }}>Search</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
    },
    checkBox: {
        width: 18,
        aspectRatio: 1,
        borderRadius: 9,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'black',
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '20%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 12,
        height: 12
    }
});


