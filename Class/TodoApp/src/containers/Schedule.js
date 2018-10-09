import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SectionList } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { calendarHighlight, calendarBackground } from '../../styles'
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';
import { connect } from 'react-redux'

const listReference = 'listReference'

class Schedule extends Component {
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

    onDateSelected = (date) => {
        // let day = this.changeForm(date._d)

        // let index = this.props.tasks.filter((item,index)=>{
        //     if(item.date === day){
        //         return index
        //     }
        // })

        const dayId = Math.floor(date._d.getTime() / (24 * 60 * 60 * 1000))
        const index = this.props.tasks.map(item => item.id).indexOf(dayId)

        index !== -1 && this.refs.listReference.scrollToLocation({
            sectionIndex: index,
            itemIndex: 0
        })
    }


    changeForm(date) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
    }

    renderItem = ({ item, section }) => <ItemTask item={item} dayId={section.id} />

    renderSectionHeader = ({ section: { date, data } }) => (data.length !== 0 && <ItemDate date={date} />)

    render() {
        return (
            <View style={styles.container}>
                <CalendarStrip
                    onDateSelected={this.onDateSelected}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                    calendarColor={calendarBackground}
                    style={styles.calendar} />
                <SectionList
                    ref={listReference}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={this.props.tasks}
                    keyExtractor={(item) => item.id}
                />
                <TouchableOpacity style={{ width: 50, height: 30, backgroundColor: 'red' }}
                    onPress={() => console.log(this.props.tasks)}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        tasks: store.tasks
    }
}

export default connect(mapStateToProps)(Schedule)

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
