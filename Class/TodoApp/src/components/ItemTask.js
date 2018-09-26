import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import { color } from '../../styles'
export default class ItemTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: true
        };
    }

    chooseColorByCategory = () => {
        switch (this.props.item.category) {
            case 'To do': return color.categoryTodo
            case 'Shopping': return color.categoryShopping
            case 'Birthday': return color.categoryBirthday
            case 'Event': return color.categoryEvent
            case 'Personal': return color.categoryPersonal
            default: return 'white'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.checkBox}>
                    <RoundCheckbox
                        size={24}
                        checked={this.state.isSelected}
                        onValueChange={(newValue) => { this.setState({ isSelected: !this.state.isSelected }) }}
                    />
                </View>
                <View style={styles.time}>
                    <Text style={{ fontSize: 18 }}>{this.props.item.time}</Text>
                </View>
                <TouchableOpacity style={[styles.wrapTask, { backgroundColor: this.chooseColorByCategory() }]}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{this.props.item.category}</Text>
                    <Text style={{ color: 'white', fontSize: 14, marginTop: 2 }}>{this.props.item.content}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 70,
        paddingRight: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    checkBox: {
        flex: 0.5,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    time: {
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapTask: {
        height: 70,
        flex: 3,
        backgroundColor: 'pink',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
    }
});
