import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SectionList } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { calendarHighlight, calendarBackground } from '../../styles'
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';
import { data } from '../../database.json'

export default class Schedule extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Schedule',
        headerTitleStyle: {
            width: '85%',
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 'bold',
            color: 'gray',
        },
        headerStyle: {
            elevation: 0,
            borderBottomWidth: 0,
        },
        headerLeft: (<View></View>),
        headerRight: (<TouchableOpacity
            onPress={() => navigation.navigate('AddTask')}>
            <Image
                style={{ height: '70%', aspectRatio: 1, marginRight: 10 }}
                source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADPSURBVGhD7dZBCsIwEIXhgFtFvIDgAVx5GO8jXsWFQ8pE6UaT6KJdCq48iQfQCqmoFEppq1N5H8wqocwPpVQBAABIRES9OE5G+RiTDsJRtzDvp5Hxt3y08Uk46haESIMQaRAiDUKkQYg0CGnL4y+W+TCrOprt/D3EnYvulc16s5uEVeohssPXhb4/bhVWqQchjU1jIcd+9n6fqk7E/vKx0LXoXtlkz1mGVX4Dn19pECINQqRBiDQIkQYh0vxNCG3tWLOn5xi3CEcAAADQDqXu1SdrzcOGeTsAAAAASUVORK5CYII=' }} />
        </TouchableOpacity>)
    })

    renderItem = ({ item }) => <ItemTask item={item} />

    renderSectionHeader = ({ section: { date } }) => <ItemDate date={date} />

    render() {
        return (
            <View style={styles.container}>
                <CalendarStrip
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                    calendarColor={calendarBackground}
                    style={styles.calendar} />
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={data}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    calendar: {
        height: 100,
        paddingTop: 10,
        // backgroundColor: calendarBackground
    }
})
