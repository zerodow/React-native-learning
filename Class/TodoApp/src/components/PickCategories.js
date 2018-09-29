import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { color } from '../../styles'
import { connect } from 'react-redux'
import { pickCategory } from '../action'

const Category = ['To do', 'Shopping', 'Birthday', 'Event', 'Personal']

class PickCategories extends Component {
    state = {
        category: 'Birthday'
    }
    renderItem(item) {
        return (
            <TouchableOpacity style={[styles.category, { backgroundColor: this.chooseColorByCategory(item) }]}
                // onPress={() => this.props.onGet(item)}
                onPress={() => this.props.pickCategory(item)}
            >
                <Text style={styles.itemCategory}>{item}</Text>
            </TouchableOpacity >
        )
    }

    chooseColorByCategory = (category) => {
        switch (category) {
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
            <View>
                <FlatList
                    style={{ marginHorizontal: 20 }}
                    horizontal={true}
                    data={Category}
                    keyExtractor={(item) => item + ''}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => this.renderItem(item)} />

            </View>
        );
    }
}

export default connect(null, { pickCategory })(PickCategories)

const styles = StyleSheet.create({
    itemCategory: {
        fontSize: 16,
        color: 'white',
    },
    category: {
        borderRadius: 10,
        margin: 5,
        width: 90,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
        marginStart: 20,
        marginTop: 8,
    },
});
